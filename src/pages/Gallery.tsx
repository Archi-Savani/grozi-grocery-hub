import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { galleryImages } from "@/data/groceryData";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(galleryImages.map(image => image.category))];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">Gallery</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fresh & Beautiful
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our carefully curated selection of fresh produce, 
            artisan products, and premium groceries that make Grozi your trusted food destination.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category: string) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden cursor-pointer border-0 shadow-card hover:shadow-hover transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.category}
                      </Badge>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl p-0 border-0">
                  <div className="relative">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <Badge className="mb-2 bg-accent text-accent-foreground">
                        {image.category}
                      </Badge>
                      <h3 className="text-white text-xl font-semibold">{image.alt}</h3>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No images found</h3>
              <p className="text-muted-foreground">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Behind the Scenes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse into our daily operations, from farm visits to quality control
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-card">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Farm Partnerships</h3>
              <p className="text-muted-foreground">We work directly with local farmers to source the freshest produce</p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-card">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Control</h3>
              <p className="text-muted-foreground">Every product goes through rigorous quality checks before reaching you</p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-card">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Careful Packaging</h3>
              <p className="text-muted-foreground">Our team ensures every order is packed with care and attention</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Experience the Quality
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to taste the difference? Browse our full selection and discover why 
            thousands of customers choose Grozi for their fresh grocery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary px-8 py-6 text-lg">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;