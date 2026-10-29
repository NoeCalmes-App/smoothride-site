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
  /** La promesse, celle des fiches App Store et Google Play (choix de Noé
   *  du 27/10/2026 : « Votre trajet sans les dos-d'âne », plus parlant que
   *  « Le même trajet, sans les secousses »). */
  accroche: ['Votre trajet,', "sans les dos-d'âne."],
  description:
    "SmoothRide compare deux routes, compte les dos-d'âne sur chacune et te dit ce que le confort coûte en minutes. À toi de choisir.",
  /** Une phrase pour les moteurs de recherche et les réseaux (< 160 caractères). */
  metaDescription:
    "SmoothRide, l'app qui compare deux trajets, compte les dos-d'âne sur chacun et te dit ce que le confort coûte en minutes. Aussi sur CarPlay et Android Auto.",
  plateformes: 'iOS et Android',
  /** L'écran de la voiture : CarPlay en ligne avec la version 1.1 (28/10/2026),
   *  Android Auto avec la 1.1.1. Affiché dans le hero et les fonctionnalités. */
  voiture: 'CarPlay et Android Auto',
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
  // En ligne depuis le 25/10/2026 (version 1.0, France).
  appStore: 'https://apps.apple.com/fr/app/smoothride/id6812007623',
  // En ligne depuis le 09/10/2026 (version 1.23, France).
  googlePlay: 'https://play.google.com/store/apps/details?id=com.smoothride.mobile&hl=fr',
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
  // NI ADRESSE NI TÉLÉPHONE PERSONNELS SUR LE SITE (demande de Noé du
  // 26/10/2026) : le SIRET identifie l'entreprise, l'e-mail de `contact`
  // suffit pour écrire.
  siret: '843 947 771 00021',
  directeurPublication: 'Mickael Gerfaut',
  /** Date de la dernière mise à jour des pages légales (affichée). */
  miseAJourLegale: '26 octobre 2026',
} as const

/** Qui a fait l'app et le site : une ligne discrète, en gris, vers son site. */
export const realisation = {
  texte: 'Application et site web développés par Noé Calmes',
  site: 'https://noecalmes.fr',
} as const

export const hebergeur = {
  nom: 'GitHub, Inc.',
  adresse: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
  service: 'GitHub Pages',
  site: 'https://github.com',
} as const
