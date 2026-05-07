"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Smartphone, Wrench, ShieldCheck, BatteryCharging, Headphones, Wifi } from "lucide-react";

export default function ServicesPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
              brandName="Austro-Tel Handyshoptraiskirchen"
              navItems={[
                { name: "Start", id: "/" },
                { name: "Über uns", id: "/about" },
                { name: "Service", id: "/services" },
                { name: "Bewertungen", id: "/testimonials" },
                { name: "FAQ", id: "/faq" },
                { name: "Kontakt", id: "/contact" },
                { name: "AGB", id: "/terms-of-service" },
              ]}
              button={{ text: "Kontakt", href: "/contact" }}
            />
        </div>

        <div id="services" data-section="services" className="pt-24">
          <FeatureHoverPattern
            title="Unsere Service-Leistungen"
            description="Seit 25 Jahren Ihr vertrauensvoller Partner für erstklassige Smartphone-Reparaturen und Beratung in Traiskirchen."
            textboxLayout="split"
            useInvertedBackground={false}
            animationType="blur-reveal"
            features={[
              { title: "Display-Reparatur", description: "Wir tauschen Ihr defektes Display schnell und fachgerecht aus.", icon: Smartphone },
              { title: "Akku-Austausch", description: "Ihr Akku ist schwach? Wir rüsten Ihr Gerät mit neuen Hochleistungsakkus aus.", icon: BatteryCharging },
              { title: "Software-Lösungen", description: "Probleme mit dem Betriebssystem? Wir retten Ihre Daten und optimieren Ihr Handy.", icon: Wrench },
              { title: "Hardware-Check", description: "Wir analysieren defekte Hardware und bringen Ihr Gerät wieder auf Vordermann.", icon: ShieldCheck },
              { title: "Audio-Reparatur", description: "Probleme mit Mikrofon oder Lautsprecher? Wir finden die Lösung.", icon: Headphones },
              { title: "Konnektivität", description: "Kein WLAN oder schlechter Empfang? Wir reparieren Ihre Antennen-Komponenten.", icon: Wifi }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
              logoText="Austro-Tel Handyshop"
              columns={[
                  { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }, { label: "AGB", href: "/terms-of-service" }] },
                  { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/services" }, { label: "Verkauf", href: "/services" }] },
              ]}
              copyrightText="© 2025 Austro-Tel Handyshop Traiskirchen."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}