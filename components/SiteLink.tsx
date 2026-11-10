"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "onNavigate">;

/** Un retour à l’accueil repart du haut, même depuis la page déjà ouverte. */
export default function SiteLink({ href, ...props }: Props) {
  const router = useRouter();

  return (
    <Link
      {...props}
      href={href}
      onNavigate={href === "/" ? (event) => {
        event.preventDefault();
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
        const alreadyHome = window.location.pathname.replace(/\/$/, "") === basePath;

        if (alreadyHome) {
          router.replace("/", { scroll: false });
        } else {
          router.push("/", { scroll: false });
        }

        document.getElementById("contenu")?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } : undefined}
    />
  );
}
