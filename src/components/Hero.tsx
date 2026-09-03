import { app } from '../config/site'
import { StoreButtons } from './StoreButtons'
import { PhoneFrame } from './PhoneFrame'
import onboarding from '../assets/screens/onboarding.webp'

/**
 * L'accueil : la promesse, les deux boutons, et le PREMIER écran de l'app —
 * celui qu'on voit en l'ouvrant — dans son téléphone. La galerie, plus bas,
 * montre les suivants ; jamais celui-ci une seconde fois.
 */
export function Hero() {
  return (
    <section className="bg-bg text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3.5 py-1.5 text-[13px] font-semibold leading-none text-ink-2">
            <span className="h-1.5 w-1.5 rounded-full bg-jade" aria-hidden="true" />
            <span className="cale">Application mobile<span className="mx-1.5 text-ink-3" aria-hidden="true">·</span>{app.plateformes}</span>
          </p>
          <h1 className="promesse text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.032em] text-balance md:text-[4.2rem]">
            {app.accroche[0]}
            <em className="text-jade">{app.accroche[1]}</em>
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-2 md:text-[19px]">{app.description}</p>
          <StoreButtons className="mt-8" />
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-x-6 top-10 h-[80%] rounded-full bg-jade/15 blur-3xl" aria-hidden="true" />
          <PhoneFrame
            src={onboarding}
            variante="hero"
            className="relative"
            alt="Écran d'accueil de SmoothRide : deux routes comparées, le nombre de dos-d'âne sur chacune et les minutes de différence"
            priority
          />
        </div>
      </div>
    </section>
  )
}
