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

## Révision locale du 10 novembre 2026

Identité confirmée par Gassama : Centre Émergent de l’ISMGB, Boké, Guinée.
Le nom du dossier et du dépôt n’est pas une source pour renommer l’établissement.
La palette crème, vert forêt et terre, les deux polices et le carrousel manuel
sont conservés. Les premiers boutons mènent aux sections déjà présentes ; les
pages détaillées restent en préparation.

Les actualités, l’agenda et les recrutements prennent la forme de lignes courtes.
Les quatre indicateurs sont nommés avec une seule note de données attendues.
Les partenaires restent deux catégories accessibles, sans faux logos. Toutes les
rubriques prévues restent présentes. Aucune information manquante n’est assimilée
à une absence réelle d’activité.

Comparaison réutilisée après vérification de sa pertinence le 10 novembre :
[Colorado School of Mines](https://www.mines.edu/) rend ses programmes accessibles
et décrit des activités de laboratoire et de terrain ;
[Montanuniversität Leoben](https://www.unileoben.ac.at/en/) présente des informations
datées et des crédits photographiques. Ces observations sont textuelles. Nous
adaptons la précision des informations, les accès utiles et les formats selon le
contenu, sans reprendre leurs chiffres, leurs partenaires ou leur identité.

Les observations d’internautes et les limites des études sont conservées dans la
compétence personnelle `web-sur-mesure`, séparée du dépôt. Elles ne constituent
pas une méthode fiable pour reconnaître l’origine IA d’un site.

### Illustrations conservées

Sources et [licence Pexels](https://www.pexels.com/license/) consultées le
10 novembre 2026. Les pages ci-dessous indiquent leurs auteurs et leur licence.
Ces photos n’attestent ni les locaux, ni les personnes, ni les équipements de
l’ISMGB. Le lien de source est accessible dans leur légende. Une image qui ne
charge pas laisse un emplacement neutre « Image à fournir ».

| Fichier | Photographe et source |
| --- | --- |
| `terrain-minier.jpg` | [Vlad Chețan](https://www.pexels.com/photo/mining-excavation-on-a-mountain-2892618/) |
| `etudiants.jpg` | [Monstera Production](https://www.pexels.com/photo/cheerful-black-students-with-documents-standing-close-6281733/) |
| `recherche.jpg` | [Chokniti Khongchum](https://www.pexels.com/photo/unrecognizable-scientist-using-microscope-in-lab-3082455/) |

La photographie d’actualité n’est plus affichée sans article réel. Le fichier
existant est conservé. Les futures photos du centre devront avoir une provenance
et une autorisation adaptées avant remplacement des illustrations.

### Vérifications et essai qualitatif préparé

Les preuves locales sont dans `verification/`, qui reste exclu du dépôt et de
l’export public. La comparaison avant/après, les résultats de rendu et les
vérifications d’export doivent être lus séparément d’une validation par le client.
La publication utilise le workflow GitHub Pages décrit plus haut, après une
demande explicite de Gassama. Les preuves de vérification restent locales.

Essai à organiser avec accord de personnes correspondant aux trois publics :

1. Sans annoncer un test sur l’IA, demander : « À qui appartient ce site et
   qu’y trouve-t-on ? »
2. Étudiant : retrouver la rubrique Master et expliquer si son contenu détaillé
   est disponible. Chercheur : retrouver le Laboratoire de recherche (LRA).
   Partenaire : retrouver les rubriques de partenariat et leur état actuel.
3. Demander : « Qu’est-ce qui vous donne confiance ou vous fait hésiter ? »
4. Ensuite seulement : « Quelque chose vous paraît-il générique ou artificiel ?
   Quel élément précisément ? »

Noter les actions, hésitations et propos de façon anonyme, avec le minimum de
données. Aucun participant n’a encore été testé. Une revue par agent ou une
vérification automatique ne compte pas comme un essai humain ni comme une
validation visuelle du client.
