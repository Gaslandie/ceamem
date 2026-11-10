import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MaquetteNotice from "@/components/MaquetteNotice";
import "./globals.css";

const serif = localFont({
  src: [
    {
      path: "./fonts/source-serif-4-latin.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "./fonts/source-serif-4-latin-italic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  variable: "--font-source-serif",
  display: "swap",
});

const sans = localFont({
  src: "./fonts/ibm-plex-sans-latin.woff2",
  weight: "100 700",
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Centre Émergent — Institut Supérieur des Mines et Géologie de Boké",
    template: "%s — Centre Émergent ISMGB",
  },
  description:
    "Site institutionnel du Centre Émergent de l’Institut Supérieur des Mines et Géologie de Boké (ISMGB) : offres de formation, recherche, documents et rapports, partenariats.",
  robots: { index: false, follow: false },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <MaquetteNotice />
      </body>
    </html>
  );
}
