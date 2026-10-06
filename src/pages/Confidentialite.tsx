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
      description={`Ce que ${app.nom} fait de vos données : la position sert à calculer et guider vos trajets, jamais à vous suivre ; aucun traceur publicitaire, aucune revente.`}
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
          position précise de votre téléphone. Elle sert à
          afficher les ralentisseurs autour de vous, calculer un itinéraire depuis l'endroit où
          vous êtes, vous guider en temps réel pendant que vous roulez (y compris écran verrouillé
          ou application en arrière-plan, le temps du guidage seulement), proposer d'abord les
          adresses proches quand vous cherchez une adresse, et situer un dos-d'âne quand vous
          le signalez. Rien d'autre.
        </p>
        <p>
          <strong>Où elle va.</strong> Pendant la navigation, votre position est traitée{' '}
          <strong>sur votre téléphone</strong> : c'est lui qui vous situe sur le tracé, calcule
          la distance restante et déclenche les annonces. Elle ne part sur le réseau, en coordonnées précises, que dans
          quatre cas : le calcul d'un itinéraire, où le point de départ et le point d'arrivée
          sont envoyés à Mapbox (section 6), votre position comprise quand l'un des deux est
          « Ma position » ; le recalcul automatique quand vous quittez le tracé, où votre position
          du moment, votre sens de marche et la destination sont envoyés à Mapbox ; la recherche
          d'adresse, où votre position accompagne chaque recherche lancée pendant la saisie, pour
          proposer d'abord les adresses proches ; et le signalement d'un dos-d'âne, que vous
          déclenchez vous-même (ci-dessous). Pour dessiner la carte et les dos-d'âne,
          l'application télécharge aussi les fonds de carte (Mapbox) et les dos-d'âne des zones
          affichées ou traversées (Google Firebase, par zones d'environ 20 à 30 km de côté) : ces
          demandes révèlent une zone, pas votre position exacte. Des points ponctuels, pas un
          suivi.
        </p>
        <p>
          <strong>Les signalements.</strong> Quand vous signalez un dos-d'âne, l'application
          envoie la position précise du point, le nom de la voie, un identifiant aléatoire tiré au
          premier signalement et gardé sur votre téléphone et, si vous êtes connecté, l'identifiant
          de votre compte ; le serveur y ajoute la date et l'heure. L'identifiant aléatoire ne
          contient ni votre nom ni votre e-mail : il sert uniquement à compter les confirmations,
          un même téléphone ne comptant qu'une fois. Le lien avec votre compte est effacé dès le
          traitement du signalement ; l'identifiant aléatoire, lui, reste attaché au signalement. À trois
          signalements de conducteurs distincts au même endroit, le dos-d'âne apparaît sur la
          carte de tous, sans aucune information sur ceux qui l'ont signalé.
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
            <><strong>Votre adresse e-mail</strong> et un identifiant technique. Si vous passez par Apple ou Google, nous recevons ce que ce service nous transmet : votre nom et votre adresse e-mail, et avec Google le lien de votre photo de profil, que l'application n'utilise pas. Avec « Masquer mon adresse e-mail » d'Apple, nous ne voyons qu'une adresse relais.</>,
            <><strong>Votre mot de passe</strong>, si vous en créez un : il est haché par Firebase Authentication et <strong>nous ne pouvons pas le lire</strong>.</>,
            <><strong>Vos adresses favorites</strong> (domicile, travail) : le nom et l'adresse du lieu choisi dans la recherche, et ses coordonnées GPS.</>,
            <><strong>Votre historique de trajets</strong> : nom du point de départ et de la destination, date, distance, durée, nombre de dos-d'âne du trajet et nombre évités. Il sert à afficher vos statistiques, à vous et à personne d'autre.</>,
            <><strong>Votre compteur de trajets du mois</strong> et l'état de votre abonnement, pour appliquer l'offre décrite dans les conditions d'utilisation. La fiche du compte garde aussi la date de votre dernière ouverture de l'application. Chaque paiement d'abonnement encaissé par Apple ou Google pendant que vous êtes connecté est également noté : l'identifiant et l'adresse e-mail de votre compte, la boutique, l'offre, le prix affiché par la boutique, la date et le numéro de transaction.</>,
          ]}
        />
        <p>
          Sans compte, votre historique de trajets et votre compteur restent{' '}
          <strong>sur votre téléphone</strong> et disparaissent si vous désinstallez
          l'application. Exception sur Android : si la sauvegarde de votre téléphone sur votre
          compte Google est activée, Android y copie ce que l'application garde sur le téléphone
          (historique, compteur, recherches récentes) et le restaure quand vous la réinstallez. Les adresses favorites, elles, demandent un compte.
        </p>
      </Section>

      <Section titre="5. Les données techniques">
        <Liste
          items={[
            <><strong>Rapports de plantage</strong> (Firebase Crashlytics) : type d'appareil, version du système, version de l'application, pile d'appels au moment du plantage et un identifiant aléatoire propre à l'installation. Ils servent à corriger les pannes. Base légale : notre intérêt légitime à fournir une application qui fonctionne.</>,
            <><strong>Jeton de notification</strong> (Firebase Cloud Messaging) : un identifiant technique que le service de notifications de Google attribue à l'application dès son lancement, que vous ayez accepté les notifications ou non. Il sert à acheminer une notification ; nous ne le conservons dans aucune de nos bases de données, et il ne dit rien de vous.</>,
            <><strong>Attestation d'intégrité</strong> (Firebase App Check) : une preuve que les requêtes viennent bien de l'application officielle, et non d'un script. Elle empêche l'usage frauduleux de nos clés.</>,
            <><strong>Journaux des serveurs</strong> : adresse IP, date et ressource demandée, conservés par nos prestataires pour la sécurité et le diagnostic.</>,
          ]}
        />
      </Section>

      <Section titre="6. Qui reçoit vos données">
        <p>Nous ne travaillons qu'avec des prestataires nommés, et les voici tous :</p>
        <Liste
          items={[
            <><strong>Google Ireland Limited / Google LLC (Firebase, Google Maps)</strong> : comptes (Firebase Authentication), base de données (Cloud Firestore), fonctions serveur (Cloud Functions), fichiers de dos-d'âne (Firebase Hosting), rapports de plantage (Crashlytics), notifications (Cloud Messaging) et contrôle d'intégrité (App Check). La base de données et les fonctions serveur sont hébergées dans la région <strong>europe-west9 (Paris)</strong>, sauf la fonction qui efface le rôle d'un compte supprimé, à Bruxelles (europe-west1), dans l'Union européenne ; l'authentification, les rapports de plantage, les notifications et les fichiers de dos-d'âne passent par des services mondiaux de Google. Google Maps (Street View) reçoit enfin la position d'un dos-d'âne signalé quand l'éditeur le vérifie depuis son outil d'administration, sans aucune information sur la personne qui l'a signalé.</>,
            <><strong>Mapbox, Inc.</strong> (États-Unis) : fonds de carte, recherche d'adresses et calcul d'itinéraires. Reçoit les points de départ et d'arrivée d'un trajet, les termes que vous tapez dans la recherche d'adresse, et votre position précise (coordonnées GPS) dans trois cas : à chaque recherche d'adresse, pour classer les résultats proches ; quand le départ ou l'arrivée d'un trajet est « Ma position » ; et lors d'un recalcul en cours de route, avec votre sens de marche. La collecte statistique (télémétrie) du SDK Mapbox est désactivée dans l'application. Mapbox voit aussi, comme tout serveur, votre adresse IP et la zone de carte affichée. Ne reçoit ni votre e-mail ni votre identifiant de compte.</>,
            <><strong>Apple Inc.</strong> et <strong>Google LLC</strong> : l'encaissement des abonnements, chacun sur sa boutique ; la connexion avec votre compte Apple ou Google, si vous la choisissez ; et l'attestation d'intégrité de l'application (App Attest et DeviceCheck chez Apple, Play Integrity chez Google). Ils nous transmettent l'état de l'abonnement, jamais votre moyen de paiement.</>,
            <><strong>{hebergeur.nom}</strong> ({hebergeur.service}) : l'hébergement de ce site.</>,
          ]}
        />
        <p>
          Les ralentisseurs affichés proviennent de sources publiques : <strong>OpenStreetMap</strong>{' '}
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
          La base de données de l'application (fiche de compte, favoris, historique de trajets,
          paiements, signalements) est hébergée <strong>en France</strong>. Des transferts hors UE
          existent néanmoins : <strong>Mapbox</strong>, société américaine, pour la carte, le calcul
          d'itinéraires et la recherche d'adresses, positions précises comprises (section 3) ; les
          services mondiaux de <strong>Google</strong> (authentification, rapports de plantage,
          notifications, contrôle d'intégrité, fichiers de dos-d'âne, Street View pour l'éditeur) et
          ses opérations de support, qui peuvent avoir lieu depuis d'autres pays, notamment les
          États-Unis ; et <strong>GitHub</strong>, société américaine, qui héberge ce site. Ces transferts sont
          encadrés par les <strong>clauses contractuelles types</strong> de la Commission
          européenne, complétées par les garanties techniques de ces prestataires (chiffrement en
          transit et au repos).
        </p>
      </Section>

      <Section titre="8. Combien de temps">
        <Liste
          items={[
            <><strong>Position pendant la navigation</strong> : le temps du trajet. Elle n'est écrite nulle part une fois le guidage terminé.</>,
            <><strong>Signalements de dos-d'âne</strong> : conservés tant qu'ils servent la base commune, y compris après la suppression de votre compte : sans lien avec ce compte, mais avec leur position, le nom de la voie, leur date et l'identifiant aléatoire du téléphone qui les a envoyés.</>,
            <><strong>Compte, favoris, historique de trajets</strong> : tant que votre compte existe ; l'application affiche les 60 derniers trajets. Tout est effacé à la suppression du compte.</>,
            <><strong>Recherches récentes</strong> : vos 5 dernières destinations, gardées sur votre téléphone (sauvegarde Android mise à part, voir section 4) et effacées à la déconnexion.</>,
            <><strong>Abonnement</strong> : son état et ses dates, tant que votre compte existe. Après la suppression du compte, seule la trace comptable est gardée (voir Facturation).</>,
            <><strong>Rapports de plantage</strong> : 90 jours.</>,
            <><strong>Journaux techniques</strong> : jusqu'à 12 mois.</>,
            <><strong>Facturation</strong> : conservée par Apple et Google selon leurs propres règles, et, de notre côté, par le journal des paiements (identifiant et adresse e-mail du compte, boutique, offre, prix, date, numéro de transaction), gardé pour la durée légale de conservation comptable (10 ans), y compris après la suppression du compte.</>,
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
            <><strong>Effacement</strong> : onglet « Compte » → « Supprimer mon compte », dans l'application. Le compte, les favoris, l'historique, le compteur de trajets et l'état d'abonnement sont supprimés. Restent, comme indiqué à la section 8, le journal des paiements, qui garde votre adresse e-mail, et vos signalements de dos-d'âne, détachés de votre compte. Voir aussi <Link to="/supprimer-compte">la marche à suivre détaillée</Link>.</>,
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
          jamais par l'application. Seule exception : les comptes d'administration de l'éditeur
          voient l'adresse e-mail, la date de dernière ouverture de l'application, le compteur de
          trajets, l'état d'abonnement et les paiements de chaque compte, ainsi que les
          signalements ; jamais les favoris ni l'historique de trajets. Les mots de passe sont
          hachés et nous restent invisibles.
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
          votre message et votre adresse e-mail, conservés le temps d'y répondre, puis trois ans
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
