import Image from "next/image";
import styles from "./image-placeholder.module.css";

const illustrations: Record<string, { src: string; alt: string }> = {
  "Photographie du centre": {
    src: "/images/illustrations/terrain-minier.jpg",
    alt: "Vue d’une exploitation minière à ciel ouvert — illustration",
  },
  "Photographie des formations": {
    src: "/images/illustrations/etudiants.jpg",
    alt: "Trois étudiants avec leurs cahiers — illustration",
  },
  "Photographie de la recherche": {
    src: "/images/illustrations/recherche.jpg",
    alt: "Manipulation d’un échantillon au microscope — illustration",
  },
  "Photographie d’actualité": {
    src: "/images/illustrations/actualites.jpg",
    alt: "Étudiants dans une salle de cours — illustration",
  },
};

/** Photos temporaires, sans attribution des lieux ou des personnes au centre. */
export default function ImagePlaceholder({
  label,
  className = "",
  eager = false,
}: {
  label: string;
  className?: string;
  eager?: boolean;
}) {
  const photo = illustrations[label];
  return (
    <div className={`${styles.placeholder} ${className}`}>
      {photo && (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${photo.src}`}
          alt={photo.alt}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          loading={eager ? "eager" : "lazy"}
          className={styles.photo}
        />
      )}
      <span className={styles.label}>
        {photo ? "Photo d’illustration" : "Image à fournir"}
      </span>
    </div>
  );
}
