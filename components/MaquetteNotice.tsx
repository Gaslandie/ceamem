"use client";

import { useEffect, useRef } from "react";
import styles from "./maquette-notice.module.css";

export default function MaquetteNotice() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const handleClose = () => {
      if (dialog.open) return;
      root.style.overflow = previousOverflow;
      document.getElementById("contenu")?.focus({ preventScroll: true });
    };

    dialog.addEventListener("close", handleClose);
    if (!dialog.open) dialog.showModal();
    root.style.overflow = "hidden";
    titleRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.removeEventListener("close", handleClose);
      root.style.overflow = previousOverflow;
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="titre-maquette"
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const buttons = Array.from(
          event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)"),
        );
        const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
        const next = current < 0
          ? (event.shiftKey ? buttons.length - 1 : 0)
          : (current + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length;
        if (buttons[next]) {
          event.preventDefault();
          buttons[next].focus();
        }
      }}
    >
      <div className={styles.header}>
        <span className={styles.badge}>Version provisoire</span>
        <button
          type="button"
          className={styles.close}
          aria-label="Fermer le message de présentation"
          onClick={close}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <h2 id="titre-maquette" ref={titleRef} tabIndex={-1} className={styles.title}>
          Ceci est une première maquette.
        </h2>
        <p>
          Les images, les textes et les autres éléments sont provisoires. Ils
          seront remplacés ou ajustés avec vos contenus et vos retours.
        </p>
        <p>
          Cette page d’accueil est notre point de départ. Si cette proposition
          vous convient, nous commencerons par l’améliorer et la corriger ensemble.
        </p>
        <div className={styles.next}>
          <h3>Ensuite, le reste du site</h3>
          <p>
            Une fois cette page validée, nous avancerons sur les autres pages
            pour construire le site dans son ensemble.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <button type="button" className="btn btn--solid" onClick={close}>
          Découvrir la maquette <span aria-hidden="true">→</span>
        </button>
      </div>
    </dialog>
  );
}
