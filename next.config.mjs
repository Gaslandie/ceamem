const githubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Un dossier distinct permet la vérification sans modifier le serveur existant.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  devIndicators: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  ...(githubPages
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {
        async redirects() {
          return [{ source: "/accueil", destination: "/", permanent: true }];
        },
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "X-Frame-Options", value: "DENY" },
              ],
            },
          ];
        },
      }),
};
export default nextConfig;
