"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé du module « chiffres clés ».
 * Quand la valeur n'est pas encore fournie par le centre (`null`), le composant affiche
 * un tiret cadratin : la maquette reste fidèle, sans inventer de donnée.
 */
export default function CompteurChiffre({ valeur }: { valeur: number | null }) {
  const [affiche, setAffiche] = useState(0);
  const [lance, setLance] = useState(false);
  const reference = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (valeur === null) return;
    const element = reference.current;
    if (!element) return;

    const observateur = new IntersectionObserver(
      (entrees) => {
        if (entrees[0]?.isIntersecting) {
          setLance(true);
          observateur.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, [valeur]);

  useEffect(() => {
    if (!lance || valeur === null) return;

    const duree = 1100;
    const depart = performance.now();
    let image = 0;

    const animer = (instant: number) => {
      const progression = Math.min((instant - depart) / duree, 1);
      const adoucie = 1 - Math.pow(1 - progression, 3);
      setAffiche(Math.round(valeur * adoucie));
      if (progression < 1) image = requestAnimationFrame(animer);
    };

    image = requestAnimationFrame(animer);
    return () => cancelAnimationFrame(image);
  }, [lance, valeur]);

  if (valeur === null) {
    return (
      <span ref={reference} aria-label="Chiffre à fournir">
        —
      </span>
    );
  }

  return <span ref={reference}>{affiche.toLocaleString("fr-FR")}</span>;
}
