import { PhoneFrame } from './PhoneFrame'
import compare from '../assets/screens/compare.webp'
import homeMap from '../assets/screens/home-map.webp'
import report from '../assets/screens/report.webp'

/**
 * « Découvre l'app » : TROIS écrans, dans l'ordre du parcours (la comparaison
 * d'abord, parce que c'est elle qui porte la valeur) et jamais celui du hero.
 * Défilement horizontal avec accroche sur téléphone, les trois côte à côte sur
 * grand écran.
 *
 * ⚠️ LES LÉGENDES DISENT CE QUI EST À L'ÉCRAN, PAS CE QU'ON AIMERAIT QU'IL
 * DISE. Les trois anciennes se contentaient de nommer l'écran (« L'écran qui
 * porte toute la valeur », « Envoyé sans quitter la route ») : le visiteur
 * lisait une promesse et devait deviner tout seul le chiffre qui la prouve,
 * juste au-dessus. Maintenant chacune reprend ce que la capture montre — deux
 * minutes contre six secousses, une question à un appui — et se vérifie en
 * regardant l'image. Si la capture change, la légende change avec elle.
 *
 * Chaque <li> est un CONTENEUR (container-type) : le téléphone prend sa
 * largeur en `cqw`. Un conteneur ne tire plus sa largeur de son contenu, donc
 * le <li> porte la sienne explicitement sur téléphone (236 px) — sans ça, les
 * cartes s'écrasaient à zéro et se superposaient.
 */
const ecrans = [
  { src: compare, titre: 'Comparaison', sous: 'Deux minutes de plus, six secousses en moins' },
  { src: homeMap, titre: 'Carte', sous: 'Tout ce qui t’attend, avant de partir' },
  { src: report, titre: 'Signalement', sous: 'Une question, un appui, tu restes sur la route' },
]

export function Screenshots() {
  return (
    <section className="bg-bg-deep" id="decouvrir">
      <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <div className="max-w-2xl">
          <p className="cale text-[13px] font-bold uppercase tracking-[0.12em] text-jade">Découvre l'app</p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance md:text-[2.6rem]">
            Trois écrans, du premier trajet au dernier dos-d'âne évité.
          </h2>
        </div>
      </div>
      {/* Le padding latéral est porté par la liste elle-même, pour que le
          défilement aille jusqu'au bord de l'écran sur téléphone. */}
      <ul className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-16 pt-10 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-8 md:pb-24 md:pt-14 lg:px-24">
        {ecrans.map(({ src, titre, sous }) => (
          <li key={titre} className="w-[min(236px,64vw)] shrink-0 snap-center [container-type:inline-size] md:w-auto md:shrink">
            <PhoneFrame src={src} variante="galerie" alt={`${titre} : ${sous}`} />
            <h3 className="cale mt-4 text-[15px] font-extrabold">{titre}</h3>
            <p className="text-[13px] text-ink-2">{sous}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
