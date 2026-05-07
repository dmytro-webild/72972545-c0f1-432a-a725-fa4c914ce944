"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
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
        <NavbarLayoutFloatingInline
            brandName="Austro-Tel Handyshoptraiskirchen"
            navItems={[
              { name: "Start", id: "/" },
              { name: "Über uns", id: "/about" },
              { name: "Service", id: "/services" },
              { name: "Bewertungen", id: "/testimonials" },
              { name: "FAQ", id: "/faq" },
              { name: "Kontakt", id: "/contact" },
            ]}
            button={{ text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }}
          />

        <div id="services" data-section="services" className="pt-24">
          <FeatureCardNineteen
            title="Unsere Service-Leistungen"
            description="Seit 25 Jahren Ihr vertrauensvoller Partner für erstklassige Smartphone-Reparaturen und Beratung in Traiskirchen."
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { tag: "Schnell", title: "Display-Reparatur", subtitle: "In unter 60 Minuten", description: "Wir tauschen Ihr defektes Display schnell und fachgerecht aus.", icon: Smartphone },
              { tag: "Profi", title: "Akku-Austausch", subtitle: "Originale Kapazität", description: "Ihr Akku ist schwach? Wir rüsten Ihr Gerät mit neuen Hochleistungsakkus aus.", icon: BatteryCharging },
              { tag: "Technik", title: "Software-Lösungen", subtitle: "Datenrettung & Setup", description: "Probleme mit dem Betriebssystem? Wir retten Ihre Daten und optimieren Ihr Handy.", icon: Wrench },
              { tag: "Sicherheit", title: "Hardware-Check", subtitle: "Umfassend geprüft", description: "Wir analysieren defekte Hardware und bringen Ihr Gerät wieder auf Vordermann.", icon: ShieldCheck },
              { tag: "Audio", title: "Audio-Reparatur", subtitle: "Klarer Klang", description: "Probleme mit Mikrofon oder Lautsprecher? Wir finden die Lösung.", icon: Headphones },
              { tag: "Netz", title: "Konnektivität", subtitle: "WLAN & Empfang", description: "Kein WLAN oder schlechter Empfang? Wir reparieren Ihre Antennen-Komponenten.", icon: Wifi }
            ]}
          />
        </div>

        <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
                { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }] },
                { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/services" }, { label: "Verkauf", href: "/services" }] },
            ]}
            copyrightText="© 2025 Austro-Tel Handyshop Traiskirchen."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}