# Maquette du Centre Émergent de l’ISMGB

Première proposition de page d’accueil. Les images et les contenus sont
provisoires. Les autres rubriques affichent leur état de construction.
Après validation, cette page sera améliorée avant de réaliser le reste du site.

## Consulter

- Maquette publique : https://gaslandie.github.io/ceamem/
- Code source : https://github.com/Gaslandie/ceamem

## Travailler en local

Node.js 24 et npm sont utilisés pour la publication.

```sh
npm ci
npm run dev:local
```

Ouvrir http://127.0.0.1:3001.

## Publier

Chaque envoi sur `main` lance `.github/workflows/pages.yml`, construit les
pages statiques et les publie sur GitHub Pages. La commande `npm run build:pages`
permet de vérifier cette construction localement. Le chemin `/ceamem` est
appliqué aux liens, aux polices et aux images. L’export public est généré dans
`.next-pages/` ; le serveur local utilise un autre dossier.

Le message de présentation s’affiche à l’ouverture, se ferme avec la croix,
le bouton ou Échap, puis reste fermé pendant la navigation. Recharger la page
le fait réapparaître.

## Périmètre et sécurité

Cette maquette est publique. Elle ne contient ni espace privé, ni compte,
ni formulaire qui envoie des données. Le PDF client, les secrets, les fichiers
de travail et les preuves locales sont exclus du dépôt. Les photos sont
signalées comme des illustrations. Les licences des polices sont dans
`app/fonts/`.

La consigne de ne pas indexer la maquette reste dans les métadonnées ; ce n’est
pas un contrôle d’accès. GitHub Pages ne permet pas de reprendre les en-têtes
HTTP personnalisés du serveur Next.js. Les en-têtes du serveur local sont
conservés ; la politique de référent est également présente dans le HTML.

## Références techniques

Consultées le 10 novembre 2026 :

- [Next.js : export statique](https://nextjs.org/docs/app/guides/static-exports) :
  produire un fichier par page, sans serveur Next.js sur l’hébergement.
- [GitHub : publication par Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) :
  séparer construction et publication, avec les droits limités à chaque tâche.

Les guides de la version Next.js installée dans `node_modules/next/dist/docs/`
ont également été consultés. Ces principes sont adaptés ici au dépôt `ceamem`.
