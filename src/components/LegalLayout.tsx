import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Header } from './Header'
import { Footer } from './Footer'
import { usePageMeta } from '../lib/usePageMeta'

/**
 * La mise en page des pages légales et du support : un titre, une date, des
 * sections. Une seule h1 par page, un retour à l'accueil en haut et en bas.
 */
export function LegalLayout({
  titre,
  description,
  miseAJour,
  intro,
  children,
}: {
  titre: string
  description: string
  miseAJour?: string
  intro?: ReactNode
  children: ReactNode
}) {
  usePageMeta(titre, description)
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[14px] font-semibold leading-none text-ink-2 hover:text-ink">
          <ArrowLeft size={16} /> <span className="cale">Retour à l'accueil</span>
        </Link>
        <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance md:text-[2.6rem]">{titre}</h1>
        {miseAJour && <p className="cale mt-3 text-[13px] text-ink-3">Dernière mise à jour : {miseAJour}</p>}
        {intro && <div className="mt-6 text-[16px] leading-relaxed text-ink-2">{intro}</div>}
        <div className="mt-10 space-y-10">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export function Section({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[1.25rem] font-extrabold leading-tight tracking-[-0.02em] md:text-[1.4rem]">{titre}</h2>
      <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-ink-2 [&_strong]:font-bold [&_strong]:text-ink [&_a]:font-semibold [&_a]:text-ink [&_a]:underline-offset-2 hover:[&_a]:underline">
        {children}
      </div>
    </section>
  )
}

export function Liste({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  )
}

/**
 * Ce que le cahier des charges ne dit pas encore. VISIBLE, en jaune : un trou
 * qu'on voit se comble ; un trou discret finit en ligne.
 */
export function ACompleter({ children }: { children: ReactNode }) {
  return <mark className="a-completer">À compléter : {children}</mark>
}
