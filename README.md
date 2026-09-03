# SmoothRide — site vitrine

Landing page et pages légales de l'application mobile SmoothRide, publiées sur **smoothride.fr** par GitHub Pages. Site statique : aucun backend, aucun cookie, aucune donnée collectée.

## Commandes

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ — tsc, vite, puis scripts/postbuild.mjs (404.html, une copie par route, sitemap, robots)
npm run preview    # servir dist/ en local
npm run lint
npm run typecheck
```

## Où changer quoi

- **Tout ce qui varie** — nom, accroche, e-mail, éditeur légal, liens des stores, prix : `src/config/site.ts`. Le jour où l'app est publiée, coller les deux liens `stores.appStore` / `stores.googlePlay` suffit : les boutons « Bientôt disponible » deviennent de vrais boutons.
- **Le domaine** : `public/CNAME`, et rien d'autre. `vite.config.ts` le lit et le donne à `index.html` (`%VITE_SITE_URL%`), aux pages (`SITE_URL`) et au sitemap.
- **Les pages** : `src/pages/`. Une page ajoutée se déclare aussi dans `src/App.tsx` et dans `src/config/routes.json` (c'est lui que le build lit pour rendre la page ouvrable en URL directe et pour le sitemap).
- **La charte** : `src/index.css` (`@theme`), recopiée de la maquette `landing-page/src/smoothride-mockups.css`. Un seul vert par ambiance : `jade` en clair, `nuit-jade` en sombre.
- **Le logo** : `src/components/Mark.tsx` (le signe, copié de la maquette) ; icônes PNG dans `public/`.
- **Les écrans** : `src/assets/screens/*.webp`, capturés sur la maquette (`https://noecalmes.fr/maquette/smoothride`, ambiance sombre, ×3), **sans le cadre** : le téléphone est dessiné en CSS (`.phone`, `src/components/PhoneFrame.tsx`), donc net sur tout écran. Pour les refaire : capturer l'élément `.srv-phone`, rogner la bordure (27 px à ×3), enregistrer en WebP. Trois écrans dans la galerie, jamais celui du hero.
- **Repères « À compléter »** : trois, sur la page Confidentialité (outil de rapport de plantage, durée de conservation des données techniques, hébergeur des comptes). Ils sont en jaune, exprès : on les voit, on les comble quand le cahier des charges tranche.

## Trois règles qui ne se discutent pas

- **Une seule ambiance** sur tout le site (ici la sombre), jamais un hero sombre et un corps clair. Elle se change dans `@theme`, et tout suit.
- **Aucun prix, aucune offre** (« 10 trajets offerts », « 9,99 €/mois ») nulle part sur le site : ça change par app et dans le temps, et une page web se met moins à jour qu'un écran d'app. L'abonnement n'est mentionné que comme principe, le prix affiché dans l'app fait foi.
- **Les boutons stores** disent « Bientôt disponible » tant qu'il n'y a pas de lien ; icône et libellé centrés sur la même ligne — le libellé porte `.cale` (Overpass a l'axe haut : sans calage, l'icône paraît trop basse). Même règle pour toute icône à côté d'un texte.
- **Le hero montre le premier écran de l'app** (l'accueil), la galerie les suivants — jamais deux fois le même.

## Pourquoi le pied de page nomme l'éditeur

Le site sert aussi de site officiel de l'entreprise pour l'inscription au programme Apple Developer en organisation : Apple veut un site public, avec du vrai contenu, dont le domaine est associé à l'entité légale, et une adresse e-mail sur ce domaine. D'où la ligne du pied de page, la page Mentions légales complète et `contact@smoothride.fr`.

## Publier

1. **GitHub** → Settings → Pages : Source « GitHub Actions », Custom domain `smoothride.fr`, puis cocher « Enforce HTTPS » quand la vérification DNS est passée. Le workflow `.github/workflows/deploy.yml` construit et déploie à chaque push sur `main`.
2. **Zone DNS** (chez le registrar, au nom du client) :

   | Type  | Sous-domaine | Cible |
   |-------|--------------|-------|
   | A     | *(vide)*     | `185.199.108.153` |
   | A     | *(vide)*     | `185.199.109.153` |
   | A     | *(vide)*     | `185.199.110.153` |
   | A     | *(vide)*     | `185.199.111.153` |
   | CNAME | `www`        | `noecalmes-app.github.io.` |

3. **Boîtes mail** sur le domaine : `contact@smoothride.fr` (publique, celle du site) et une boîte au nom du titulaire pour son compte Apple Developer.
4. Propagation DNS : 1 à 2 h. Vérifier `https://smoothride.fr` et `https://www.smoothride.fr`.
