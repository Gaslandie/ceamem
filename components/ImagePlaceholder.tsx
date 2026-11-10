"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./image-placeholder.module.css";

// Sources et licence Pexels vérifiées le 10 novembre 2026.
// Ces personnes et lieux ne sont pas attribués à l’ISMGB.
const illustrations: Record<string, {
  src: string;
  alt: string;
  source: string;
  auteur: string;
  position: string;
}> = {
  "Photographie du centre": {
    src: "/images/illustrations/terrain-minier.jpg",
    alt: "Vue d’une exploitation minière à ciel ouvert — illustration",
    source: "https://www.pexels.com/photo/mining-excavation-on-a-mountain-2892618/",
    auteur: "Vlad Chețan",
    position: "50% 50%",
  },
  "Photographie des formations": {
    src: "/images/illustrations/etudiants.jpg",
    alt: "Trois étudiants avec leurs cahiers — illustration",
    source: "https://www.pexels.com/photo/cheerful-black-students-with-documents-standing-close-6281733/",
    auteur: "Monstera Production",
    position: "50% 35%",
  },
  "Photographie de la recherche": {
    src: "/images/illustrations/recherche.jpg",
    alt: "Manipulation d’un échantillon au microscope — illustration",
    source: "https://www.pexels.com/photo/unrecognizable-scientist-using-microscope-in-lab-3082455/",
    auteur: "Chokniti Khongchum",
    position: "50% 50%",
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
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const available = photo && failedSrc !== photo.src;
  return (
    <div
      className={`${styles.placeholder} ${!available ? styles.empty : ""} ${className}`}
      role={!available ? "img" : undefined}
      aria-label={!available ? `${label} : image à fournir` : undefined}
    >
      {available && (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${photo.src}`}
          alt={photo.alt}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          loading={eager ? "eager" : "lazy"}
          className={styles.photo}
          style={{ objectPosition: photo.position }}
          onError={() => setFailedSrc(photo.src)}
        />
      )}
      <span className={styles.label}>
        {available ? (
          <a href={photo.source} target="_blank" rel="noopener noreferrer"
            aria-label={`Photo d’illustration par ${photo.auteur}, source Pexels (nouvel onglet)`}
            title={`${photo.auteur} / Pexels — photographie d’illustration, sans lien avec le centre`}
          >
            Photo d’illustration <span aria-hidden="true">↗</span>
          </a>
        ) : "Image à fournir"}
      </span>
    </div>
  );
}
