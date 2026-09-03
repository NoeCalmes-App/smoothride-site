import { useEffect } from 'react'
import { app } from '../config/site'

/**
 * Le titre et la description de la page courante.
 *
 * Le site est une application à une seule page : sans ça, toutes les pages
 * porteraient le titre de l'accueil dans l'onglet, l'historique et les
 * résultats de recherche. Chaque page appelle ce hook avec son propre titre.
 */
export function usePageMeta(titre: string | null, description?: string) {
  useEffect(() => {
    document.title = titre ? `${titre} — ${app.nom}` : `${app.nom} — ${app.accroche.join(' ')}`
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? app.metaDescription
    window.scrollTo({ top: 0 })
  }, [titre, description])
}
