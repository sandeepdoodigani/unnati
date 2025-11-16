import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/WhatsApp_Image_2025-11-16_at_11.55.01_AM-removebg-preview_1763274485256.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#impact", label: "Impact" },
    { href: "#get-involved", label: "Get Involved" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 -ml-2" data-testid="link-home">
            <img src={logoImage} alt="Unnati Foundation Logo" className="h-14 w-14 object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-lg font-semibold text-foreground leading-tight">Unnati Foundation</span>
              <span className="text-xs text-muted-foreground hidden sm:block leading-tight">Upliftment Through Knowledge</span>
            </div>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-2" data-testid="button-donate-header">
            Donate Now
          </Button>
        </nav>

        <button
          className="md:hidden p-2 hover-elevate rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover-elevate rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2" data-testid="button-donate-mobile">
              Donate Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
