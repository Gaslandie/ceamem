"use client";

import Link from "next/link";
import { useState } from "react";
import { SLIDES } from "@/lib/contenu-accueil";
import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./hero.module.css";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  return (
    <section
      className={styles.hero}
      aria-roledescription="carrousel"
      aria-label="À la une"
    >
      <div className={`container ${styles.scene}`}>
        <div className={styles.panneau}>
          <div className={styles.slides} aria-live="polite" aria-atomic="true">
            {SLIDES.map((item, position) => {
              const actif = position === index;
              const Titre = actif ? "h1" : "h2";
              return (
                <div
                  key={item.index}
                  className={styles.contenu}
                  aria-hidden={!actif}
                  style={{ visibility: actif ? "visible" : "hidden" }}
                >
                  <p className={styles.surtitre}>{item.eyebrow}</p>
                  <Titre className={styles.titre}>{item.titre}</Titre>
                  <p className={styles.texte}>{item.texte}</p>
                  <div className={styles.actions}>
                    <Link href={item.cta.href} className="btn btn--solid">
                      {item.cta.label}
                    </Link>
                    {item.ctaSecondaire && (
                      <Link
                        href={item.ctaSecondaire.href}
                        className="link-arrow"
                      >
                        {item.ctaSecondaire.label}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.commande}>
            <div
              className={styles.points}
              role="group"
              aria-label="Choisir une diapositive"
            >
              {SLIDES.map((item, position) => (
                <button
                  type="button"
                  key={item.index}
                  aria-label={`Diapositive ${position + 1} : ${item.titre}`}
                  aria-pressed={position === index}
                  onClick={() => setIndex(position)}
                  className={position === index ? styles.pointActif : ""}
                >
                  {item.index}
                </button>
              ))}
            </div>
            <div className={styles.fleches}>
              <button
                type="button"
                aria-label="Diapositive précédente"
                onClick={() =>
                  setIndex((index - 1 + SLIDES.length) % SLIDES.length)
                }
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Diapositive suivante"
                onClick={() => setIndex((index + 1) % SLIDES.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div className={styles.visuel}>
          <ImagePlaceholder
            label={slide.image}
            className={styles.image}
            eager
          />
          <p className={styles.legende}>Mines · Formation · Recherche</p>
        </div>
      </div>
    </section>
  );
}
