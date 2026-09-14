import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur } from '../config/site'

/**
 * L'adresse que Google Play EXIGE (« URL de suppression du compte ») et
 * qu'Apple attend. Elle est donnée telle quelle dans les deux consoles.
 *
 * Deux règles pour cette page : elle décrit une procédure qui existe
 * vraiment dans l'application — écran par écran, avec les mots qui sont
 * réellement affichés —, et elle dit ce que la suppression N'efface PAS.
 * Google vérifie le premier point ; le second évite qu'un utilisateur
 * supprime son compte en croyant résilier son abonnement, et continue de
 * payer pour un compte disparu.
 */
export default function SupprimerCompte() {
  return (
    <LegalLayout
      titre="Supprimer mon compte"
      description={`Comment supprimer définitivement un compte ${app.nom} et les données associées, directement depuis l'application.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          La suppression d'un compte {app.nom} se fait <strong>depuis l'application</strong>, en
          trois touches, sans avoir à écrire à qui que ce soit. Elle est immédiate et définitive.
        </p>
      }
    >
      <Section titre="La marche à suivre">
        <Liste
          items={[
            <>Ouvrez {app.nom} et touchez l'onglet <strong>« Compte »</strong>, en bas à droite.</>,
            <>Faites défiler jusqu'en bas, puis touchez <strong>« Supprimer mon compte »</strong>, en rouge.</>,
            <>Lisez le récapitulatif, puis confirmez avec <strong>« Supprimer définitivement »</strong>.</>,
            <>Si votre dernière connexion date, l'application vous redemande votre mot de passe (ou vous fait vous identifier auprès d'Apple ou de Google) : c'est une sécurité, pour que personne d'autre que vous ne puisse effacer votre compte.</>,
          ]}
        />
      </Section>

      <Section titre="Ce qui est effacé">
        <Liste
          items={[
            <>Votre <strong>compte</strong> et votre identifiant de connexion.</>,
            <>Vos <strong>adresses favorites</strong> (domicile, travail).</>,
            <>Votre <strong>historique de trajets</strong> et les statistiques qui en découlent.</>,
            <>Votre <strong>compteur de trajets</strong> du mois et l'état d'abonnement enregistré sur votre compte.</>,
          ]}
        />
        <p>
          L'effacement est <strong>immédiat</strong> et <strong>irréversible</strong> : ces données
          ne peuvent pas être restaurées, y compris si vous recréez un compte avec la même adresse.
        </p>
      </Section>

      <Section titre="Ce qui n'est pas effacé">
        <Liste
          items={[
            <><strong>Un abonnement en cours n'est pas résilié.</strong> Il se résilie auprès de la boutique qui l'encaisse : réglages de votre compte Apple (« Abonnements »), ou Google Play (« Paiements et abonnements »). <strong>Résiliez-le avant de supprimer votre compte</strong>, sinon il continue d'être prélevé.</>,
            <>Les <strong>rapports de plantage</strong> anonymes déjà transmis, qui ne vous identifient pas et s'effacent d'eux-mêmes au bout de 90 jours.</>,
            <>Les <strong>écritures comptables</strong> liées à un paiement, que la loi impose de conserver dix ans. Elles sont détenues par Apple et Google, qui encaissent.</>,
            <>Les <strong>signalements de ralentisseurs</strong> que vous avez pu envoyer : ils sont versés à la base commune sans lien avec votre compte, et ne permettent pas de vous identifier.</>,
          ]}
        />
      </Section>

      <Section titre="Sans passer par l'application">
        <p>
          Si vous n'avez plus accès à votre téléphone ou à l'application, écrivez à{' '}
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Suppression de mon compte SmoothRide')}`}>
            {contact.email}
          </a>{' '}
          depuis l'adresse e-mail du compte. Nous procédons à la suppression après vérification,
          sous {contact.delaiReponse}, et au plus tard dans le mois prévu par le RGPD.
        </p>
      </Section>

      <Section titre="Vos autres droits">
        <p>
          Accès, rectification, portabilité, opposition : ils sont décrits dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>, avec les durées de
          conservation de chaque donnée et la liste de nos prestataires.
        </p>
      </Section>
    </LegalLayout>
  )
}
