import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { LegalLayout, Section, Liste } from '../components/LegalLayout'
import { app, contact } from '../config/site'

/**
 * La page de support : celle que l'App Store et Google Play affichent en
 * lien. Un e-mail, un délai, et les réponses aux questions qu'on se pose
 * avant d'écrire.
 */
export default function Support() {
  return (
    <LegalLayout
      titre="Support"
      description={`Besoin d'aide avec ${app.nom} ? Écris-nous à ${contact.email} — réponse sous ${contact.delaiReponse}.`}
      intro={
        <p>
          Un problème avec l'application, une question sur ton abonnement, un dos-d'âne qui n'existe plus ? On est là.
        </p>
      }
    >
      <div className="rounded-card border border-line bg-surface-2 p-6 md:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-jade text-jade-ink" aria-hidden="true">
          <Mail size={22} strokeWidth={2.2} />
        </span>
        <h2 className="mt-4 text-[1.25rem] font-extrabold tracking-[-0.02em]">Écris-nous</h2>
        <p className="mt-2 text-ink-2">
          Décris ce qui se passe, avec ton modèle de téléphone si c'est un bug, et on te répond généralement sous {contact.delaiReponse}.
        </p>
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent(`Support ${app.nom}`)}`}
          className="cale mt-5 inline-flex h-12 items-center gap-2 rounded-pill bg-jade px-6 text-[15px] font-extrabold text-jade-ink"
        >
          {contact.email}
        </a>
      </div>

      <Section titre="Questions fréquentes">
        <Liste
          items={[
            <><strong>Pourquoi l'app demande ma position ?</strong> Sans elle, {app.nom} ne peut ni afficher les dos-d'âne autour de toi, ni calculer ton trajet, ni te guider. Elle n'est utilisée que pendant que l'app est ouverte, jamais en arrière-plan.</>,
            <><strong>J'ai refusé la position, l'app ne fait plus rien.</strong> Elle reste consultable, mais pas de trajet possible. Pour la réactiver : Réglages de ton téléphone › {app.nom} › Position.</>,
            <><strong>Combien ça coûte ?</strong> Le prix et ce qui est compris sont affichés dans l'app avant toute souscription, et le paiement passe par l'App Store ou Google Play, sans engagement.</>,
            <><strong>Comment résilier ?</strong> Depuis les réglages de ton compte Apple ou Google (Abonnements), à tout moment. L'abonnement reste actif jusqu'à la fin de la période déjà payée.</>,
            <><strong>Un dos-d'âne a disparu, ou l'app en a raté un.</strong> Signale-le depuis l'app, en un appui pendant le trajet. Après confirmation par d'autres conducteurs, la base est mise à jour pour tout le monde.</>,
            <><strong>Pas de réseau.</strong> L'app reste consultable, mais le calcul d'un nouveau trajet demande une connexion.</>,
            <><strong>Supprimer mon compte.</strong> La procédure est sur la page <Link to="/supprimer-compte">Supprimer mon compte</Link>.</>,
          ]}
        />
      </Section>
    </LegalLayout>
  )
}
