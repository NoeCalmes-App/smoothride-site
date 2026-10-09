import { app, stores } from '../config/site'
import { StoreButtons } from './StoreButtons'

/** La phrase suit les liens de site.ts : elle ne promet jamais un store absent. */
function disponibilite(nom: string) {
  if (stores.appStore && stores.googlePlay) return `${nom} est disponible sur l'App Store et Google Play.`
  if (stores.googlePlay) return `${nom} est disponible sur Google Play, et arrive bientôt sur l'App Store.`
  if (stores.appStore) return `${nom} est disponible sur l'App Store, et arrive bientôt sur Google Play.`
  return `${nom} arrive sur l'App Store et Google Play.`
}

export function Cta() {
  return (
    <section className="bg-bg text-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance md:text-[2.8rem]">
          Prêt à rouler plus doux ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-ink-2 md:text-[18px]">
          {disponibilite(app.nom)}
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  )
}
