import { useSettings } from '@/contexts/SettingsContext'
import { getLogoUrl } from '@/lib/logo-utils'

export const BrandLogoLeft = () => {
  const { logos } = useSettings()

  if (!logos) {
    return (
      <a href="/" aria-label="Home">
        <h1 className="text-2xl font-bold text-foreground">Oaxacan Alebrijes</h1>
      </a>
    )
  }

  const mainLogoUrl = getLogoUrl(logos, 'main_logo')

  if (!mainLogoUrl) {
    return (
      <a href="/" aria-label="Home">
        <h1 className="text-2xl font-bold text-foreground">Oaxacan Alebrijes</h1>
      </a>
    )
  }

  return (
    <a href="/" aria-label="Home">
      <img 
        src={mainLogoUrl} 
        alt="Oaxacan Alebrijes"
        className="h-10 w-auto object-contain" 
      />
    </a>
  )
}