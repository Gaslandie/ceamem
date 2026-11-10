/**
 * Motif topographique utilisé comme visuel d'attente.
 *
 * Le cahier des charges prévoit des photographies du centre ; elles ne sont pas encore
 * fournies. Plutôt que d'utiliser une image trompeuse, la maquette affiche un motif
 * de courbes de niveau (référence au sous-sol minier de Boké) légendé « visuel à fournir ».
 */

export type VarianteVisuel = "laterite" | "foret" | "ardoise";

const PALETTES: Record<VarianteVisuel, { fond: string; trait: string; creux: string }> = {
  laterite: { fond: "#8c4a29", trait: "#e8bda1", creux: "#6b3620" },
  foret: { fond: "#1f342f", trait: "#a3bdb0", creux: "#152520" },
  ardoise: { fond: "#2b3338", trait: "#adbac2", creux: "#1f2629" },
};

function contour(cx: number, cy: number, rayon: number, graine: number): string {
  const points: string[] = [];
  const pas = 72;

  for (let i = 0; i <= pas; i += 1) {
    const angle = (i / pas) * Math.PI * 2;
    const ondulation =
      Math.sin(angle * 3 + graine) * 0.075 +
      Math.sin(angle * 5 - graine * 1.7) * 0.04 +
      Math.sin(angle * 2 + graine * 0.6) * 0.06;
    const rayonCourant = rayon * (1 + ondulation);
    const x = cx + Math.cos(angle) * rayonCourant;
    const y = cy + Math.sin(angle) * rayonCourant * 0.66;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return `M${points.join("L")}Z`;
}

export default function TopoMotif({
  variante,
  id,
}: {
  variante: VarianteVisuel;
  id: string;
}) {
  const palette = PALETTES[variante];
  const courbes = Array.from({ length: 16 }, (_, i) =>
    contour(680, 350, 58 + i * 33, 1.4 + i * 0.21),
  );

  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Motif de courbes de niveau — visuel d’attente en attendant les photographies du centre"
    >
      <defs>
        <linearGradient id={`fond-${id}`} x1="0" y1="0" x2="0.55" y2="1">
          <stop offset="0" stopColor={palette.trait} stopOpacity="0.18" />
          <stop offset="1" stopColor={palette.creux} stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect width="1200" height="700" fill={palette.fond} />
      <rect width="1200" height="700" fill={`url(#fond-${id})`} />

      <g fill="none" stroke={palette.trait} strokeWidth="1.1">
        {courbes.map((d, i) => (
          <path key={d} d={d} strokeOpacity={0.42 - i * 0.019} />
        ))}
      </g>

      <line
        x1="0"
        y1="540"
        x2="1200"
        y2="486"
        stroke={palette.trait}
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="7 11"
      />
    </svg>
  );
}
