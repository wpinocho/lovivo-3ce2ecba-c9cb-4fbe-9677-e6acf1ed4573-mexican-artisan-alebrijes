import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard";
import type { Product } from "@/lib/supabase";

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Este componente solo maneja la presentación del ProductCard.
 * Toda la lógica viene del HeadlessProductCard.
 * 
 * PUEDES MODIFICAR LIBREMENTE:
 * - Colores, temas, estilos
 * - Textos e idioma
 * - Layout y estructura visual
 * - Animaciones y efectos
 * - Agregar features visuales (hover effects, etc.)
 */

interface ProductCardUIProps {
  product: Product;
}
export const ProductCardUI = ({
  product
}: ProductCardUIProps) => {
  return <HeadlessProductCard product={product}>
      {logic => <Card className="group bg-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-muted overflow-hidden relative">
                {logic.matchingVariant?.image || logic.product.images && logic.product.images.length > 0 ? <img src={(logic.matchingVariant?.image as any) || logic.product.images![0]} alt={logic.product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> : <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && <span className="bg-destructive text-destructive-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      -{logic.discountPercentage}%
                    </span>}
                  {logic.product.featured && <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg" style={{
                letterSpacing: "0px"
              }}>Featured!!</span>}
                  {!logic.inStock && <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      Out of stock
                    </span>}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>}
              </div>
            </Link>

            {logic.hasVariants && logic.options && <div className="mb-3 space-y-2">
                {logic.options.map(opt => <div key={opt.id}>
                    <div className="text-xs font-medium text-black mb-1">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map(val => {
                const isSelected = logic.selected[opt.name] === val;
                const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined;
                if (swatch) {
                  return <button key={val} type="button" onClick={() => logic.handleOptionChange(opt.name, val)} title={`${opt.name}: ${val}`} className={`h-6 w-6 rounded-full border ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`} style={{
                    backgroundColor: swatch,
                    borderColor: '#e5e7eb'
                  }} aria-label={`${opt.name}: ${val}`} />;
                }
                return <button key={val} type="button" onClick={() => logic.handleOptionChange(opt.name, val)} className={`border rounded px-2 py-1 text-xs font-medium ${isSelected ? 'border-black bg-black text-white' : logic.selected[opt.name] && !isSelected ? 'border-gray-300 bg-white text-gray-700 opacity-40' : 'border-gray-300 bg-white text-gray-700'}`} aria-pressed={isSelected} aria-label={`${opt.name}: ${val}`} title={`${opt.name}: ${val}`}>
                            {val}
                          </button>;
              })}
                    </div>
                  </div>)}
              </div>}

            <div className="px-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && <span className="text-muted-foreground text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>}
                </div>
                <Button size="lg" onClick={() => {
              logic.onAddToCartSuccess();
              logic.handleAddToCart();
            }} disabled={!logic.canAddToCart} className="font-semibold">
                  {logic.inStock ? 'Add to Cart' : 'Out of stock'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>}
    </HeadlessProductCard>;
};