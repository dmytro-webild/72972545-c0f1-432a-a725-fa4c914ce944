"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ContactPage() {
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
            brandName="Austrotel Traiskirchen"
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

        <div id="contact" data-section="contact" className="pt-24">
          <ContactCTA
            tag="Standort"
            title="Besuchen Sie uns in Traiskirchen"
            description="Wir finden uns in der Otto Glöckel Straße 1, 2514 Traiskirchen. Ihr langjähriger Partner für alle Handyfragen."
            buttons={[
              { text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" },
              { text: "Route planen", href: "https://maps.app.goo.gl/qNRZmzXdfFwAxcFP8" }
            ]}
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={true}
          />
        </div>

        <FooterBaseReveal
            logoText="Austrotel Traiskirchen"
            columns={[
                { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }] },
                { title: "Service", items: [{ label: "Reparaturen", href: "/services" }, { label: "Anfahrt", href: "/contact" }] },
            ]}
            copyrightText="© 2025 Austrotel Traiskirchen."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
