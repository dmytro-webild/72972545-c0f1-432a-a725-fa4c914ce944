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

        <div id="contact" data-section="contact" className="pt-24">
          <ContactCTA
            tag="Besuchen Sie uns"
            title="Kontakt & Öffnungszeiten"
            description="Wir freuen uns auf Ihren Besuch in der Otto Glöckel Straße 1, 2514 Traiskirchen. Unsere Öffnungszeiten sind Montag bis Freitag von 08:30 bis 19:30 Uhr und Samstag bis 17:00. Kontaktieren Sie uns gerne telefonisch unter 02252/521031 oder 0664/6370015 oder per E-Mail unter support.austrotel@hotmail.com."
            buttons={[
              { text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" },
              { text: "Route planen", href: "https://maps.app.goo.gl/qNRZmzXdfFwAxcFP8" }
            ]}
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={true}
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