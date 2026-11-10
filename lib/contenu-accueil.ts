/**
 * Source disponible : DOC-20260930-WA0012..pdf, offre du 30 septembre 2026,
 * pages 1 et 2. Ce document reprend le périmètre du cahier des charges.
 * Une rubrique prévue ne prouve ni une formation ouverte ni un partenariat signé.
 * Les données absentes restent à fournir. Les photos temporaires sont des illustrations.
 */
export type Slide = {
  index: string;
  eyebrow: string;
  titre: string;
  texte: string;
  cta: { label: string; href: string };
  ctaSecondaire?: { label: string; href: string };
  image: string;
};

export const SLIDES: Slide[] = [
  {
    index: "01",
    eyebrow: "Boké, Guinée · Institut Supérieur des Mines et Géologie",
    titre: "Le Centre Émergent de l’ISMGB",
    texte:
      "Un centre à vocation régionale. Retrouvez les rubriques consacrées à la formation, à la recherche et aux partenariats.",
    cta: { label: "Découvrir le centre", href: "/a-propos" },
    ctaSecondaire: { label: "Nos offres de formation", href: "/nos-offres" },
    image: "Photographie du centre",
  },
  {
    index: "02",
    eyebrow: "Nos offres · Formation",
    titre: "Les parcours de formation",
    texte:
      "Premier cycle (Licence, DUT, CPC), ingénierie, master, doctorat et formations courtes. Les fiches détaillées sont à fournir.",
    cta: { label: "Explorer les formations", href: "/nos-offres" },
    ctaSecondaire: {
      label: "Formations courtes",
      href: "/nos-offres/formations-courtes",
    },
    image: "Photographie des formations",
  },
  {
    index: "03",
    eyebrow: "Recherches · Vie scientifique",
    titre: "La recherche et la vie scientifique",
    texte:
      "Journées scientifiques, programmes partenaires, publications scientifiques et Laboratoire de recherche (LRA).",
    cta: { label: "Explorer la recherche", href: "/recherches" },
    ctaSecondaire: {
      label: "Publications scientifiques",
      href: "/recherches/publications-scientifiques",
    },
    image: "Photographie de la recherche",
  },
];

export const IDENTITE = [
  {
    terme: "Institution de rattachement",
    valeur: "Institut Supérieur des Mines et Géologie de Boké (ISMGB)",
  },
  { terme: "Implantation", valeur: "Boké, Guinée" },
  { terme: "Vocation", valeur: "Régionale" },
];

export const OFFRES = [
  {
    numero: "01",
    titre: "Premier cycle",
    detail: "Licence · DUT · CPC",
    href: "/nos-offres/premier-cycle",
  },
  {
    numero: "02",
    titre: "Ingénierie",
    detail: "Fiche de formation à fournir",
    href: "/nos-offres/ingenierie",
  },
  {
    numero: "03",
    titre: "Master",
    detail: "Fiche de formation à fournir",
    href: "/nos-offres/master",
  },
  {
    numero: "04",
    titre: "Doctorat",
    detail: "Fiche de formation à fournir",
    href: "/nos-offres/doctorat",
  },
  {
    numero: "05",
    titre: "Formations courtes",
    detail: "Fiches de formation à fournir",
    href: "/nos-offres/formations-courtes",
  },
];

export const AXES_RECHERCHE = [
  {
    titre: "Journées scientifiques",
    href: "/recherches/journees-scientifiques",
  },
  {
    titre: "Programmes partenaires",
    href: "/recherches/programmes-partenaires",
  },
  {
    titre: "Publications scientifiques",
    href: "/recherches/publications-scientifiques",
  },
  {
    titre: "Laboratoire de recherche (LRA)",
    href: "/recherches/laboratoire-de-recherche-lra",
  },
];

export const REDEVABILITE = [
  {
    titre: "Documents & Rapports",
    texte:
      "Suivi et évaluation, passation de marché, exécution technique et financière, plan de gestion et comptes rendus.",
    href: "/documents-et-rapports",
  },
  {
    titre: "Transparence web",
    texte: "Indicateurs de transparence institutionnelle.",
    href: "/transparence-web",
  },
  {
    titre: "Sauvegarde environnementale et sociale",
    texte:
      "Violences basées sur le genre et audit de sauvegarde environnementale et sociale.",
    href: "/sauvegarde-es",
  },
];

/** Aucune valeur n’est communiquée dans la source disponible. */
export const CHIFFRES_CLES: { label: string; valeur: number | null }[] = [
  { label: "Formations", valeur: null },
  { label: "Publications scientifiques", valeur: null },
  { label: "Partenariats", valeur: null },
  { label: "Documents publiés", valeur: null },
];

/** Aucun nom ni logo n’est attribué au centre sans confirmation. */
export const PARTENAIRES = [
  {
    nom: "Partenariats industriels",
    href: "/partenariats/partenariats-industriels",
  },
  {
    nom: "Partenariats académiques",
    href: "/partenariats/partenariats-academiques",
  },
];
