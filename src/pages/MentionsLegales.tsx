import { Link } from 'react-router-dom'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact, editeur, hebergeur, SITE_URL } from '../config/site'

/**
 * Les mentions obligatoires d'un site professionnel (LCEN, art. 6-III) — et ce
 * qui associe ce domaine à l'entité légale, ce qu'Apple vérifie.
 *
 * ⚠️ ÉDITEUR DU SITE, PAS « DU SITE ET DE L'APPLICATION » : l'application n'est
 * pas publiée. Nommer un éditeur d'application inexistante affaiblit la seule
 * chose que cette page doit prouver — que ce site-ci appartient à cette
 * société-là. L'hébergeur est nommé en toutes lettres : c'est une mention
 * obligatoire, et la première que l'on vient chercher ici.
 *
 * Tout vient de src/config/site.ts.
 */
export default function MentionsLegales() {
  const domaine = SITE_URL.replace(/^https?:\/\//, '')
  return (
    <LegalLayout
      titre="Mentions légales"
      description={`Mentions légales du site ${domaine} : éditeur, directeur de publication, hébergeur, propriété intellectuelle.`}
      miseAJour={editeur.miseAJourLegale}
    >
      <Section titre="Éditeur du site">
        <p>
          Le site <strong>{domaine}</strong> est édité par :
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
        <p>
          L'application mobile {app.nom}, présentée sur ce site, est développée par le même éditeur et
          n'est pas encore publiée sur les stores.
        </p>
      </Section>

      <Section titre="Hébergement">
        <p>
          Le site est hébergé par <strong>{hebergeur.nom}</strong>, {hebergeur.adresse}, sur son service{' '}
          {hebergeur.service} —{' '}
          <a href={hebergeur.site} target="_blank" rel="noopener noreferrer">{hebergeur.site}</a>.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          Le nom {app.nom}, le logo, les textes, les visuels et l'ensemble des éléments du site sont la
          propriété de l'éditeur ou sont utilisés avec l'autorisation de leurs ayants droit. Toute
          reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable, est
          interdite.
        </p>
        <p>
          Les captures d'écran présentées sur ce site affichent des fonds de carte fournis par Mapbox et des
          données cartographiques issues d'OpenStreetMap, © les contributeurs d'OpenStreetMap, sous licence
          ODbL.
        </p>
      </Section>

      <Section titre="Données personnelles et cookies">
        <p>
          Ce site est entièrement statique : il ne dépose aucun cookie, n'utilise aucun outil de mesure
          d'audience et ne collecte aucune donnée personnelle. Le détail figure dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Section>

      <Section titre="Droit applicable">
        <p>
          Le site est soumis au droit français. En cas de litige et à défaut de solution amiable, les
          tribunaux français seront seuls compétents. Voir aussi les{' '}
          <Link to="/cgu">conditions d'utilisation</Link>.
        </p>
      </Section>
    </LegalLayout>
  )
}
