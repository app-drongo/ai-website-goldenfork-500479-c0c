// Abouthomepage Component
// Generated: 2025-08-25T19:34:59.469Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ChefHat, 
  Users, 
  Award, 
  Wine,
  ArrowRight,
  Quote,
  Star,
  Clock,
  Heart,
  MapPin
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: ChefHat,
      title: "Culinary Excellence",
      description: "Our master chef brings 25 years of Italian culinary tradition, creating dishes that honor authentic flavors while embracing modern techniques."
    },
    {
      icon: Wine,
      title: "Curated Wine Selection",
      description: "Our sommelier has carefully selected over 300 wines from Italy's finest regions, perfectly paired with our seasonal menu offerings."
    },
    {
      icon: Heart,
      title: "Hospitality First",
      description: "Every guest is treated like family. Our attentive service and warm atmosphere create memorable dining experiences for every occasion."
    },
    {
      icon: MapPin,
      title: "Chicago's Heart",
      description: "Located in downtown Chicago, we're proud to be part of this vibrant culinary scene, serving discerning diners since 2015."
    }
  ]

  const stats = [
    { value: "2015", label: "Established", icon: Award },
    { value: "10K+", label: "Happy Guests", icon: Users },
    { value: "300+", label: "Wine Selection", icon: Wine },
    { value: "4.9★", label: "Average Rating", icon: Star }
  ]

  const team = [
    {
      name: "Marco Benedetti",
      role: "Executive Chef",
      image: "MB",
      bio: "Trained in Milan and Rome, Marco brings authentic Italian techniques to Chicago's fine dining scene."
    },
    {
      name: "Isabella Romano",
      role: "Head Sommelier", 
      image: "IR",
      bio: "Wine expert with certifications from Italy's top wine regions. Curates our award-winning wine program."
    },
    {
      name: "Antonio Rossi",
      role: "Restaurant Manager",
      image: "AR",
      bio: "Hospitality veteran ensuring every guest receives exceptional service and attention to detail."
    },
    {
      name: "Sofia Conti",
      role: "Pastry Chef",
      image: "SC",
      bio: "Creates exquisite desserts using traditional Italian recipes passed down through generations."
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
            Bringing Authentic Italy to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Downtown Chicago
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Golden Fork represents a passion for authentic Italian cuisine, exceptional wines, 
            and the warm hospitality that makes every meal a celebration.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Culinary Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by Chef Marco Benedetti, The Golden Fork was born from a dream to 
                bring the authentic flavors of Italy to Chicago's sophisticated dining scene.
              </p>
              <p>
                After training in Milan's finest kitchens and working alongside Michelin-starred chefs, 
                Marco wanted to create a place where traditional Italian recipes meet modern culinary artistry.
              </p>
              <p>
                Today, we're proud to serve Chicago's most discerning diners, offering an intimate 
                fine dining experience that transports guests to the heart of Italy with every bite.
              </p>
            </div>
            <Button className="group">
              Meet Our Chef
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
                      "Every dish tells a story of Italy's rich culinary heritage, crafted with love and respect for tradition."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Marco Benedetti, Executive Chef</cite>
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
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that guide our culinary philosophy and commitment to exceptional dining.
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
            <h3 className="text-3xl font-bold mb-4">Our Culinary Team</h3>
            <p className="text-muted-foreground">
              Meet the passionate professionals who create exceptional dining experiences every night.
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
              View Full Team
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
                "The Golden Fork delivers an authentic Italian experience that rivals the best restaurants in Rome. 
                Every visit feels like a special occasion."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-semibold">James Mitchell</div>
                  <div className="text-sm text-muted-foreground">Chicago Tribune Food Critic</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}