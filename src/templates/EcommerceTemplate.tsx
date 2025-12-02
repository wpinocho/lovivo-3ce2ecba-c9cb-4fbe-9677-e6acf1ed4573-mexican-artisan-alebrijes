import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { Input } from '@/components/ui/input'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-background py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-background">Oaxacan Alebrijes</h3>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Authentic handcrafted alebrijes from master artisans in Oaxaca, Mexico. 
              Each purchase supports traditional craftsmanship and sustainable practices.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Shop</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-background/70 hover:text-background transition-colors"
              >
                All Alebrijes
              </Link>
              <Link 
                to="/blog" 
                className="block text-background/70 hover:text-background transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-background">About</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Artisan Partners
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Fair Trade
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Sustainability
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">
            &copy; {new Date().getFullYear()} Oaxacan Alebrijes. Handcrafted with ❤️ in Mexico.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}