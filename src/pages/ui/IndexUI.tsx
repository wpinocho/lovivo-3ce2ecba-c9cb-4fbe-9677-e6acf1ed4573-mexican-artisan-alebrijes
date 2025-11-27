import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Heart, Leaf, Users } from 'lucide-react';

/**
 * EDITABLE UI - IndexUI
 * 
 * Premium Alebrijes Store - Modern, elegant interface for high-end Mexican artisan products
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Authentic Mexican Artisanship
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Handcrafted
                  <br />
                  <span className="text-accent">Oaxacan</span>
                  <br />
                  Alebrijes
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Each piece is a unique masterwork, hand-carved and painted by skilled artisans from Oaxaca. 
                  Own a piece of Mexican heritage while supporting traditional craftsmanship.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                    onClick={() => {
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Shop Collection
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  >
                    Our Story
                  </Button>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="relative animate-float">
                  <img 
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3ce2ecba-c9cb-4fbe-9677-e6acf1ed4573/hero-artisan.jpg"
                    alt="Artisan painting alebrije"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Handcrafted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fair Trade Certified</h3>
              <p className="text-muted-foreground">
                Artisans receive fair compensation for their exceptional craftsmanship
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Sustainable Materials</h3>
              <p className="text-muted-foreground">
                Crafted from sustainably harvested copal wood and natural pigments
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Users className="h-8 w-8 craft-accent" />
              </div>
              <h3 className="text-xl font-bold">Community Impact</h3>
              <p className="text-muted-foreground">
                Supporting artisan families and preserving generations of tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Explore Our Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each alebrije is a unique piece of art, no two are exactly alike
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Featured Alebrijes'
                }
              </h2>
              <p className="text-muted-foreground">
                Museum-quality pieces from master artisans
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                View All
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No alebrijes available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Preserving
                <br />
                <span className="text-primary">Mexican Heritage</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alebrijes are fantastical creatures born from the dreams of Mexican artist Pedro Linares. 
                Each piece carries the spirit of Oaxacan tradition, hand-carved from copal wood and painted 
                with intricate patterns passed down through generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you purchase an alebrije, you're not just acquiring art—you're supporting artisan 
                families, preserving cultural heritage, and contributing to sustainable practices in rural Mexico.
              </p>
              <div className="pt-4">
                <Button size="lg" variant="outline" className="font-semibold">
                  Learn More About Our Mission
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive offers and stories from the artisans
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};