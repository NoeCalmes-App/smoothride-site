import { History, Map, Navigation, RefreshCw, Route, TriangleAlert } from 'lucide-react'

/**
 * Ce que l'app fait — et rien de plus. Chaque carte correspond à un écran de
 * la maquette (carte, comparaison, navigation, signalement, recalcul,
 * historique) : le site ne promet que ce que le devis vend. Aucun prix,
 * aucune offre : ça change, et pas ici.
 */
const fonctionnalites = [
  {
    icone: Map,
    titre: "Les dos-d'âne autour de toi",
    texte: "Une vraie carte, avec les dos-d'âne connus dans ton quartier et sur ta route. Les données viennent d'OpenStreetMap et des signalements des conducteurs.",
  },
  {
    icone: Route,
    titre: 'Deux trajets, un choix clair',
    texte: "Le plus rapide et le plus doux, côte à côte : le nombre de dos-d'âne sur chacun, et les minutes de différence. Tu choisis en connaissance de cause.",
  },
  {
    icone: Navigation,
    titre: 'Une navigation qui se lit au volant',
    texte: "Prochaine instruction, temps restant, heure d'arrivée et distance : tout se lit en une fraction de seconde, sans quitter la route des yeux.",
  },
  {
    icone: TriangleAlert,
    titre: 'Un signalement en un appui',
    texte: "Un dos-d'âne que l'app ne connaît pas ? Un seul geste, sans quitter la route. Il devient visible pour tous après confirmation par d'autres conducteurs.",
  },
  {
    icone: RefreshCw,
    titre: 'Un recalcul chiffré',
    texte: "Si un dos-d'âne surgit sur ton itinéraire, SmoothRide te propose un détour, avec les minutes en plus et les secousses en moins. À toi de décider.",
  },
  {
    icone: History,
    titre: 'Ce que tu as évité',
    texte: "Ton historique compte les dos-d'âne évités, trajet par trajet. Il reste sur ton téléphone : il n'est ni envoyé, ni partagé.",
  },
]

export function Features() {
  return (
    <section className="bg-bg" id="fonctionnalites">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="cale text-[13px] font-bold uppercase tracking-[0.12em] text-jade">Fonctionnalités</p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance md:text-[2.6rem]">
            Moins de secousses, pas plus de détours que tu ne veux.
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
          {fonctionnalites.map(({ icone: Icone, titre, texte }) => (
            <li key={titre} className="rounded-card border border-line bg-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-jade text-jade-ink" aria-hidden="true">
                <Icone size={22} strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-[18px] font-extrabold leading-tight tracking-[-0.02em]">{titre}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
