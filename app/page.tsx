import Link from "next/link";
import Hero from "@/components/Hero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  AXES_RECHERCHE,
  CHIFFRES_CLES,
  IDENTITE,
  OFFRES,
  PARTENAIRES,
  REDEVABILITE,
} from "@/lib/contenu-accueil";
import styles from "./home.module.css";

export default function Accueil() {
  return (
    <>
      <Hero />
      <nav className={styles.acces} aria-label="Accès directs">
        <div className={`container ${styles.accesGrille}`}>
          {[
            { label: "Nos formations", href: "#formations" },
            { label: "La recherche", href: "#recherche" },
            { label: "Documents & Rapports", href: "/documents-et-rapports" },
          ].map((lien) => (
            <Link key={lien.href} href={lien.href}>
              <span>{lien.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <section id="le-centre" className="section" aria-labelledby="titre-centre">
        <div className={`container ${styles.presentation}`}>
          <div>
            <h2 id="titre-centre" className={styles.titreBloc}>
              Le Centre Émergent
            </h2>
            <Link href="/a-propos" className="link-arrow">
              À propos du centre
            </Link>
            <p className="placeholder-note">Rubrique détaillée en préparation.</p>
          </div>
          <dl className={styles.identite}>
            {IDENTITE.map((ligne) => (
              <div key={ligne.terme}>
                <dt>{ligne.terme}</dt>
                <dd>{ligne.valeur}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="formations"
        className={`section ${styles.formations}`}
        aria-labelledby="titre-formations"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <h2 id="titre-formations">Les formations</h2>
            </div>
            <p className={styles.texteSection}>
              Cinq rubriques, du premier cycle aux formations courtes.
            </p>
          </div>
          <div className={styles.formationGrille}>
            <ImagePlaceholder
              label="Photographie des formations"
              className={styles.photoFormation}
            />
            <ol className={styles.offresListe}>
              {OFFRES.map((offre) => (
                <li key={offre.numero}>
                  <Link href={offre.href} className={styles.offreLigne}>
                    <span>
                      <span className={styles.offreTitre}>{offre.titre}</span>
                      {offre.detail && (
                        <span className={styles.offreDetail}>{offre.detail}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.sectionPied}>
            <p className="placeholder-note">
              Fiches de formation et PDF à fournir. Pages détaillées en préparation.
            </p>
            <Link href="/nos-offres" className="link-arrow">
              Toutes les formations
            </Link>
          </div>
        </div>
      </section>

      <section
        id="recherche"
        className="section"
        aria-labelledby="titre-recherche"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <h2 id="titre-recherche">Recherches</h2>
            </div>
            <p className={styles.texteSection}>
              Publications, programmes partenaires et vie du laboratoire :
              les rubriques de la recherche.
            </p>
          </div>
          <div className={styles.rechercheGrille}>
            <ul className={styles.axesListe}>
              {AXES_RECHERCHE.map((axe) => (
                <li key={axe.titre}>
                  <Link href={axe.href}>
                    <span>{axe.titre}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ImagePlaceholder
              label="Photographie de la recherche"
              className={styles.photoRecherche}
            />
          </div>
        </div>
      </section>

      <section
        id="actualites"
        className={`section ${styles.compactSection} ${styles.vie}`}
        aria-labelledby="titre-vie"
      >
        <div className="container">
          <h2 id="titre-vie" className={styles.titreCompact}>Actualités & rendez-vous</h2>
          <div className={styles.attentes}>
            <section aria-labelledby="titre-actualites">
              <h3 id="titre-actualites">Actualités</h3>
              <p>Articles et dates à fournir.</p>
            </section>
            <section aria-labelledby="titre-agenda">
              <h3 id="titre-agenda">Agenda</h3>
              <p>Dates et programme des événements à fournir.</p>
            </section>
            <section aria-labelledby="titre-appels">
              <h3 id="titre-appels">Recrutements</h3>
              <p>Appels à candidatures, appels d’offres et résultats à fournir.</p>
              <Link href="/recrutements" className="link-arrow">
                Voir la rubrique
              </Link>
            </section>
          </div>
        </div>
      </section>

      <section
        className={styles.redevabilite}
        aria-labelledby="titre-transparence"
      >
        <div className={`container ${styles.redevGrille}`}>
          <div>
            <h2 id="titre-transparence">Transparence & responsabilité</h2>
          </div>
          <ul className={styles.redevListe}>
            {REDEVABILITE.map((rubrique) => (
              <li key={rubrique.titre}>
                <Link href={rubrique.href}>
                  <span className={styles.redevTitre}>{rubrique.titre}</span>
                  <span className={styles.redevDetail}>{rubrique.texte}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.compactSection}`} aria-labelledby="titre-chiffres">
        <div className="container">
          <h2 id="titre-chiffres" className={styles.titreCompact}>Le centre en chiffres</h2>
          <p className={styles.noteAttente}>Données chiffrées à fournir par le centre.</p>
          <ul className={styles.chiffresListe}>
            {CHIFFRES_CLES.map((chiffre) => (
              <li key={chiffre.label}>
                {chiffre.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`section ${styles.compactSection} ${styles.partenaires}`}
        aria-labelledby="titre-partenaires"
      >
        <div className="container">
          <h2 id="titre-partenaires" className={styles.titreCompact}>Partenariats</h2>
          <p className={styles.noteAttente}>Noms et présentations des partenaires à fournir.</p>
          <ul className={styles.partenairesListe}>
            {PARTENAIRES.map((partenaire) => (
              <li key={partenaire.nom}>
                <Link href={partenaire.href}>
                  <span>{partenaire.nom}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.sectionPied}>
            <Link href="/partenariats" className="link-arrow">
              Tous les partenariats
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
