"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function AboutPage() {
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
              { name: "Über uns", id: "#about" },
              { name: "Service", id: "/#services" },
              { name: "Bewertungen", id: "/#testimonials" },
              { name: "FAQ", id: "/#faq" },
              { name: "Kontakt", id: "/#contact" },
            ]}
            button={{ text: "Kontakt", href: "/#contact" }}
          />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
              { type: "text", content: "Über Austro-Tel Handyshop: Ihre Expertise in Traiskirchen" }
            ]}
            className="py-20"
          />
          <div className="px-[10vw] pb-20">
            <p className="text-lg leading-relaxed">
              Austro-Tel ist mehr als nur ein Handyshop. Seit unserer Gründung in Traiskirchen haben wir uns darauf konzentriert, unseren Kunden hochwertige Technik und erstklassigen Service zu bieten. 
              Unser Team besteht aus zertifizierten Experten, die sich leidenschaftlich um jedes Anliegen kümmern – sei es ein gesprungenes Display, eine komplexe Software-Reparatur oder die Beratung zum perfekten neuen Smartphone.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Qualität steht für uns an erster Stelle. Durch unsere lokale Präsenz im Herzen von Traiskirchen garantieren wir Ihnen kurze Wege und eine persönliche Betreuung, die Sie im Internet vergeblich suchen. Wir sind stolz darauf, die erste Adresse für Technik-Begeisterte und Menschen, die ihre Geräte in vertrauensvolle Hände legen möchten, zu sein.
            </p>
          </div>
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={true}
            background={{ variant: "animated-grid" }}
            text="Besuchen Sie uns in der Otto Glöckel-Straße 1, 2514 Traiskirchen. Wir freuen uns auf Ihren Besuch!"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
              { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/#contact" }] },
              { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/#services" }, { label: "Verkauf", href: "/#services" }] },
            ]}
            copyrightText="© 2024 Austro-Tel Handyshop Traiskirchen."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
