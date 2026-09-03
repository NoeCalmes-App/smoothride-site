import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur, hebergeur, SITE_URL } from '../config/site'

/**
 * Les mentions obligatoires d'un site professionnel (loi pour la confiance dans
 * l'économie numérique, art. 6-III) — et ce qui associe ce domaine à l'entité
 * qui publie l'app. Tout vient de src/config/site.ts.
 */
export default function MentionsLegales() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Mentions légales"
      description={`Mentions légales du site ${domaine} et de l'application ${app.nom} : éditeur, hébergeur, propriété intellectuelle.`}
      miseAJour={editeur.miseAJourLegale}
    >
      <Section titre="Éditeur du site et de l'application">
        <p>
          Le site <strong>{domaine}</strong> et l'application mobile <strong>{app.nom}</strong> sont édités par :
        </p>
        <Liste
          items={[
            <><strong>{editeur.nomLegal}</strong>, {editeur.formeJuridique.toLowerCase()}, exerçant sous le nom commercial {editeur.nomCommercial}</>,
            <>SIREN : {editeur.siren} — SIRET : {editeur.siret}</>,
            <>Adresse : {editeur.adresse}</>,
            <>Téléphone : <a href={`tel:${editeur.telephone.replace(/\s/g, '')}`}>{editeur.telephone}</a></>,
            <>E-mail : <a href={`mailto:${contact.email}`}>{contact.email}</a></>,
          ]}
        />
        <p>
          <strong>Directeur de la publication :</strong> {editeur.directeurPublication}.
        </p>
      </Section>

      <Section titre="Hébergement">
        <p>
          Le site est hébergé par <strong>{hebergeur.nom}</strong> ({hebergeur.service}), {hebergeur.adresse} —{' '}
          <a href={hebergeur.site} target="_blank" rel="noopener noreferrer">{hebergeur.site}</a>.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          Le nom {app.nom}, le logo, les textes, les écrans et l'ensemble des éléments du site et de l'application sont la propriété de l'éditeur ou sont utilisés avec l'autorisation de leurs ayants droit. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>
        <p>
          Les fonds de carte de l'application sont fournis par Mapbox ; les données cartographiques proviennent d'OpenStreetMap, © les contributeurs d'OpenStreetMap, sous licence ODbL.
        </p>
      </Section>

      <Section titre="Données personnelles et cookies">
        <p>
          Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne collecte aucune donnée personnelle : il est entièrement statique. Le traitement des données par l'application est décrit dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>

      <Section titre="Droit applicable">
        <p>
          Le site et l'application sont soumis au droit français. En cas de litige et à défaut de solution amiable, les tribunaux français seront seuls compétents.
        </p>
      </Section>
    </LegalLayout>
  )
}
