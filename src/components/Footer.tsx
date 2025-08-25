// Footer Component
// Generated: 2025-08-25T19:34:59.469Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Clock,
  Utensils,
  Heart,
  Wine
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Dining",
      links: [
        { name: "Dinner Menu", href: "/menu" },
        { name: "Wine List", href: "/menu#wine" },
        { name: "Chef's Specials", href: "/menu#specials" },
        { name: "Private Dining", href: "/private-dining" },
        { name: "Catering", href: "/catering" },
        { name: "Gift Cards", href: "/gift-cards" }
      ]
    },
    {
      title: "Experience",
      links: [
        { name: "About Chef Marco", href: "/about" },
        { name: "Our Story", href: "/about#story" },
        { name: "Photo Gallery", href: "/gallery" },
        { name: "Events", href: "/events" },
        { name: "Reviews", href: "/reviews" },
        { name: "Awards", href: "/awards" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Reservations", href: "/reservations" },
        { name: "Takeout", href: "/takeout" },
        { name: "Wine Tastings", href: "/wine-tastings" },
        { name: "Cooking Classes", href: "/classes" },
        { name: "Corporate Events", href: "/corporate" },
        { name: "Wedding Parties", href: "/weddings" }
      ]
    },
    {
      title: "Information",
      links: [
        { name: "Hours & Location", href: "/contact" },
        { name: "Parking Info", href: "/parking" },
        { name: "Dress Code", href: "/dress-code" },
        { name: "Allergen Info", href: "/allergens" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/thegoldenfork" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/thegoldenfork" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/thegoldenfork" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/thegoldenfork" }
  ]

  return (
    <footer className="bg-primary text-secondary border-t border-accent/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-12 rounded-lg bg-gradient-to-br from-accent to-secondary/20 flex items-center justify-center">
                  <Utensils className="size-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-secondary">The Golden Fork</span>
                  <span className="text-xs text-secondary/70 font-light tracking-wider">FINE ITALIAN DINING</span>
                </div>
              </Link>
              <p className="text-secondary/80 text-sm leading-relaxed mb-6">
                Experience authentic Italian cuisine in the heart of downtown Chicago. Our award-winning 
                chef brings traditional recipes with a modern twist to create unforgettable dining experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-secondary/80">123 Michigan Avenue, Chicago, IL 60601</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-secondary/80">(312) 555-FORK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-secondary/80">reservations@thegoldenfork.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-accent flex-shrink-0" />
                <div className="text-secondary/80">
                  <div>Tue-Thu: 5:00 PM - 10:00 PM</div>
                  <div>Fri-Sat: 5:00 PM - 11:00 PM</div>
                  <div>Sun: 4:00 PM - 9:00 PM</div>
                  <div className="text-xs mt-1">Closed Mondays</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-secondary flex items-center gap-2">
                <Wine className="size-4 text-accent" />
                Wine & Dine Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-accent/30 rounded-md bg-secondary/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                />
                <Button size="sm" className="px-4 bg-accent hover:bg-accent/90 text-primary">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-secondary/60">
                Get exclusive offers, wine pairing tips, and event invitations.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-secondary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-secondary/70 hover:text-secondary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent/20 bg-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-secondary/70">
              <span>© 2024 The Golden Fork. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-accent fill-current" /> in Chicago
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-secondary/70 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-secondary/10 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-secondary/70 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-accent/10">
            <Link href="/privacy" className="text-xs text-secondary/60 hover:text-secondary/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-secondary/60 hover:text-secondary/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="/health-safety" className="text-xs text-secondary/60 hover:text-secondary/80 transition-colors">
              Health & Safety
            </Link>
            <Link href="/careers" className="text-xs text-secondary/60 hover:text-secondary/80 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}