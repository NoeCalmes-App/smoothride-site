import { app } from '../config/site'

/**
 * LE SIGNE — copié de la maquette, jamais redessiné.
 *
 * Une tuile jade arrondie à 22,37 % (le masque d'icône iOS) et le tracé du
 * dos-d'âne : la route entre par une bosse et repart plate. Même tracé, même
 * échelle (74 %) que l'icône livrée aux stores — c'est littéralement la même
 * image. Les couleurs sont celles de la tuile d'icône : elles ne suivent pas
 * l'ambiance, parce qu'une icône d'app est un objet, pas un texte.
 */
const GLYPHE = 'M2.5 25 C2.5 12 14.5 12 14.5 25 L37.5 25'

export function Mark({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="8.95" fill="#3FE0AC" />
      <g transform="translate(5.2 5.2) scale(0.74)">
        <path d={GLYPHE} stroke="#04231A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

/** Le signe et le nom, côte à côte — l'en-tête et le pied de page. */
export function Logotype({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={size} />
      <span className="cale text-[1.2rem] font-extrabold tracking-[-0.03em]">{app.nom}</span>
    </span>
  )
}
