import Link from "@/components/SiteLink";
import { RUBRIQUES, PAGES_TECHNIQUES, hrefRubrique } from "@/lib/arborescence";
import styles from "./site-footer.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.haut}`}>
        <div className={styles.identite}>
          <Link href="/" className={styles.marque}>
            Centre Émergent
          </Link>
          <p className={styles.sousMarque}>
            Institut Supérieur des Mines et Géologie de Boké
          </p>
          <p className={styles.localisation}>Boké, Guinée</p>
          <p className={styles.note}>Logos institutionnels à fournir.</p>
        </div>
        <nav aria-label="Rubriques du site">
          <h2 className={styles.titre}>Explorer le site</h2>
          <ul className={styles.plan}>
            {RUBRIQUES.map((rubrique) => (
              <li key={rubrique.slug}>
                <Link href={hrefRubrique(rubrique.slug)}>{rubrique.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.contact}>
          <h2 className={styles.titre}>Nous contacter</h2>
          <dl className={styles.coordonnees}>
            <div>
              <dt>Adresse complète</dt>
              <dd>À fournir</dd>
            </div>
            <div>
              <dt>Téléphone</dt>
              <dd>À fournir</dd>
            </div>
            <div>
              <dt>Courriel</dt>
              <dd>À fournir</dd>
            </div>
          </dl>
          <Link href="/contact" className={styles.contactLien}>
            Page Contact
          </Link>
          <p className={styles.note}>Liens des réseaux sociaux à fournir.</p>
        </div>
      </div>
      <div className={`container ${styles.bas}`}>
        <p>© 2026 Centre Émergent · ISMGB</p>
        <ul>
          {PAGES_TECHNIQUES.map((page) => (
            <li key={page.slug}>
              <Link href={`/${page.slug}`}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
