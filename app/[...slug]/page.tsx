import type { Metadata } from "next";
import Link from "@/components/SiteLink";
import { notFound } from "next/navigation";
import {
  PAGES_TECHNIQUES,
  RUBRIQUES,
  hrefRubrique,
  hrefSousRubrique,
  resolveChemin,
} from "@/lib/arborescence";
import styles from "@/app/construction.module.css";

type Params = { slug: string[] };

function trouverCible(segments: string[]) {
  const technique =
    segments.length === 1
      ? PAGES_TECHNIQUES.find((page) => page.slug === segments[0])
      : undefined;
  if (technique) return { titre: technique.label, parent: null, enfants: [] };
  const resolu = resolveChemin(segments);
  if (!resolu || resolu.rubrique.slug === "accueil") return null;
  const { rubrique, sousRubrique } = resolu;
  return {
    titre: sousRubrique?.label ?? rubrique.label,
    parent: sousRubrique
      ? { label: rubrique.label, href: hrefRubrique(rubrique.slug) }
      : null,
    enfants: sousRubrique
      ? []
      : (rubrique.sousRubriques ?? []).map((enfant) => ({
          label: enfant.label,
          href: hrefSousRubrique(rubrique, enfant),
        })),
  };
}

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return [
    ...RUBRIQUES.filter((rubrique) => rubrique.slug !== "accueil").flatMap(
      (rubrique) => [
        { slug: [rubrique.slug] },
        ...(rubrique.sousRubriques ?? []).map((enfant) => ({
          slug: [rubrique.slug, enfant.slug],
        })),
      ],
    ),
    ...PAGES_TECHNIQUES.map((page) => ({ slug: [page.slug] })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cible = trouverCible(slug);
  return cible
    ? {
        title: `${cible.titre} — en construction`,
        description: `${cible.titre} — Centre Émergent de l’ISMGB. Cette page est en cours de construction.`,
      }
    : { title: "Page introuvable" };
}

export default async function PageConstruction({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cible = trouverCible(slug);
  if (!cible) notFound();
  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.fil} aria-label="Fil d’Ariane">
          <ol>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            {cible.parent && (
              <li>
                <Link href={cible.parent.href}>{cible.parent.label}</Link>
              </li>
            )}
            <li aria-current="page">{cible.titre}</li>
          </ol>
        </nav>
        <p className={styles.statut}>Page en cours de construction</p>
        <h1 className={styles.titre}>{cible.titre}</h1>
        <p className={styles.chapeau}>
          Le contenu de cette rubrique est en préparation. Merci de votre
          visite.
        </p>
        {cible.enfants.length > 0 && (
          <nav aria-label={`Rubriques de ${cible.titre}`}>
            <ul className={styles.liste}>
              {cible.enfants.map((enfant) => (
                <li key={enfant.href}>
                  <Link href={enfant.href}>{enfant.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className={styles.actions}>
          <Link href="/" className="btn btn--solid">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
