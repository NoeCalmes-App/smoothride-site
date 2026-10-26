import { Link } from 'react-router-dom'
import { editeur } from '../config/site'
import { Credit } from './Credit'
import { Logotype } from './Mark'

const liens = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Confidentialité', path: '/confidentialite' },
  { label: 'CGU', path: '/cgu' },
  { label: 'Support', path: '/support' },
  { label: 'Supprimer mon compte', path: '/supprimer-compte' },
]

/**
 * Le pied de page : les liens, le © de l'éditeur légal et la ligne de
 * réalisation. Plus de phrase d'éditeur avec SIRET et e-mail (demande de Noé
 * du 26/10/2026) : ils sont sur la page Mentions légales, où la loi les
 * demande et où Apple les trouve.
 */
export function Footer() {
  const annee = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link to="/" aria-label="SmoothRide — accueil" className="text-ink">
            <Logotype />
          </Link>
          <nav aria-label="Pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
              {liens.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="cale font-semibold text-ink-2 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-[13px] leading-relaxed">
          <p className="text-ink-3">© {annee} {editeur.nomLegal}. Tous droits réservés.</p>
          <Credit className="mt-1.5" />
        </div>
      </div>
    </footer>
  )
}
