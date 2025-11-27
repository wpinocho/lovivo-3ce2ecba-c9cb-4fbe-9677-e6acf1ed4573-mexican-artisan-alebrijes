import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group bg-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border cursor-pointer"
      onClick={() => onViewProducts(collection.id)}
    >
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-4 right-4 bg-accent craft-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
          >
            Explore Collection
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}