import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste, ACompleter } from '../components/LegalLayout'
import { app, contact, editeur, SITE_URL } from '../config/site'

/**
 * La politique de confidentialité de L'APPLICATION (le site, lui, ne collecte
 * rien). Elle décrit ce que l'app fait réellement d'après le cahier des
 * charges et la maquette : la position pendant l'utilisation, un compte, les
 * signalements, un abonnement par les stores, un historique qui reste sur le
 * téléphone. Ce que le cahier des charges ne fixe pas encore est marqué
 * « À compléter », visiblement — rien n'est inventé.
 */
export default function Confidentialite() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Politique de confidentialité"
      description={`Comment l'application ${app.nom} collecte, utilise et protège vos données personnelles.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Cette politique explique quelles données l'application mobile {app.nom} (« l'Application ») collecte, pourquoi, combien de temps elle les garde et quels sont vos droits. Elle s'applique à l'Application ; le site {domaine} est statique et ne collecte aucune donnée.
        </p>
      }
    >
      <Section titre="1. Responsable du traitement">
        <p>
          Le responsable du traitement est <strong>{editeur.nomLegal}</strong>, {editeur.formeJuridique.toLowerCase()} (nom commercial {editeur.nomCommercial}), SIREN {editeur.siren}, {editeur.adresse}. Contact : <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>

      <Section titre="2. Données collectées">
        <p>L'Application ne collecte que ce dont elle a besoin pour fonctionner :</p>
        <Liste
          items={[
            <><strong>Votre position</strong>, pendant que vous utilisez l'Application : pour afficher les dos-d'âne autour de vous, calculer et comparer vos trajets, et vous guider en roulant. Sans elle, l'Application reste consultable mais ne peut ni calculer un trajet ni vous guider. La position n'est pas collectée en arrière-plan lorsque l'Application est fermée.</>,
            <><strong>Votre compte</strong> : une adresse e-mail, ou l'identifiant fourni par la connexion avec Apple ou Google, et un mot de passe chiffré le cas échéant. Le compte n'est demandé qu'au moment où il devient utile (abonnement).</>,
            <><strong>Vos signalements</strong> de dos-d'âne : la position signalée et l'heure du signalement, associées à votre compte le temps de leur vérification. Un signalement n'est publié qu'après confirmation par d'autres conducteurs.</>,
            <><strong>Votre abonnement</strong> : son état (actif, expiré) et sa date de renouvellement. Le paiement est traité par l'App Store ou Google Play ; l'Application ne voit ni ne conserve aucune donnée bancaire.</>,
            <><strong>Votre historique de trajets</strong> (dates, distances, dos-d'âne évités) : il est stocké sur votre téléphone uniquement. Il n'est ni envoyé, ni partagé.</>,
            <><strong>Des données techniques</strong> nécessaires au fonctionnement et à la correction des erreurs : modèle d'appareil, version du système et de l'Application. <ACompleter>préciser si un outil de rapport de plantage ou de mesure d'usage est intégré, et lequel.</ACompleter></>,
          ]}
        />
      </Section>

      <Section titre="3. Pourquoi ces données sont traitées">
        <Liste
          items={[
            <>Fournir le service : carte, calcul et comparaison des trajets, navigation, signalements (exécution du contrat).</>,
            <>Gérer votre compte et votre abonnement (exécution du contrat).</>,
            <>Améliorer la base des dos-d'âne grâce aux signalements confirmés (intérêt légitime : la fiabilité du service pour tous les utilisateurs).</>,
            <>Assurer la sécurité et le bon fonctionnement de l'Application (intérêt légitime).</>,
          ]}
        />
        <p>Aucune donnée n'est utilisée à des fins publicitaires, et aucune n'est vendue.</p>
      </Section>

      <Section titre="4. Durée de conservation">
        <Liste
          items={[
            <>La position n'est pas conservée au-delà du calcul du trajet en cours, sauf lorsqu'elle fait partie d'un signalement.</>,
            <>Les données du compte sont conservées tant que le compte existe, puis supprimées dans les 30 jours suivant sa suppression, sauf obligation légale de conservation plus longue (par exemple les justificatifs d'abonnement).</>,
            <>Les signalements confirmés sont conservés de façon anonyme, sans lien avec votre compte, tant qu'ils décrivent un dos-d'âne existant.</>,
            <><ACompleter>durée de conservation des données techniques, selon l'outil retenu.</ACompleter></>,
          ]}
        />
      </Section>

      <Section titre="5. Qui a accès à vos données">
        <p>Vos données ne sont partagées qu'avec les prestataires strictement nécessaires au service :</p>
        <Liste
          items={[
            <><strong>Mapbox</strong> (fonds de carte et calcul d'itinéraires) : reçoit les positions nécessaires au calcul d'un trajet. Les données cartographiques proviennent d'OpenStreetMap.</>,
            <><strong>Apple</strong> et <strong>Google</strong> : connexion avec un compte Apple ou Google si vous la choisissez, et gestion des abonnements par l'App Store et Google Play.</>,
            <><ACompleter>l'hébergeur des comptes et des signalements (nom, pays d'hébergement des données).</ACompleter></>,
          ]}
        />
        <p>
          Ces prestataires agissent selon nos instructions et leurs propres politiques de confidentialité. Certains peuvent traiter des données hors de l'Union européenne ; dans ce cas, ils s'appuient sur des garanties reconnues par le RGPD (clauses contractuelles types ou décision d'adéquation).
        </p>
      </Section>

      <Section titre="6. Vos droits">
        <p>
          Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de définir des directives sur leur sort après votre décès.
        </p>
        <p>
          Pour l'exercer, écrivez à <a href={`mailto:${contact.email}`}>{contact.email}</a>. Nous répondons dans un délai d'un mois. Vous pouvez aussi supprimer votre compte vous-même : la procédure est décrite sur la page{' '}
          <Link to="/supprimer-compte">Supprimer mon compte</Link>. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
        </p>
      </Section>

      <Section titre="7. Sécurité">
        <p>
          Les échanges entre l'Application et ses serveurs sont chiffrés (HTTPS). Les mots de passe sont stockés sous forme chiffrée et ne sont jamais lisibles par l'éditeur. L'accès aux données est limité aux personnes qui en ont besoin pour faire fonctionner le service.
        </p>
      </Section>

      <Section titre="8. Mineurs">
        <p>L'Application s'adresse aux conducteurs : elle n'est pas destinée aux personnes de moins de 18 ans, et aucune donnée n'est sciemment collectée auprès d'elles.</p>
      </Section>

      <Section titre="9. Modifications">
        <p>
          Cette politique peut évoluer avec l'Application. La date de dernière mise à jour figure en haut de la page ; en cas de changement important, vous en serez informé dans l'Application.
        </p>
      </Section>
    </LegalLayout>
  )
}
