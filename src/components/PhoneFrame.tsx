/**
 * Un écran de l'app dans son téléphone.
 *
 * Le cadre est dessiné en CSS (classe `.phone`, index.css) : bordure et arrondi
 * restent nets sur un écran Retina comme sur un 1×. Seul l'écran est une
 * image — capturée à ×3 sur la maquette, sans le cadre. La taille se nomme
 * par son emploi (`hero`, `galerie`), jamais en pixels dans un composant.
 * Toutes chargées tout de suite : cinq images de 60 à 90 Ko, c'est le cœur
 * de la page, pas un poids à différer.
 */
export function PhoneFrame({
  src,
  alt,
  variante,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  variante: 'hero' | 'galerie'
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`phone phone-${variante} ${className}`}>
      <img
        src={src}
        width={954}
        height={2139}
        alt={alt}
        loading="eager"
        fetchPriority={priority ? 'high' : undefined}
      />
    </div>
  )
}
