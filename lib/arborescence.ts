/**
 * Rubriques et sous-rubriques reprises dans l’offre technique du 30 septembre 2026,
 * page 1, section 2.1. Le cahier des charges original n’est pas présent localement.
 * Ces intitulés décrivent le périmètre prévu, sans attester un contenu déjà publié.
 */

export type SousRubrique = {
  slug: string;
  label: string;
};

export type Rubrique = {
  slug: string;
  label: string;
  /** Contenu prévu au cahier des charges (point 2.1). */
  contenuPrevu: string;
  /** Lien affiché dans la barre utilitaire de l'en-tête (point 2.2). */
  lienRapide?: boolean;
  /** Rubrique affichée dans le menu principal. */
  dansLeMenu?: boolean;
  sousRubriques?: SousRubrique[];
};

export const RUBRIQUES: Rubrique[] = [
  {
    slug: "accueil",
    label: "Accueil",
    contenuPrevu:
      "Carrousel, présentation du centre, événements à venir, actualités, offres, appels à candidatures, recherche, chiffres clés animés, partenaires.",
    dansLeMenu: true,
  },
  {
    slug: "a-propos",
    label: "À propos",
    contenuPrevu:
      "Vue d\u2019ensemble, ce que nous faisons, cadre de gouvernance, notre équipe, nos ressources.",
    dansLeMenu: true,
    sousRubriques: [
      { slug: "vue-d-ensemble", label: "Vue d\u2019ensemble" },
      { slug: "ce-que-nous-faisons", label: "Ce que nous faisons" },
      { slug: "cadre-de-gouvernance", label: "Cadre de gouvernance" },
      { slug: "notre-equipe", label: "Notre équipe" },
      { slug: "nos-ressources", label: "Nos ressources" },
    ],
  },
  {
    slug: "nos-offres",
    label: "Nos offres",
    contenuPrevu:
      "Premier cycle (Licence, DUT, CPC), Ingénierie, Master, Doctorat, formations courtes, avec fiches et PDF téléchargeables.",
    dansLeMenu: true,
    sousRubriques: [
      {
        slug: "premier-cycle",
        label: "Premier cycle \u2014 Licence, DUT, CPC",
      },
      { slug: "ingenierie", label: "Ingénierie" },
      { slug: "master", label: "Master" },
      { slug: "doctorat", label: "Doctorat" },
      { slug: "formations-courtes", label: "Formations courtes" },
    ],
  },
  {
    slug: "recherches",
    label: "Recherches",
    contenuPrevu:
      "Journées scientifiques, programmes partenaires, publications scientifiques, Laboratoire de recherche (LRA).",
    dansLeMenu: true,
    sousRubriques: [
      { slug: "journees-scientifiques", label: "Journées scientifiques" },
      { slug: "programmes-partenaires", label: "Programmes partenaires" },
      {
        slug: "publications-scientifiques",
        label: "Publications scientifiques",
      },
      {
        slug: "laboratoire-de-recherche-lra",
        label: "Laboratoire de recherche (LRA)",
      },
    ],
  },
  {
    slug: "documents-et-rapports",
    label: "Documents & Rapports",
    contenuPrevu:
      "Suivi et évaluation, passation de marché, exécution technique et financière, plan de gestion, comptes rendus, autres documents.",
    lienRapide: true,
    sousRubriques: [
      { slug: "suivi-et-evaluation", label: "Suivi et évaluation" },
      { slug: "passation-de-marche", label: "Passation de marché" },
      {
        slug: "execution-technique-et-financiere",
        label: "Exécution technique et financière",
      },
      { slug: "plan-de-gestion", label: "Plan de gestion" },
      { slug: "comptes-rendus", label: "Comptes rendus" },
      { slug: "autres-documents", label: "Autres documents" },
    ],
  },
  {
    slug: "partenariats",
    label: "Partenariats",
    contenuPrevu:
      "Partenariats industriels et académiques, logos et fiches partenaires.",
    dansLeMenu: true,
    sousRubriques: [
      { slug: "partenariats-industriels", label: "Partenariats industriels" },
      { slug: "partenariats-academiques", label: "Partenariats académiques" },
    ],
  },
  {
    slug: "recrutements",
    label: "Recrutements",
    contenuPrevu:
      "Appels à candidatures, appels d\u2019offres, résultats, avec date de clôture et archivage.",
    lienRapide: true,
    sousRubriques: [
      { slug: "appels-a-candidatures", label: "Appels à candidatures" },
      { slug: "appels-d-offres", label: "Appels d\u2019offres" },
      { slug: "resultats", label: "Résultats" },
    ],
  },
  {
    slug: "sauvegarde-es",
    label: "Sauvegarde E&S",
    contenuPrevu:
      "Violences basées sur le genre, audit de sauvegarde environnementale et sociale.",
    dansLeMenu: true,
    sousRubriques: [
      {
        slug: "violences-basees-sur-le-genre",
        label: "Violences basées sur le genre",
      },
      {
        slug: "audit-de-sauvegarde-environnementale-et-sociale",
        label: "Audit de sauvegarde environnementale et sociale",
      },
    ],
  },
  {
    slug: "galerie",
    label: "Galerie",
    contenuPrevu: "Photothèque et vidéothèque par albums.",
    dansLeMenu: true,
    sousRubriques: [
      { slug: "phototheque", label: "Photothèque" },
      { slug: "videotheque", label: "Vidéothèque" },
    ],
  },
  {
    slug: "transparence-web",
    label: "Transparence web",
    contenuPrevu:
      "Indicateurs de transparence institutionnelle selon les exigences du bailleur.",
    lienRapide: true,
  },
  {
    slug: "contact",
    label: "Contact",
    contenuPrevu:
      "Formulaire avec anti-spam et notification par e-mail, coordonnées, carte de localisation, réseaux sociaux.",
    lienRapide: true,
  },
];
export const MENU_PRINCIPAL = RUBRIQUES.filter((r) => r.dansLeMenu);
export const LIENS_RAPIDES = RUBRIQUES.filter((r) => r.lienRapide);

export function hrefRubrique(slug: string): string {
  return slug === "accueil" ? "/" : `/${slug}`;
}

export function hrefSousRubrique(
  rubrique: Rubrique,
  sousRubrique: SousRubrique,
): string {
  return `/${rubrique.slug}/${sousRubrique.slug}`;
}

/**
 * Retrouve une rubrique (et éventuellement sa sous-rubrique) à partir des segments d'URL.
 * Retourne `null` si le chemin ne correspond à rien dans l'arborescence.
 */
export function resolveChemin(
  segments: string[],
): { rubrique: Rubrique; sousRubrique?: SousRubrique } | null {
  if (segments.length === 0 || segments.length > 2) return null;

  const [rubriqueSlug, sousRubriqueSlug] = segments;
  const rubrique = RUBRIQUES.find((r) => r.slug === rubriqueSlug);
  if (!rubrique) return null;

  if (!sousRubriqueSlug) return { rubrique };

  const sousRubrique = rubrique.sousRubriques?.find(
    (s) => s.slug === sousRubriqueSlug,
  );
  if (!sousRubrique) return null;

  return { rubrique, sousRubrique };
}

/**
 * Pages techniques exigées par le pied de page (point 2.2 du cahier des charges).
 * Elles ne font pas partie des 11 rubriques : elles restent en construction dans la maquette.
 */
export const PAGES_TECHNIQUES: SousRubrique[] = [
  { slug: "mentions-legales", label: "Mentions légales" },
  { slug: "plan-du-site", label: "Plan du site" },
  { slug: "accessibilite", label: "Accessibilité" },
];
