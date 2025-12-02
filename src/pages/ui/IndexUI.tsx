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
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/3ce2ecba-c9cb-4fbe-9677-e6acf1ed4573/artisan-painting-poster.jpg"
        >
          <source src="/videos/artisan-painting.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-purple-950/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Authentic Mexican Artisanship
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Handcrafted
              <br />
              <span className="text-accent">Oaxacan</span>
              <br />
              Alebrijes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-lg mb-8">
              Each piece is a unique masterwork, hand-carved and painted by skilled artisans from Oaxaca. 
              Own a piece of Mexican heritage while supporting traditional craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop Collection
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-8 backdrop-blur-sm"
              >
                Our Story
              </Button>
            </div>
            
            {/* Handcrafted Badge */}
            <div className="mt-12 inline-block bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-sm text-white/80">Handcrafted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Fair Trade Certified</h3>
              <p className="text-muted-foreground">
                Artisans receive fair compensation for their exceptional craftsmanship
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Sustainable Materials</h3>
              <p className="text-muted-foreground">
                Crafted from sustainably harvested copal wood and natural pigments
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Community Impact</h3>
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
      <section id="products" className="py-16 bg-background">
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
      <section className="py-20 bg-card/30">
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
              className="flex-1 px-6 py-4 rounded-xl bg-white/95 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
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