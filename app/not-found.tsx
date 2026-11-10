import Link from "next/link";
import styles from "./construction.module.css";

export default function PageIntrouvable() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.interieur}`}>
        <p className={styles.statut}>Erreur 404</p>
        <h1 className={styles.titre}>Cette page n’existe pas</h1>
        <p className={styles.chapeau}>
          Cette adresse ne correspond à aucune page du site. Utilisez le menu
          principal ou revenez à la page d’accueil.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn--solid">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
