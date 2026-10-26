import { realisation } from '../config/site'

/**
 * « Application et site web développés par Noé Calmes », vers noecalmes.fr :
 * en gris clair, sans soulignement au repos, pour ne pas rivaliser avec les
 * liens du site. Au pied de page et en bas des mentions légales.
 */
export function Credit({ className = '' }: { className?: string }) {
  return (
    <p className={`text-ink-3 ${className}`}>
      <a
        href={realisation.site}
        target="_blank"
        rel="noopener"
        className="underline-offset-2 transition-colors hover:text-ink-2 hover:underline"
      >
        {realisation.texte}
      </a>
    </p>
  )
}
