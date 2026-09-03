import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur } from '../config/site'

/**
 * La page que Google Play exige (adresse de suppression de compte) et
 * qu'Apple attend : comment supprimer son compte, ce qui est effacé, ce qui
 * est gardé et pourquoi.
 */
export default function SupprimerCompte() {
  return (
    <LegalLayout
      titre="Supprimer mon compte"
      description={`Comment supprimer votre compte ${app.nom} et vos données, depuis l'application ou par e-mail.`}
      miseAJour={editeur.miseAJourLegale}
      intro={<p>Vous pouvez supprimer votre compte {app.nom} à tout moment, depuis l'application ou par e-mail. La suppression est définitive.</p>}
    >
      <Section titre="Depuis l'application">
        <Liste
          items={[
            <>Ouvrez {app.nom} et touchez l'onglet <strong>Compte</strong>, en bas à droite.</>,
            <>Touchez <strong>Supprimer mon compte</strong>, en bas de la page.</>,
            <>Confirmez. Votre compte est fermé immédiatement.</>,
          ]}
        />
      </Section>

      <Section titre="Par e-mail">
        <p>
          Si vous n'avez plus accès à l'application, écrivez à <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Suppression de mon compte')}`}>{contact.email}</a> depuis l'adresse associée à votre compte, avec pour objet « Suppression de mon compte ». Nous confirmons la suppression sous {contact.delaiReponse}.
        </p>
      </Section>

      <Section titre="Ce qui est supprimé">
        <Liste
          items={[
            <>Votre compte : adresse e-mail ou identifiant Apple / Google, mot de passe.</>,
            <>L'état de votre abonnement dans l'application.</>,
            <>Le lien entre votre compte et vos signalements. Les signalements déjà confirmés restent dans la base, anonymement : ils décrivent un dos-d'âne, pas une personne.</>,
          ]}
        />
        <p>Votre historique de trajets n'a jamais quitté votre téléphone : il disparaît en désinstallant l'application.</p>
      </Section>

      <Section titre="Ce qui est conservé, et combien de temps">
        <p>
          Les données du compte sont effacées de nos systèmes dans les 30 jours. Seuls les justificatifs qu'une obligation légale nous impose de garder (par exemple les preuves d'abonnement) sont conservés le temps prévu par la loi, puis supprimés.
        </p>
        <p>
          <strong>Attention :</strong> supprimer votre compte n'arrête pas un abonnement en cours. Résiliez-le d'abord depuis les réglages de votre compte Apple ou Google, sinon il pourrait être renouvelé.
        </p>
        <p>
          Pour en savoir plus sur vos données, consultez la <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
