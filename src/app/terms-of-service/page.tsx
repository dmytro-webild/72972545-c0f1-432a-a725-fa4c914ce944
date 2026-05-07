"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import LegalSection from '@/components/legal/LegalSection';

export default function TermsOfServicePage() {
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
              { name: "AGB", id: "/terms-of-service" },
            ]}
          />

        <div className="pt-24">
          <LegalSection
            layout="page"
            title="Allgemeine Geschäftsbedingungen"
            sections={[
              { heading: "1. Geltungsbereich", content: { type: "paragraph", text: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Reparatur- und Verkaufsdienstleistungen des Austro-Tel Handyshops in Traiskirchen." } },
              { heading: "2. Reparaturaufträge", content: { type: "paragraph", text: "Reparaturen werden fachgerecht nach bestem Wissen und Gewissen durchgeführt. Für Datenverluste übernehmen wir keine Haftung." } },
              { heading: "3. Gewährleistung", content: { type: "paragraph", text: "Wir gewähren Garantie auf unsere Reparaturen und die verbauten Original- oder hochwertigen Ersatzteile gemäß den gesetzlichen Bestimmungen." } },
              { heading: "4. Zahlungsbedingungen", content: { type: "paragraph", text: "Die Zahlung ist bei Abholung des Gerätes fällig. Wir akzeptieren Barzahlung sowie gängige Kartenzahlungsmethoden." } }
            ]}
          />
        </div>

        <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
                { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }, { label: "AGB", href: "/terms-of-service" }] },
                { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/services" }, { label: "Verkauf", href: "/services" }] },
            ]}
            copyrightText="© 2025 Austro-Tel Handyshop Traiskirchen."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}