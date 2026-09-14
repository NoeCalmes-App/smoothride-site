import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur, hebergeur, SITE_URL } from '../config/site'

/**
 * LA POLITIQUE DE CONFIDENTIALITÉ — le site ET l'application.
 *
 * La version du 3 septembre 2026 ne parlait que du site, et c'était juste :
 * décrire les traitements d'une application non publiée aurait été faux.
 * L'application existe maintenant, avec des comptes, de la position en temps
 * réel et un abonnement. Cette page décrit donc les deux, séparément, et
 * NOMME chaque destinataire.
 *
 * Elle est lue par trois publics qui ne pardonnent pas l'à-peu-près : les
 * utilisateurs, la CNIL, et les équipes de revue d'Apple et de Google — qui
 * comparent ligne à ligne ce qui est déclaré ici avec ce que le code fait.
 * Chaque traitement listé ci-dessous existe vraiment dans l'application ;
 * aucun n'a été ajouté « au cas où ».
 */
export default function Confidentialite() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Politique de confidentialité"
      description={`Ce que ${app.nom} fait de vos données : la position reste sur votre téléphone pour le guidage, aucun traceur publicitaire, aucune revente.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Cette politique couvre le site <strong>{domaine}</strong> et l'application mobile{' '}
          <strong>{app.nom}</strong> ({app.plateformes}). Elle dit ce qui est collecté, pourquoi,
          qui le reçoit et combien de temps. En une phrase : {app.nom} a besoin de votre position
          pour calculer un trajet et vous guider, ne la conserve pas pour vous suivre,
          n'affiche aucune publicité et ne vend rien à personne.
        </p>
      }
    >
      <Section titre="1. Responsable du traitement">
        <p>
          <strong>{editeur.nomLegal}</strong>, {editeur.formeJuridique.toLowerCase()} (nom commercial{' '}
          {editeur.nomCommercial}), SIREN {editeur.siren}, {editeur.adresse}. Pour toute question
          sur vos données : <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>

      <Section titre="2. Ce que l'application ne fait pas">
        <Liste
          items={[
            <>Elle n'affiche <strong>aucune publicité</strong> et n'intègre aucun traceur publicitaire.</>,
            <>Elle ne <strong>vend, ne loue et n'échange</strong> aucune donnée, à personne, à aucune condition.</>,
            <>Elle ne construit <strong>aucun profil commercial</strong> et ne prend aucune décision automatisée produisant des effets juridiques.</>,
            <>Elle n'enregistre <strong>jamais l'historique continu de vos déplacements</strong> : votre position vit le temps du trajet, pas au-delà.</>,
            <>Elle ne voit <strong>jamais vos coordonnées bancaires</strong> : les paiements sont encaissés par Apple et Google, qui ne nous les transmettent pas.</>,
          ]}
        />
      </Section>

      <Section titre="3. La position : le cœur du service">
        <p>
          <strong>Ce que nous utilisons.</strong> Avec votre autorisation, l'application lit la
          position précise de votre téléphone. Elle sert à trois choses, et à rien d'autre :
          afficher les ralentisseurs autour de vous, calculer un itinéraire depuis l'endroit où
          vous êtes, et vous guider en temps réel pendant que vous roulez.
        </p>
        <p>
          <strong>Où elle va.</strong> Pendant la navigation, votre position est traitée{' '}
          <strong>sur votre téléphone</strong> : c'est lui qui vous situe sur le tracé, calcule
          la distance restante et déclenche les annonces. Elle ne part sur le réseau que dans un
          seul cas : le calcul d'un itinéraire, où le point de départ et le point d'arrivée sont
          envoyés à Mapbox (section 6). Un point de départ et une destination, pas un suivi.
        </p>
        <p>
          <strong>Base légale.</strong> L'exécution du service que vous demandez (article 6.1.b
          du RGPD), et votre consentement au niveau du système d'exploitation, que vous pouvez
          retirer à tout moment dans les réglages de votre téléphone. Sans position, l'application
          ne peut plus calculer ni guider : c'est une limite technique, pas une sanction.
        </p>
      </Section>

      <Section titre="4. Le compte, et ce qu'il contient">
        <p>
          Un compte n'est pas obligatoire pour consulter la carte. Il le devient pour retrouver
          ses favoris et son historique sur un autre téléphone. Il contient :
        </p>
        <Liste
          items={[
            <><strong>Votre adresse e-mail</strong> et un identifiant technique. Si vous passez par Apple ou Google, nous recevons ce que ce service nous transmet — avec « Masquer mon adresse e-mail » d'Apple, nous ne voyons qu'une adresse relais.</>,
            <><strong>Votre mot de passe</strong>, si vous en créez un : il est haché par Firebase Authentication et <strong>nous ne pouvons pas le lire</strong>.</>,
            <><strong>Vos adresses favorites</strong> (domicile, travail) : le nom que vous leur donnez et leurs coordonnées.</>,
            <><strong>Votre historique de trajets</strong> : destination, date, distance, durée, nombre de ralentisseurs évités. Il sert à afficher vos statistiques, à vous et à personne d'autre.</>,
            <><strong>Votre compteur de trajets du mois</strong> et l'état de votre abonnement, pour appliquer l'offre décrite dans les conditions d'utilisation.</>,
          ]}
        />
        <p>
          Sans compte, tout cela reste <strong>uniquement sur votre téléphone</strong> et disparaît
          si vous désinstallez l'application.
        </p>
      </Section>

      <Section titre="5. Les données techniques">
        <Liste
          items={[
            <><strong>Rapports de plantage et de performance</strong> (Firebase Crashlytics) : type d'appareil, version du système, version de l'application et pile d'appels au moment du plantage. Ils servent à corriger les pannes. Base légale : notre intérêt légitime à fournir une application qui fonctionne.</>,
            <><strong>Jeton de notification</strong> (Firebase Cloud Messaging) : un identifiant technique généré par votre téléphone, créé uniquement si vous acceptez les notifications. Il permet de vous envoyer un message ; il ne dit rien de vous.</>,
            <><strong>Attestation d'intégrité</strong> (Firebase App Check) : une preuve que les requêtes viennent bien de l'application officielle, et non d'un script. Elle empêche l'usage frauduleux de nos clés.</>,
            <><strong>Journaux des serveurs</strong> : adresse IP, date et ressource demandée, conservés par nos prestataires pour la sécurité et le diagnostic.</>,
          ]}
        />
      </Section>

      <Section titre="6. Qui reçoit vos données">
        <p>Nous ne travaillons qu'avec des prestataires nommés, et les voici tous :</p>
        <Liste
          items={[
            <><strong>Google Ireland Limited / Google LLC (Firebase)</strong> — comptes, base de données, stockage, rapports de plantage, notifications. Les données de compte et de trajets sont hébergées dans la région <strong>europe-west9 (Paris)</strong>.</>,
            <><strong>Mapbox, Inc.</strong> (États-Unis) — fonds de carte, recherche d'adresses et calcul d'itinéraires. Reçoit les points de départ et d'arrivée d'un trajet, ainsi que les termes que vous tapez dans la recherche d'adresse. Ne reçoit ni votre e-mail ni votre identifiant de compte.</>,
            <><strong>Apple Inc.</strong> et <strong>Google LLC</strong> — l'encaissement des abonnements, chacun sur sa boutique. Ils nous transmettent l'état de l'abonnement, jamais votre moyen de paiement.</>,
            <><strong>{hebergeur.nom}</strong> ({hebergeur.service}) — l'hébergement de ce site.</>,
          ]}
        />
        <p>
          Les ralentisseurs affichés proviennent de sources publiques — <strong>OpenStreetMap</strong>{' '}
          (contributeurs, licence ODbL) et <strong>SNCF Réseau</strong> pour les passages à niveau.
          Ce sont des sources de données, pas des destinataires : rien ne leur est envoyé.
        </p>
        <p>
          Nous pouvons également transmettre des données si la loi nous y oblige, sur demande d'une
          autorité judiciaire.
        </p>
      </Section>

      <Section titre="7. Transferts hors de l'Union européenne">
        <p>
          Les données de compte et de trajets sont hébergées <strong>en France</strong>. Deux
          transferts hors UE existent néanmoins : <strong>Mapbox</strong>, société américaine, pour
          le calcul d'itinéraires et la recherche d'adresses ; et les opérations de support de{' '}
          <strong>Google</strong>, qui peuvent avoir lieu depuis d'autres pays. Ces transferts sont
          encadrés par les <strong>clauses contractuelles types</strong> de la Commission
          européenne, complétées par les garanties techniques de ces prestataires (chiffrement en
          transit et au repos).
        </p>
      </Section>

      <Section titre="8. Combien de temps">
        <Liste
          items={[
            <><strong>Position pendant la navigation</strong> : le temps du trajet. Elle n'est écrite nulle part une fois le guidage terminé.</>,
            <><strong>Compte, favoris, historique</strong> : tant que votre compte existe. Un compte resté inactif <strong>trois ans</strong> est supprimé, après un message d'avertissement.</>,
            <><strong>Trajets enregistrés</strong> : les <strong>60 derniers</strong> ; les plus anciens s'effacent au fur et à mesure.</>,
            <><strong>Rapports de plantage</strong> : 90 jours.</>,
            <><strong>Journaux techniques</strong> : jusqu'à 12 mois.</>,
            <><strong>Facturation</strong> : conservée par Apple et Google selon leurs propres règles, et par nous pour la durée légale de conservation comptable (10 ans) lorsqu'une facture nous concerne.</>,
          ]}
        />
      </Section>

      <Section titre="9. Vos droits">
        <p>
          Vous disposez des droits d'accès, de rectification, d'effacement, de limitation,
          d'opposition et de portabilité prévus par le RGPD. Deux d'entre eux s'exercent
          directement, sans nous écrire :
        </p>
        <Liste
          items={[
            <><strong>Effacement</strong> : « Ton compte » → « Supprimer mon compte », dans l'application. Le compte, les favoris et l'historique sont supprimés. Voir aussi <Link to="/supprimer-compte">la marche à suivre détaillée</Link>.</>,
            <><strong>Opposition à la géolocalisation</strong> : retirez l'autorisation dans les réglages de votre téléphone, à tout moment.</>,
          ]}
        />
        <p>
          Pour les autres, écrivez à <a href={`mailto:${contact.email}`}>{contact.email}</a> : nous
          répondons sous un mois. Si la réponse ne vous satisfait pas, vous pouvez saisir la{' '}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">CNIL</a>{' '}
          (3 place de Fontenoy, 75007 Paris).
        </p>
      </Section>

      <Section titre="10. Sécurité">
        <p>
          Les échanges avec nos serveurs et ceux de nos prestataires sont chiffrés (HTTPS/TLS).
          L'accès aux données de compte est verrouillé par des règles serveur : un compte ne peut
          lire et écrire que ses propres données, et cette vérification est faite par le serveur,
          jamais par l'application. Les mots de passe sont hachés et nous restent invisibles.
        </p>
      </Section>

      <Section titre="11. Mineurs">
        <p>
          {app.nom} s'adresse aux conducteurs et n'est pas destinée aux personnes de moins de{' '}
          <strong>15 ans</strong>. Nous ne collectons pas sciemment leurs données ; si cela se
          produisait, écrivez-nous et nous supprimerions le compte.
        </p>
      </Section>

      <Section titre="12. Le site">
        <p>
          Le site <strong>{domaine}</strong>, lui, reste une vitrine statique : aucun cookie, aucun
          traceur, aucune mesure d'audience, aucun formulaire. Les seules données qu'il occasionne
          sont les journaux techniques de {hebergeur.nom} et, si vous nous écrivez, le contenu de
          votre message et votre adresse e-mail — conservés le temps d'y répondre, puis trois ans
          à titre de preuve, en vertu de notre intérêt légitime à traiter vos demandes.
        </p>
      </Section>

      <Section titre="13. Modifications">
        <p>
          Cette politique peut évoluer avec l'application. Toute modification est publiée sur cette
          page avec une nouvelle date de mise à jour ; un changement substantiel vous est signalé
          dans l'application. La version en vigueur est celle affichée ici.
        </p>
        <p>
          Voir aussi : <Link to="/cgu">Conditions générales d'utilisation</Link> et{' '}
          <Link to="/mentions-legales">Mentions légales</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
