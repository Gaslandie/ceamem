"use client";

import Link from "@/components/SiteLink";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LIENS_RAPIDES,
  MENU_PRINCIPAL,
  RUBRIQUES,
  hrefRubrique,
  hrefSousRubrique,
} from "@/lib/arborescence";
import styles from "./site-header.module.css";

const normaliser = (texte: string) =>
  texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const INDEX_RUBRIQUES = RUBRIQUES.flatMap((rubrique) => [
  { label: rubrique.label, href: hrefRubrique(rubrique.slug) },
  ...(rubrique.sousRubriques ?? []).map((sous) => ({
    label: sous.label,
    href: hrefSousRubrique(rubrique, sous),
  })),
]);

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [rechercheOuverte, setRechercheOuverte] = useState(false);
  const [sousMenu, setSousMenu] = useState<string | null>(null);
  const [requete, setRequete] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const boutonMenu = useRef<HTMLButtonElement>(null);
  const boutonRecherche = useRef<HTMLButtonElement>(null);
  const champRecherche = useRef<HTMLInputElement>(null);
  const resultats = useMemo(() => {
    const mots = normaliser(requete.trim()).split(/\s+/).filter(Boolean);
    return INDEX_RUBRIQUES.filter((rubrique) =>
      mots.every((mot) => normaliser(rubrique.label).includes(mot)),
    ).slice(0, 8);
  }, [requete]);

  const fermerPanneaux = () => {
    setMenuOuvert(false);
    setRechercheOuverte(false);
    setSousMenu(null);
  };

  useEffect(() => {
    fermerPanneaux();
  }, [pathname]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const ancienOverflow = document.body.style.overflow;
    if (menuOuvert) {
      if (!element.open) element.showModal();
      document.body.style.overflow = "hidden";
    } else if (element.open) {
      element.close();
    }
    return () => {
      document.body.style.overflow = ancienOverflow;
    };
  }, [menuOuvert]);

  useEffect(() => {
    if (rechercheOuverte) champRecherche.current?.focus();
  }, [rechercheOuverte]);

  useEffect(() => {
    const surTouche = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (rechercheOuverte) {
        setRechercheOuverte(false);
        boutonRecherche.current?.focus();
      }
      if (sousMenu) {
        const declencheur = document.getElementById(`ouvrir-${sousMenu}`);
        setSousMenu(null);
        declencheur?.focus();
      }
    };
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, [rechercheOuverte, sousMenu]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const adapter = () => {
      if (media.matches) setMenuOuvert(false);
    };
    media.addEventListener("change", adapter);
    return () => media.removeEventListener("change", adapter);
  }, []);

  const estActif = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={styles.header}>
      <div className={styles.utility}>
        <div className={`container ${styles.utilityInner}`}>
          <p>Boké, Guinée</p>
          <nav className={styles.quickNav} aria-label="Liens rapides">
            <ul>
              {LIENS_RAPIDES.map((rubrique) => (
                <li key={rubrique.slug}>
                  <Link
                    href={hrefRubrique(rubrique.slug)}
                    onClick={fermerPanneaux}
                  >
                    {rubrique.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={`container ${styles.mainInner}`}>
        <Link
          href="/"
          className={styles.brand}
          onClick={fermerPanneaux}
          aria-label="Centre Émergent de l’ISMGB — accueil"
        >
          <span className={styles.brandLogo}>
            Logo<span>à fournir</span>
          </span>
          <span className={styles.brandTexte}>
            <span className={styles.brandNom}>Centre Émergent</span>
            <span className={styles.brandSous}>
              Institut Supérieur des Mines et Géologie de Boké
            </span>
          </span>
        </Link>
        <div className={styles.actions}>
          <button
            ref={boutonRecherche}
            type="button"
            className={styles.actionButton}
            aria-expanded={rechercheOuverte}
            aria-controls="panneau-recherche"
            aria-label={
              rechercheOuverte
                ? "Fermer la recherche"
                : "Rechercher une rubrique"
            }
            onClick={() => {
              setRechercheOuverte(!rechercheOuverte);
              setSousMenu(null);
            }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="10"
                cy="10"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="m15 15 6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            ref={boutonMenu}
            type="button"
            className={styles.burger}
            aria-expanded={menuOuvert}
            aria-controls="panneau-menu"
            aria-label="Ouvrir le menu"
            onClick={() => {
              setMenuOuvert(true);
              setRechercheOuverte(false);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className={styles.nav} aria-label="Navigation principale">
        <ul className="container">
          {MENU_PRINCIPAL.map((rubrique) => {
            const href = hrefRubrique(rubrique.slug);
            const ouvert = sousMenu === rubrique.slug;
            return (
              <li
                key={rubrique.slug}
                className={styles.item}
                onMouseEnter={() => setSousMenu(rubrique.slug)}
                onMouseLeave={() => setSousMenu(null)}
              >
                <div className={styles.navGroup}>
                  <Link
                    href={href}
                    onClick={fermerPanneaux}
                    className={`${styles.navLink} ${estActif(href) ? styles.navLinkActif : ""}`}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {rubrique.label}
                  </Link>
                  {rubrique.sousRubriques && (
                    <button
                      type="button"
                      id={`ouvrir-${rubrique.slug}`}
                      aria-label={`Sous-menu ${rubrique.label}`}
                      aria-expanded={ouvert}
                      aria-controls={`sous-menu-${rubrique.slug}`}
                      onClick={() => setSousMenu(ouvert ? null : rubrique.slug)}
                      className={styles.dropdownToggle}
                    >
                      <span aria-hidden="true">⌄</span>
                    </button>
                  )}
                </div>
                {rubrique.sousRubriques && (
                  <div
                    id={`sous-menu-${rubrique.slug}`}
                    className={styles.dropdown}
                    hidden={!ouvert}
                  >
                    <ul>
                      {rubrique.sousRubriques.map((sous) => (
                        <li key={sous.slug}>
                          <Link
                            href={hrefSousRubrique(rubrique, sous)}
                            onClick={fermerPanneaux}
                          >
                            {sous.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href}
                      className={styles.dropdownAll}
                      onClick={fermerPanneaux}
                    >
                      Voir toute la rubrique
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {rechercheOuverte && (
        <section
          id="panneau-recherche"
          className={styles.searchPanel}
          aria-label="Recherche de rubriques"
        >
          <div className={`container ${styles.searchInner}`}>
            <form role="search" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="champ-recherche">Rechercher une rubrique</label>
              <div className={styles.searchForm}>
                <input
                  ref={champRecherche}
                  id="champ-recherche"
                  type="search"
                  value={requete}
                  maxLength={120}
                  onChange={(event) => setRequete(event.target.value)}
                  placeholder="Formation, recherche, documents…"
                  aria-controls="resultats-recherche"
                />
                <button
                  type="button"
                  onClick={() => {
                    setRechercheOuverte(false);
                    boutonRecherche.current?.focus();
                  }}
                >
                  Fermer
                </button>
              </div>
            </form>
            <p className={styles.searchNote} role="status">
              {requete.trim()
                ? `${resultats.length ? "Rubriques correspondantes" : "Aucune rubrique ne correspond à cette recherche."}`
                : "Accès aux rubriques du site"}
            </p>
            <ul id="resultats-recherche" className={styles.searchResults}>
              {resultats.map((resultat) => (
                <li key={resultat.href}>
                  <Link href={resultat.href} onClick={fermerPanneaux}>
                    {resultat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <dialog
        ref={dialog}
        id="panneau-menu"
        className={styles.drawer}
        aria-labelledby="titre-menu"
        onCancel={() => setMenuOuvert(false)}
        onClose={() => {
          setMenuOuvert(false);
          boutonMenu.current?.focus();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const elements = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'button, a[href], summary, input, [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((element) => element.getClientRects().length > 0);
          const premier = elements[0];
          const dernier = elements[elements.length - 1];
          if (event.shiftKey && document.activeElement === premier) {
            event.preventDefault();
            dernier?.focus();
          } else if (!event.shiftKey && document.activeElement === dernier) {
            event.preventDefault();
            premier?.focus();
          }
        }}
      >
        <div className={styles.drawerHead}>
          <h2 id="titre-menu">Le Centre Émergent</h2>
          <button
            type="button"
            onClick={() => setMenuOuvert(false)}
            aria-label="Fermer le menu"
          >
            ×
          </button>
        </div>
        <nav aria-label="Toutes les rubriques">
          <ul>
            {RUBRIQUES.map((rubrique) => (
              <li key={rubrique.slug}>
                {rubrique.sousRubriques ? (
                  <details className={styles.accordion}>
                    <summary>{rubrique.label}</summary>
                    <ul>
                      <li>
                        <Link
                          href={hrefRubrique(rubrique.slug)}
                          onClick={fermerPanneaux}
                        >
                          Voir la rubrique
                        </Link>
                      </li>
                      {rubrique.sousRubriques.map((sous) => (
                        <li key={sous.slug}>
                          <Link
                            href={hrefSousRubrique(rubrique, sous)}
                            onClick={fermerPanneaux}
                          >
                            {sous.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={hrefRubrique(rubrique.slug)}
                    onClick={fermerPanneaux}
                    className={styles.drawerLien}
                    aria-current={
                      pathname === hrefRubrique(rubrique.slug)
                        ? "page"
                        : undefined
                    }
                  >
                    {rubrique.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
