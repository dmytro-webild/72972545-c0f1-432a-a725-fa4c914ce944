"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

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
              button={{ text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }}
            />
        </div>

        <div id="terms" data-section="terms" className="pt-24 pb-12">
          <LegalSection 
            layout="page"
            title="Allgemeine Geschäftsbedingungen"
            sections={[
                {
                    heading: "1. Geltungsbereich",                    
                    content: { type: "paragraph", text: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Reparaturen und Verkäufe durch Austro-Tel Handyshop Traiskirchen." }
                },
                {
                    heading: "2. Reparaturaufträge",                    
                    content: { type: "paragraph", text: "Reparaturen werden fachgerecht ausgeführt. Die Garantie auf die ausgeführten Arbeiten beträgt gemäß gesetzlicher Bestimmungen 6 Monate." }
                }
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
              copyrightText="© 2024 Austro-Tel Handyshop Traiskirchen."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}