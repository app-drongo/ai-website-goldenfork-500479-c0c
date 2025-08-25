// Aboutabout Component
// Generated: 2025-08-25T19:34:59.470Z
// Template: about-c001
// Context: About
// Position: pages.2.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ChefHat, 
  Users, 
  Award, 
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Clock,
  Heart,
  Utensils
} from "lucide-react"

export default function Aboutabout() {
  const values = [
    {
      icon: ChefHat,
      title: "Culinary Excellence",
      description: "We source the finest ingredients from Italy and local Chicago markets to create authentic dishes that honor traditional Italian cuisine while embracing innovation."
    },
    {
      icon: Utensils,
      title: "Artisanal Craftsmanship",
      description: "Every dish is meticulously prepared by our master chefs, combining time-honored techniques with modern culinary artistry to deliver an unforgettable dining experience."
    },
    {
      icon: Heart,
      title: "Passionate Hospitality",
      description: "Our commitment to exceptional service ensures every guest feels welcomed into our family, creating memorable moments that extend far beyond the meal."
    },
    {
      icon: MapPin,
      title: "Chicago Heritage",
      description: "Proudly serving downtown Chicago for over a decade, we've become an integral part of the city's fine dining landscape while maintaining our Italian roots."
    }
  ]

  const stats = [
    { value: "2012", label: "Established", icon: Award },
    { value: "15K+", label: "Satisfied Guests", icon: Users },
    { value: "4.9★", label: "Average Rating", icon: Star },
    { value: "12+", label: "Years of Excellence", icon: Clock }
  ]

  const team = [
    {
      name: "Chef Marco Benedetti",
      role: "Executive Chef & Owner",
      image: "MB",
      bio: "Born in Tuscany, trained in Milan. 25+ years crafting authentic Italian cuisine with modern flair."
    },
    {
      name: "Isabella Romano",
      role: "Sous Chef", 
      image: "IR",
      bio: "Culinary Institute graduate specializing in Northern Italian cuisine and handmade pasta."
    },
    {
      name: "Antonio Rossi",
      role: "Wine Director",
      image: "AR",
      bio: "Certified sommelier with expertise in Italian wines and perfect food pairings."
    },
    {
      name: "Sofia Martinez",
      role: "General Manager",
      image: "SM",
      bio: "Hospitality veteran ensuring every guest receives impeccable service and attention."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            A Legacy of Italian
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Culinary Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over a decade, The Golden Fork has been Chicago's premier destination for authentic 
            Italian fine dining, where traditional recipes meet contemporary elegance.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">From Tuscany to Chicago</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2012 by Chef Marco Benedetti, The Golden Fork began as a dream to bring 
                the authentic flavors of his Tuscan homeland to the vibrant culinary scene of downtown Chicago.
              </p>
              <p>
                With recipes passed down through generations and a commitment to using only the finest 
                imported and locally-sourced ingredients, we've created a dining experience that transports 
                our guests to the heart of Italy.
              </p>
              <p>
                Today, we're honored to be recognized as one of Chicago's finest Italian restaurants, 
                serving discerning diners who appreciate the artistry of exceptional cuisine and impeccable service.
              </p>
            </div>
            <Button className="group">
              View Our Menu
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every dish tells a story of tradition, passion, and the love we have for authentic Italian cuisine."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Chef Marco Benedetti</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Philosophy</h3>
            <p className="text-muted-foreground">
              The principles that guide our culinary journey and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Culinary Team</h3>
            <p className="text-muted-foreground">
              The passionate professionals who bring authentic Italian flavors to life in every dish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Book Private Chef Experience
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "The Golden Fork delivers an extraordinary dining experience that rivals the finest restaurants in Italy. 
                Every visit feels like a special occasion, with impeccable service and unforgettable flavors."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Williams</div>
                  <div className="text-sm text-muted-foreground">Food Critic, Chicago Tribune</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}