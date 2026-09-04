// TOUT CE QUI VARIE VIT ICI, ET NULLE PART AILLEURS.
//
// Le nom, l'e-mail, l'éditeur légal, les liens des stores : chaque composant et
// chaque page lit ce fichier. Le jour où l'app est publiée, on colle les deux
// liens ci-dessous et les boutons « Bientôt disponible » deviennent de vrais
// boutons de téléchargement — sans toucher à un composant.
//
// Le DOMAINE, lui, ne vit pas ici : il est dans public/CNAME (le fichier que
// GitHub Pages lit) et arrive par VITE_SITE_URL (voir vite.config.ts).

export const SITE_URL: string = import.meta.env.VITE_SITE_URL ?? 'https://smoothride.fr'

export const app = {
  nom: 'SmoothRide',
  /** La promesse, telle qu'elle est écrite sur l'écran d'accueil de l'app. */
  accroche: ['Le même trajet,', 'sans les secousses.'],
  description:
    "SmoothRide compare deux routes, compte les dos-d'âne sur chacune et te dit ce que le confort coûte en minutes. À toi de choisir.",
  /** Une phrase pour les moteurs de recherche et les réseaux (< 160 caractères). */
  metaDescription:
    "SmoothRide, l'app qui compare deux trajets, compte les dos-d'âne sur chacun et te dit ce que le confort coûte en minutes.",
  plateformes: 'iOS et Android',
} as const

export const contact = {
  /**
   * Adresse publique : pied de page, mentions légales, support, stores.
   *
   * C'est la boîte du titulaire, pas un `contact@` générique : c'est celle qui
   * existe vraiment sur le domaine, et celle qu'Apple retrouve associée à
   * l'entité légale pour le compte développeur en organisation.
   */
  email: 'Gerfautmickael@smoothride.fr',
  /** Délai annoncé sur la page support. */
  delaiReponse: '2 jours ouvrés',
} as const

/**
 * Liens vers les fiches des stores. VIDES tant que l'app n'est pas publiée :
 * les boutons affichent alors « Bientôt disponible », désactivés, avec
 * l'icône du store. Coller l'adresse ici suffit.
 */
export const stores = {
  appStore: '',
  googlePlay: '',
} as const

/**
 * L'ÉDITEUR LÉGAL. C'est ce bloc que le pied de page et la page Mentions
 * légales affichent — et c'est ce qu'Apple vérifie pour associer le domaine à
 * l'entité qui publie l'app : le nom au registre, pas le nom commercial.
 * Pour un entrepreneur individuel, l'éditeur est la personne.
 */
export const editeur = {
  nomLegal: 'Mickael Gerfaut',
  formeJuridique: 'Entrepreneur individuel',
  nomCommercial: 'SmoothRide',
  siren: '843 947 771',
  siret: '843 947 771 00021',
  adresse: '21 rue Brenu, 92230 Gennevilliers, France',
  telephone: '+33 7 74 54 40 18',
  directeurPublication: 'Mickael Gerfaut',
  /** Date de la dernière mise à jour des pages légales (affichée). */
  miseAJourLegale: '3 septembre 2026',
} as const

export const hebergeur = {
  nom: 'GitHub, Inc.',
  adresse: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  service: 'GitHub Pages',
  site: 'https://github.com',
} as const
