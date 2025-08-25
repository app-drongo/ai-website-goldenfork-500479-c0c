// Pageheader3 Component
// Generated: 2025-08-25T19:34:59.470Z
// Template: page-header-c001
// Context: Gallery
// Position: pages.4.sections.0

import { Badge } from "@/components/ui/badge"

export default function Pageheader3() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Optional Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Visual Journey
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            A Glimpse Into Our
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Culinary Artistry
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Step inside The Golden Fork and discover the elegant ambiance, exquisite dishes, and refined atmosphere 
            that make every dining experience extraordinary. From our handcrafted pasta to our intimate dining rooms, 
            explore the visual story of Chicago's premier Italian restaurant.
          </p>
        </div>
      </div>
    </section>
  )
}