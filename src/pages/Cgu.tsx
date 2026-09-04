import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur, SITE_URL } from '../config/site'

/**
 * LES CONDITIONS D'UTILISATION DU SITE — et de lui seul.
 *
 * ⚠️ CE NE SONT PAS LES CONDITIONS DE L'APPLICATION, correction du 3 septembre
 * 2026. La première version régissait l'app : compte, abonnement, signalements,
 * usage au volant, responsabilité du conducteur. Or l'application n'est pas
 * publiée : ces conditions n'engageaient personne et décrivaient un service qui
 * n'existe pas. Elles seront fournies DANS l'application, à sa publication.
 *
 * PAS DE CGV NON PLUS, et ce n'est pas un oubli : des conditions de VENTE
 * supposent une vente. Rien n'est vendu ici — pas de compte, pas de panier,
 * pas de paiement. L'abonnement se souscrira dans l'app, par l'App Store ou
 * Google Play, sous leurs conditions.
 */
export default function Cgu() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Conditions générales d'utilisation"
      description={`Conditions d'utilisation du site ${domaine} : objet, accès, propriété intellectuelle, responsabilité.`}
      miseAJour={editeur.miseAJourLegale}
      intro={
        <p>
          Les présentes conditions régissent l'utilisation du site <strong>{domaine}</strong>. En le consultant,
          vous les acceptez. Elles ne concernent que le site : l'application {app.nom} aura ses propres
          conditions, fournies dans l'application lors de sa publication.
        </p>
      }
    >
      <Section titre="1. Objet du site">
        <p>
          {domaine} est un site de présentation édité par {editeur.nomLegal}, {editeur.formeJuridique.toLowerCase()}{' '}
          (SIREN {editeur.siren}). Il présente l'application mobile {app.nom} et met à disposition les
          informations légales de l'éditeur ainsi qu'une adresse de contact.
        </p>
        <p>
          <strong>Aucune vente n'est conclue sur ce site</strong> : il ne propose ni compte, ni panier, ni
          paiement. Il n'y a donc pas de conditions générales de vente. Le cas échéant, un abonnement se
          souscrira dans l'application, par l'intermédiaire de l'App Store ou de Google Play, sous les
          conditions de ces plateformes.
        </p>
      </Section>

      <Section titre="2. Accès">
        <p>
          L'accès est libre et gratuit, sans inscription. Il nécessite une connexion internet, à votre charge.
          L'éditeur s'efforce de garder le site accessible, sans pouvoir garantir une disponibilité
          ininterrompue : maintenance, panne de l'hébergeur ou du réseau peuvent l'interrompre, sans que sa
          responsabilité soit engagée.
        </p>
      </Section>

      <Section titre="3. Contenu du site">
        <p>
          Les informations publiées sont fournies à titre informatif. L'éditeur s'efforce de leur exactitude
          et peut les modifier à tout moment, sans préavis.
        </p>
        <p>
          <strong>L'application {app.nom} est en cours de développement.</strong> Les écrans, fonctionnalités
          et textes présentés ici décrivent le produit tel qu'il est prévu : ils sont susceptibles d'évoluer
          et ne constituent pas un engagement contractuel sur son contenu définitif ni sur sa date de
          publication.
        </p>
      </Section>

      <Section titre="4. Propriété intellectuelle">
        <p>
          Le nom {app.nom}, le logo, les textes, les visuels, les écrans et la structure du site sont protégés
          et appartiennent à l'éditeur, ou sont utilisés avec l'autorisation de leurs ayants droit. La
          consultation du site ne confère aucun droit sur ces éléments. Toute reproduction, représentation ou
          réutilisation, totale ou partielle, sans autorisation écrite préalable, est interdite.
        </p>
      </Section>

      <Section titre="5. Liens vers d'autres sites">
        <p>
          Le site peut renvoyer vers des sites tiers, notamment l'App Store et Google Play. L'éditeur n'a aucun
          contrôle sur leur contenu ni sur leurs pratiques, et n'en répond pas. Leur consultation relève de
          leurs propres conditions.
        </p>
      </Section>

      <Section titre="6. Responsabilité">
        <p>
          Dans les limites permises par la loi, l'éditeur ne peut être tenu responsable des dommages indirects
          résultant de la consultation du site, d'une indisponibilité, ou de l'usage fait des informations qui
          y figurent. Rien dans les présentes ne limite les droits que la loi vous accorde en tant que
          consommateur.
        </p>
      </Section>

      <Section titre="7. Données personnelles">
        <Liste
          items={[
            <>Le site est statique : il ne dépose aucun cookie et ne collecte aucune donnée.</>,
            <>Le détail figure dans la <Link to="/confidentialite">politique de confidentialité</Link>.</>,
          ]}
        />
      </Section>

      <Section titre="8. Modification, droit applicable, contact">
        <p>
          L'éditeur peut modifier les présentes conditions ; la version applicable est celle publiée sur cette
          page, datée en haut. Elles sont soumises au droit français. En cas de litige, une solution amiable
          sera recherchée en priorité ; à défaut, les tribunaux français sont compétents.
        </p>
        <p>
          Contact : <a href={`mailto:${contact.email}`}>{contact.email}</a> — voir aussi les{' '}
          <Link to="/mentions-legales">mentions légales</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
