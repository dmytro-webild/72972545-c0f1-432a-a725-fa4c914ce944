"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyPolicyPage() {
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

        <div id="privacy" data-section="privacy" className="pt-24">
          <LegalSection
            layout="page"
            title="Datenschutzerklärung"
            sections={[
                { heading: "Einleitung", content: [{ type: "paragraph", text: "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003)." }] },
                { heading: "Kontakt mit uns", content: [{ type: "paragraph", text: "Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert." }] }
            ]}
          />
        </div>

        <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
                { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }, { label: "Datenschutz", href: "/privacy" }] },
                { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/services" }, { label: "Verkauf", href: "/services" }] },
            ]}
            copyrightText="© 2025 Austro-Tel Handyshop Traiskirchen."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}