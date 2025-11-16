import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import logoImage from "@assets/WhatsApp_Image_2025-11-16_at_11.55.01_AM-removebg-preview_1763274485256.png";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Get Involved", href: "#get-involved" },
  ];

  const programs = [
    "Education & Digital Literacy",
    "Research & Innovation",
    "Skill Development",
    "Women Empowerment"
  ];

  return (
    <footer className="bg-card/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Unnati Foundation Logo" className="h-14 w-14 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-lg font-semibold leading-tight">Unnati Foundation</span>
                <span className="text-xs text-muted-foreground leading-tight">Upliftment Through Knowledge</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering communities through education, research, innovation, and sustainable development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <a 
                    href="#programs" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-program-${program.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">Plot No. 62, Kothapet, Hyderabad – 500102</span>
                  <span className="block mt-1 text-xs font-medium text-foreground">Registration No: 165/2025</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                <a href="mailto:info@unnatifoundationindia.org" className="text-primary hover:underline" data-testid="link-email-footer">
                  info@unnatifoundationindia.org
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                <a href="tel:+918500941041" className="text-primary hover:underline" data-testid="link-phone-footer">
                  +91 8500941041
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Unnati Foundation India. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Empowering Communities | Advancing Knowledge | Building Futures
          </p>
        </div>
      </div>
    </footer>
  );
}
