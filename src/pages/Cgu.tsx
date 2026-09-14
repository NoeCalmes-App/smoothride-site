import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste, ACompleter } from '../components/LegalLayout'
import { app, contact, editeur, SITE_URL } from '../config/site'

/**
 * LES CONDITIONS GÉNÉRALES — site, application ET abonnement.
 *
 * Ce texte joue trois rôles à la fois, et c'est voulu : conditions
 * d'utilisation du site, contrat de licence de l'application (le « CLUF » que
 * demande Apple quand on ne se contente pas du sien), et conditions de vente
 * de l'abonnement. Un utilisateur ne lit qu'une page ; il ne doit pas avoir à
 * deviner laquelle le concerne.
 *
 * Deux sections ne sont pas là par confort juridique mais par obligation :
 * la 4 (sécurité routière), parce qu'une application qui parle à un
 * conducteur doit dire où s'arrête son rôle ; et la 12 (App Store), parce
 * qu'Apple exige des mentions précises dans tout contrat de licence
 * personnalisé, et refuse les applications qui ne les portent pas.
 */
export default function Cgu() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Conditions générales d'utilisation"
      description={`Les règles d'usage de ${app.nom} : le service, le compte, l'offre gratuite, l'abonnement Pro et sa résiliation.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Ces conditions régissent l'usage du site <strong>{domaine}</strong> et de l'application
          mobile <strong>{app.nom}</strong>, éditée par {editeur.nomLegal}. Installer l'application
          ou l'utiliser vaut acceptation de ces conditions. Si vous n'en acceptez pas les termes,
          n'utilisez pas le service.
        </p>
      }
    >
      <Section titre="1. L'éditeur">
        <p>
          <strong>{editeur.nomLegal}</strong>, {editeur.formeJuridique.toLowerCase()} (nom commercial{' '}
          {editeur.nomCommercial}), SIREN {editeur.siren}, {editeur.adresse}. Contact :{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. Les coordonnées complètes
          figurent dans les <Link to="/mentions-legales">mentions légales</Link>.
        </p>
      </Section>

      <Section titre="2. Ce que fait le service">
        <p>
          {app.nom} compare deux itinéraires routiers, compte les ralentisseurs référencés sur
          chacun, et indique ce que le trajet le plus confortable coûte en minutes. L'application
          guide ensuite le conducteur jusqu'à sa destination et signale les obstacles à l'approche.
        </p>
        <p>
          Le service est fourni <strong>en l'état</strong> et évolue. Nous pouvons ajouter,
          modifier ou retirer des fonctionnalités ; une modification qui réduirait
          substantiellement un service payant ouvre droit à la résiliation prévue à la section 9.
        </p>
      </Section>

      <Section titre="3. Les données de ralentisseurs : ce qu'elles valent">
        <p>
          Les ralentisseurs et passages à niveau proviennent de bases publiques —{' '}
          <strong>OpenStreetMap</strong> (contributeurs, licence ODbL) et <strong>SNCF Réseau</strong>{' '}
          — complétées par les signalements des utilisateurs. Ces sources sont précieuses, mais :
        </p>
        <Liste
          items={[
            <>elles peuvent être <strong>incomplètes</strong> : un ralentisseur non référencé n'apparaîtra pas ;</>,
            <>elles peuvent être <strong>périmées</strong> : un aménagement récent met du temps à être cartographié ;</>,
            <>elles peuvent être <strong>inexactes</strong> quant à la position ou à la nature de l'obstacle.</>,
          ]}
        />
        <p>
          <strong>Aucune garantie d'exhaustivité ni d'exactitude n'est donnée.</strong> Le nombre
          de ralentisseurs affiché est une estimation fondée sur ces données, jamais un relevé
          officiel.
        </p>
      </Section>

      <Section titre="4. Sécurité routière : votre conduite reste la vôtre">
        <p>
          <strong>
            {app.nom} est une aide à la décision, pas un substitut à votre vigilance.
          </strong>{' '}
          Le conducteur demeure, en toutes circonstances, seul responsable de sa conduite, du
          respect du code de la route et de l'adaptation de sa vitesse aux conditions réelles.
        </p>
        <Liste
          items={[
            <>Ne manipulez <strong>jamais</strong> l'application en roulant : programmez votre trajet à l'arrêt.</>,
            <>Les <strong>panneaux et la signalisation</strong> sur la route priment toujours sur l'affichage de l'application.</>,
            <>Un itinéraire proposé peut être <strong>inadapté</strong> à votre véhicule (gabarit, hauteur, poids), aux travaux en cours ou à une restriction temporaire de circulation.</>,
            <>L'absence de ralentisseur signalé <strong>ne signifie pas</strong> qu'il n'y en a pas.</>,
          ]}
        />
        <p>
          L'application dépend du signal satellite de votre téléphone et d'une connexion réseau
          pour le calcul initial : l'un comme l'autre peuvent manquer.
        </p>
      </Section>

      <Section titre="5. Le compte">
        <p>
          La carte est consultable sans compte. Créer un compte permet de retrouver ses favoris,
          son historique et son abonnement sur un autre téléphone. Vous vous engagez à fournir une
          adresse e-mail exacte, à garder votre mot de passe confidentiel et à nous signaler tout
          usage non autorisé. Vous êtes responsable de l'activité menée depuis votre compte.
        </p>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis l'application (« Ton compte » →
          « Supprimer mon compte »), ce qui efface vos favoris et votre historique. La suppression
          du compte <strong>ne résilie pas</strong> un abonnement en cours : celui-ci se résilie
          auprès de la boutique, comme indiqué à la section 8.
        </p>
      </Section>

      <Section titre="6. L'offre gratuite">
        <p>
          Chaque mois calendaire, <strong>trois calculs d'itinéraire</strong> sont offerts. Le
          compteur revient à zéro le 1er de chaque mois. Ne sont pas décomptés : la consultation
          de la carte, un itinéraire déjà calculé et réaffiché, et les recalculs effectués
          automatiquement pendant que vous roulez.
        </p>
      </Section>

      <Section titre="7. L'abonnement Pro">
        <p>
          L'abonnement <strong>{app.nom} Pro</strong> lève le compteur : les calculs d'itinéraire
          deviennent illimités, dans la limite d'un garde-fou technique de{' '}
          <strong>30 calculs par jour</strong> destiné à prévenir les usages automatisés. Ce
          plafond se rouvre chaque jour et n'affecte pas un usage normal.
        </p>
        <Liste
          items={[
            <><strong>Prix et durée</strong> : au jour de cette version, 9,99 € par mois ou 99,99 € par an en France, toutes taxes comprises. Les montants affichés dans l'application au moment de l'achat, dans votre devise et selon la fiscalité de votre pays, font seuls foi.</>,
            <><strong>Souscription</strong> : exclusivement par achat intégré, via l'App Store d'Apple ou Google Play. Nous n'encaissons aucun paiement directement et ne voyons jamais votre moyen de paiement.</>,
            <><strong>Renouvellement automatique</strong> : l'abonnement se reconduit à la fin de chaque période, au tarif alors en vigueur, sauf résiliation au moins 24 heures avant l'échéance.</>,
            <><strong>Changement de prix</strong> : toute évolution vous est notifiée par la boutique avant qu'elle ne prenne effet, et vous pouvez résilier avant l'échéance.</>,
          ]}
        />
      </Section>

      <Section titre="8. Résiliation et remboursement">
        <p>
          <strong>La résiliation passe par la boutique</strong> qui encaisse l'abonnement : réglages
          de votre compte Apple (« Abonnements ») ou Google Play (« Paiements et abonnements »).
          C'est la règle de tous les abonnements souscrits dans une application :{' '}
          <strong>nous ne pouvons ni prélever ni résilier à votre place</strong>. La résiliation
          prend effet à la fin de la période en cours, que vous conservez.
        </p>
        <p>
          <strong>Droit de rétractation.</strong> S'agissant d'un contenu numérique fourni
          immédiatement, vous acceptez, en souscrivant, que l'exécution commence sur-le-champ et
          renoncez à votre droit de rétractation de quatorze jours, conformément à l'article
          L. 221-28 du code de la consommation. Les demandes de remboursement relèvent en pratique
          des politiques d'Apple et de Google, seules à encaisser : adressez-les directement à la
          boutique concernée.
        </p>
      </Section>

      <Section titre="9. Suspension et fin du service">
        <p>
          Nous pouvons suspendre ou fermer un compte en cas de manquement à ces conditions, de
          fraude, ou d'usage manifestement automatisé du service. En cas de fermeture d'un compte
          disposant d'un abonnement actif sans manquement de votre part, la période payée non
          utilisée vous est remboursée au prorata. Si nous cessions d'exploiter le service, vous
          en seriez informé et le renouvellement des abonnements serait interrompu.
        </p>
      </Section>

      <Section titre="10. Ce que vous n'avez pas le droit de faire">
        <Liste
          items={[
            <>Copier, décompiler ou désassembler l'application, hors des cas prévus par la loi.</>,
            <>Extraire massivement les données du service ou en faire un usage automatisé.</>,
            <>Contourner les limites d'usage, notamment le compteur de trajets.</>,
            <>Déposer des signalements faux ou malveillants.</>,
            <>Revendre, louer ou redistribuer le service ou l'accès à un abonnement.</>,
          ]}
        />
      </Section>

      <Section titre="11. Propriété intellectuelle">
        <p>
          L'application, le site, leur code, leurs textes, leur charte graphique et la marque{' '}
          {app.nom} appartiennent à {editeur.nomLegal}. L'abonnement vous accorde un droit
          d'usage <strong>personnel, non exclusif et non transférable</strong> de l'application ;
          il ne vous en transfère aucun droit de propriété.
        </p>
        <p>
          Les données cartographiques appartiennent à leurs auteurs :{' '}
          <strong>© Mapbox</strong>, <strong>© contributeurs OpenStreetMap</strong> (ODbL) et{' '}
          <strong>SNCF Réseau</strong>, cités dans l'application.
        </p>
      </Section>

      <Section titre="12. Application téléchargée depuis l'App Store">
        <p>
          Lorsque l'application est obtenue depuis l'App Store, les précisions suivantes
          s'appliquent, conformément aux règles d'Apple :
        </p>
        <Liste
          items={[
            <>Ces conditions vous lient à <strong>{editeur.nomLegal}</strong> seul, et non à Apple : <strong>Apple n'est pas partie au contrat</strong>.</>,
            <>La licence accordée est <strong>non transférable</strong> et limitée à l'usage de l'application sur les appareils Apple que vous possédez ou contrôlez, selon les règles d'usage de l'App Store.</>,
            <><strong>{editeur.nomLegal}</strong> est seul responsable de l'application, de son contenu, de sa maintenance et de son support. Apple n'a aucune obligation de support ni de maintenance.</>,
            <>En cas de défaut de conformité, vous pouvez le notifier à Apple, qui pourra vous rembourser le prix d'achat ; au-delà de ce remboursement, <strong>Apple n'assume aucune garantie</strong>.</>,
            <><strong>{editeur.nomLegal}</strong> est seul responsable des réclamations relatives à l'application, y compris en matière de responsabilité du fait des produits, de conformité réglementaire et de protection des consommateurs.</>,
            <>En cas de réclamation d'un tiers pour atteinte à la propriété intellectuelle, <strong>{editeur.nomLegal}</strong> en assume seul la défense et le règlement.</>,
            <>Vous déclarez ne pas résider dans un pays sous embargo des États-Unis ni figurer sur une liste de parties interdites.</>,
            <><strong>Apple et ses filiales sont tiers bénéficiaires</strong> de ces conditions et peuvent les faire valoir à votre encontre.</>,
          ]}
        />
      </Section>

      <Section titre="13. Responsabilité">
        <p>
          Nous mettons en œuvre les moyens raisonnables pour que le service fonctionne, sans
          garantir une disponibilité ininterrompue : une panne, une maintenance ou la défaillance
          d'un prestataire peuvent l'interrompre. Notre responsabilité ne peut être engagée pour
          les dommages indirects, ni pour les conséquences d'une conduite ne respectant pas la
          section 4, d'un défaut de signal de votre téléphone, ou d'une donnée cartographique
          erronée provenant d'une source publique.
        </p>
        <p>
          Aucune de ces limites n'écarte les droits que la loi vous garantit en tant que
          consommateur, notamment les garanties légales de conformité et des vices cachés, ni
          notre responsabilité en cas de faute lourde ou de dommage corporel.
        </p>
      </Section>

      <Section titre="14. Modification des conditions">
        <p>
          Ces conditions peuvent être modifiées. La version applicable est celle publiée sur cette
          page au jour de votre utilisation. Une modification substantielle touchant un abonnement
          en cours vous est signalée dans l'application avant son entrée en vigueur ; si elle ne
          vous convient pas, vous pouvez résilier dans les conditions de la section 8.
        </p>
      </Section>

      <Section titre="15. Droit applicable et litiges">
        <p>
          Ces conditions sont régies par le <strong>droit français</strong>. En cas de difficulté,
          écrivez-nous d'abord à <a href={`mailto:${contact.email}`}>{contact.email}</a> : la
          plupart se règlent ainsi.
        </p>
        <p>
          Conformément aux articles L. 612-1 et suivants du code de la consommation, tout
          consommateur peut recourir gratuitement à un médiateur de la consommation :{' '}
          <ACompleter>
            nom et coordonnées du médiateur de la consommation auquel l'éditeur adhère (adhésion
            obligatoire pour un professionnel vendant à des consommateurs).
          </ACompleter>
        </p>
        <p>
          À défaut d'accord amiable, le litige relève des tribunaux compétents. Si vous êtes
          consommateur, vous conservez le droit de saisir la juridiction du lieu de votre domicile.
        </p>
        <p>
          Voir aussi : <Link to="/confidentialite">Politique de confidentialité</Link> et{' '}
          <Link to="/mentions-legales">Mentions légales</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
