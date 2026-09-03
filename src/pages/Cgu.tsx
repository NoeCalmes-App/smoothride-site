import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur } from '../config/site'

export default function Cgu() {
  return (
    <LegalLayout
      titre="Conditions générales d'utilisation"
      description={`Conditions d'utilisation de l'application ${app.nom} : accès, compte, abonnement, usage au volant, responsabilités.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          En installant et en utilisant l'application {app.nom} (« l'Application »), vous acceptez les présentes conditions. Si vous ne les acceptez pas, n'utilisez pas l'Application.
        </p>
      }
    >
      <Section titre="1. L'Application">
        <p>
          {app.nom} est une application mobile d'aide à l'itinéraire éditée par {editeur.nomLegal}, {editeur.formeJuridique.toLowerCase()} (SIREN {editeur.siren}). Elle affiche les dos-d'âne connus autour de vous, compare plusieurs trajets en indiquant le nombre de dos-d'âne et la durée de chacun, vous guide pendant le trajet et vous permet de signaler un dos-d'âne. Elle est disponible sur iOS et Android.
        </p>
      </Section>

      <Section titre="2. Une aide, pas une garantie">
        <p>
          Les dos-d'âne affichés proviennent de données cartographiques ouvertes (OpenStreetMap) et de signalements d'utilisateurs, confirmés par d'autres conducteurs. Malgré ce soin, la base peut être incomplète ou dépassée : un dos-d'âne peut manquer, un autre avoir été retiré. Les durées et distances sont des estimations.
        </p>
        <p>
          <strong>Vous restez seul responsable de votre conduite.</strong> L'Application ne remplace ni votre attention, ni la signalisation, ni le Code de la route. Réglez votre trajet avant de partir, et ne manipulez jamais votre téléphone en conduisant : le signalement en un appui est conçu pour cela, mais il ne dispense pas de garder les yeux sur la route.
        </p>
      </Section>

      <Section titre="3. Compte">
        <p>
          L'Application peut être découverte sans compte. Un compte est demandé pour poursuivre au-delà des trajets offerts et pour souscrire l'abonnement. Vous vous engagez à fournir des informations exactes et à garder vos identifiants confidentiels. Vous pouvez supprimer votre compte à tout moment (voir <Link to="/supprimer-compte">Supprimer mon compte</Link>).
        </p>
      </Section>

      <Section titre="4. Abonnement">
        <Liste
          items={[
            <>Une partie de l'Application est utilisable gratuitement ; au-delà, elle fonctionne sur <strong>abonnement</strong>, sans engagement de durée. Le périmètre gratuit, la durée et le prix de l'abonnement sont ceux affichés dans l'Application au moment de la souscription : ils font seuls foi.</>,
            <>L'abonnement est souscrit, facturé et renouvelé automatiquement par l'<strong>App Store</strong> (Apple) ou <strong>Google Play</strong> (Google), selon votre appareil. Il se résilie à tout moment depuis les réglages de votre compte Apple ou Google ; la résiliation prend effet à la fin de la période en cours, déjà payée.</>,
            <>Les conditions de remboursement sont celles de l'App Store ou de Google Play.</>,
          ]}
        />
      </Section>

      <Section titre="5. Signalements">
        <p>
          En signalant un dos-d'âne, vous déclarez qu'il existe à l'endroit indiqué. Les signalements sont vérifiés par confirmation d'autres conducteurs avant d'être publiés. Les signalements manifestement faux ou abusifs peuvent être retirés, et le compte concerné suspendu. En signalant, vous autorisez l'éditeur à intégrer l'information, anonymement, à la base des dos-d'âne partagée par tous les utilisateurs.
        </p>
      </Section>

      <Section titre="6. Usages interdits">
        <Liste
          items={[
            <>Utiliser l'Application d'une manière qui met en danger votre sécurité ou celle des autres.</>,
            <>Tenter d'extraire, copier ou reconstituer la base des dos-d'âne, ou d'accéder aux serveurs autrement que par l'Application.</>,
            <>Contourner l'abonnement ou les limites de la version gratuite.</>,
          ]}
        />
      </Section>

      <Section titre="7. Propriété intellectuelle">
        <p>
          L'Application, son nom, son logo, ses écrans et ses contenus appartiennent à l'éditeur. L'installation vous confère un droit d'usage personnel, non exclusif et non cessible. Les fonds de carte sont fournis par Mapbox et les données par OpenStreetMap (© les contributeurs, licence ODbL).
        </p>
      </Section>

      <Section titre="8. Disponibilité et évolutions">
        <p>
          L'éditeur s'efforce de maintenir l'Application accessible, mais ne garantit pas une disponibilité ininterrompue : maintenance, panne d'un prestataire, absence de réseau. Certaines fonctions restent consultables hors ligne, d'autres non. L'Application évolue ; des fonctions peuvent être ajoutées, modifiées ou retirées.
        </p>
      </Section>

      <Section titre="9. Responsabilité">
        <p>
          Dans les limites permises par la loi, l'éditeur ne peut être tenu responsable des dommages indirects liés à l'utilisation de l'Application, ni des conséquences d'une information manquante ou inexacte sur un dos-d'âne. Rien dans ces conditions ne limite les droits que la loi vous accorde en tant que consommateur.
        </p>
      </Section>

      <Section titre="10. Données personnelles">
        <p>
          Le traitement de vos données est décrit dans la <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>

      <Section titre="11. Modifications, droit applicable, contact">
        <p>
          L'éditeur peut modifier ces conditions ; la version en vigueur est celle publiée sur cette page, datée en haut. Les présentes sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité ; vous pouvez aussi recourir gratuitement à un médiateur de la consommation. À défaut, les tribunaux français sont compétents.
        </p>
        <p>
          Contact : <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
