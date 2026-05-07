"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ShieldCheck, Smartphone, Wrench } from "lucide-react";

export default function FeaturesPage() {
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
              { name: "Funktionen", id: "/features" },
              { name: "Bewertungen", id: "/testimonials" },
              { name: "FAQ", id: "/faq" },
              { name: "Kontakt", id: "/contact" },
              { name: "Datenschutz", id: "/privacy" },
            ]}
            button={{ text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }}
          />

        <div id="features" data-section="features" className="pt-24">
          <FeatureHoverPattern
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            tag="Unsere Kompetenzen"
            features={[
              { icon: Wrench, title: "Fachgerechte Reparaturen", description: "Display-, Software- und Hardware-Reparaturen durch erfahrene Profis seit 25 Jahren." },
              { icon: Smartphone, title: "Neuste Geräte", description: "Große Auswahl an aktuellen Smartphones und passendem Zubehör bei Ihrem vertrauten Partner." },
              { icon: ShieldCheck, title: "Transparente Preise", description: "Ehrliche und faire Kostenaufstellung ohne versteckte Gebühren seit zwei Jahrzehnten." },
            ]}
            title="Warum Austro-Tel?"
            description="Seit 25 Jahren stehen wir für Qualität. Mit über 250+ Bewertungen und 4,8 Sternen sind wir Ihr vertrauenswürdiger Ansprechpartner in Traiskirchen."
          />
        </div>

        <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
                { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }, { label: "Datenschutz", href: "/privacy" }] },
                { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/services" }, { label: "Verkauf", href: "/services" }] },
            ]}
            copyrightText="© 2024 Austro-Tel Handyshop Traiskirchen."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}