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

      <section className="section" aria-labelledby="titre-centre">
        <div className={`container ${styles.presentation}`}>
          <div>
            <p className="eyebrow">Le centre</p>
            <h2 id="titre-centre" className={styles.titreBloc}>
              Le Centre Émergent
              <br />
              de l’ISMGB
            </h2>
            <p className={styles.accroche}>
              Un centre à vocation régionale, à Boké.
            </p>
            <p className={styles.paragraphe}>
              Le Centre Émergent est rattaché à l’Institut Supérieur des Mines
              et Géologie de Boké, en Guinée. Découvrez les rubriques consacrées
              aux formations, à la recherche et aux partenariats.
            </p>
            <Link href="/a-propos" className="link-arrow">
              Mieux connaître le centre
            </Link>
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
              <p className="eyebrow">Nos offres</p>
              <h2 id="titre-formations">Les formations</h2>
            </div>
            <p className={styles.texteSection}>
              Premier cycle, ingénierie, master, doctorat et formations courtes.
              Les informations détaillées et les documents de formation sont à
              fournir.
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
                      <span className={styles.offreDetail}>{offre.detail}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.sectionPied}>
            <p className="placeholder-note">
              Fiches de formation et PDF à fournir.
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
              <p className="eyebrow">Vie scientifique</p>
              <h2 id="titre-recherche">Recherches</h2>
            </div>
            <p className={styles.texteSection}>
              Retrouvez les rubriques dédiées aux journées scientifiques, aux
              programmes partenaires, aux publications et au Laboratoire de
              recherche.
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
        className={`section ${styles.vie}`}
        aria-labelledby="titre-vie"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Vie du centre</p>
              <h2 id="titre-vie">Actualités & rendez-vous</h2>
            </div>
            <p className={styles.texteSection}>
              Les actualités, les événements à venir et les appels à
              candidatures du Centre Émergent.
            </p>
          </div>
          <div className={styles.vieGrille}>
            <article className={styles.actualites}>
              <ImagePlaceholder
                label="Photographie d’actualité"
                className={styles.photoActualite}
              />
              <div className={styles.actualitesTexte}>
                <p className="eyebrow">Actualités</p>
                <h3>Les actualités du centre</h3>
                <p>Articles, dates et informations à fournir.</p>
              </div>
            </article>
            <div className={styles.agenda}>
              <section aria-labelledby="titre-agenda">
                <p className="eyebrow">Agenda</p>
                <h3 id="titre-agenda">Événements à venir</h3>
                <p>Dates et programme à fournir.</p>
              </section>
              <section aria-labelledby="titre-appels">
                <p className="eyebrow">Recrutements</p>
                <h3 id="titre-appels">Appels à candidatures</h3>
                <p>
                  Appels à candidatures, appels d’offres et résultats à fournir.
                </p>
                <Link href="/recrutements" className="link-arrow">
                  Consulter les recrutements
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.redevabilite}
        aria-labelledby="titre-transparence"
      >
        <div className={`container ${styles.redevGrille}`}>
          <div>
            <p className="eyebrow eyebrow--light">
              Information institutionnelle
            </p>
            <h2 id="titre-transparence">Transparence & responsabilité</h2>
            <p className={styles.redevTexte}>
              Documents et rapports, transparence institutionnelle, sauvegarde
              environnementale et sociale : accédez aux rubriques dédiées.
            </p>
            <span className={styles.filet} aria-hidden="true" />
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

      <section className="section" aria-labelledby="titre-chiffres">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Repères</p>
              <h2 id="titre-chiffres">Le centre en chiffres</h2>
            </div>
            <p className={styles.texteSection}>
              Données chiffrées à fournir par le centre.
            </p>
          </div>
          <ul className={styles.chiffresListe}>
            {CHIFFRES_CLES.map((chiffre) => (
              <li key={chiffre.label}>
                <span className={styles.chiffreValeur} aria-hidden="true">
                  —
                </span>
                <span className={styles.chiffreLibelle}>{chiffre.label}</span>
                <span className={styles.chiffreEtat}>À fournir</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`section ${styles.partenaires}`}
        aria-labelledby="titre-partenaires"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Coopération</p>
              <h2 id="titre-partenaires">Partenariats</h2>
            </div>
            <p className={styles.texteSection}>
              Partenariats industriels et académiques. Noms, logos et fiches
              partenaires à fournir.
            </p>
          </div>
          <ul className={styles.partenairesListe}>
            {PARTENAIRES.map((partenaire) => (
              <li key={partenaire.nom}>
                <Link href={partenaire.href}>
                  <span className={styles.logoVide}>Logos à fournir</span>
                  <span className={styles.partenaireNom}>{partenaire.nom}</span>
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
