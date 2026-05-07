"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import { ShieldCheck, Smartphone, Wrench } from "lucide-react";

export default function LandingPage() {
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
        </div>

        <div id="hero" data-section="hero">
          <HeroCarouselLogo
            logoText="Austrotel Traiskirchen"
            description="Seit 25 Jahren Ihr zuverlässiger Partner in Traiskirchen für Smartphone-Reparatur, Mobilfunk und Zubehör."
            buttons={[{ text: "Kontakt", href: "/contact" }, { text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }]}
            slides={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-a7jdq3jn.jpg?_wi=1", imageAlt: "Austrotel Shop Ansicht" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-xa8y728e.jpg?_wi=1", imageAlt: "Austrotel Team" }
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <InlineImageSplitTextAbout
            useInvertedBackground={false}
            heading={[
              { type: "text", content: "Über uns – Ihr Fachgeschäft für Kommunikation in der Otto Glöckel Straße 1." }
            ]}
            buttons={[{ text: "Wegbeschreibung", href: "https://maps.app.goo.gl/qNRZmzXdfFwAxcFP8" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureHoverPattern
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            tag="Service & Kompetenz"
            features={[
              { icon: Wrench, title: "Reparaturservice", description: "Fachgerechte Reparatur Ihres Geräts durch erfahrene Techniker." },
              { icon: Smartphone, title: "Mobilfunk & Zubehör", description: "Breite Auswahl an Produkten und Tarifen direkt vor Ort in Traiskirchen." },
              { icon: ShieldCheck, title: "Tradition & Vertrauen", description: "25 Jahre Erfahrung in der Branche sprechen für höchste Kundenzufriedenheit." },
            ]}
            title="Was uns auszeichnet"
            description="Austrotel Traiskirchen steht für Qualität, Transparenz und einen persönlichen Service, der Sie in den Mittelpunkt stellt."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            useInvertedBackground={true}
            animationType="slide-up"
            textboxLayout="split"
            title="Kundenstimmen"
            description="Unsere Kunden schätzen unsere langjährige Erfahrung und unser Engagement für exzellenten Service."
            kpiItems={[{ value: "25+", label: "Jahre Erfahrung" }, { value: "4.8", label: "Durchschnittsbewertung" }, { value: "Top", label: "Kundenservice" }]}
            testimonials={[
              { id: "t1", name: "Kunde", role: "Traiskirchen", company: "Sehr freundliche Beratung und schnelle Hilfe.", rating: 5 },
              { id: "t2", name: "Kunde", role: "Traiskirchen", company: "Seit Jahren mein erster Ansprechpartner bei Handyproblemen.", rating: 5 }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "Wo finde ich Sie?", content: "Wir befinden uns in der Otto Glöckel Straße 1, 2514 Traiskirchen." },
              { id: "f2", title: "Wie sind die Öffnungszeiten?", content: "Wir sind Montag bis Freitag für Sie da." }
            ]}
            faqsAnimation="slide-up"
            title="FAQ"
            description="Haben Sie noch Fragen? Finden Sie hier die wichtigsten Antworten rund um unseren Shop."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Austrotel Traiskirchen"
            columns={[
              { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }] },
              { title: "Service", items: [{ label: "Reparaturen", href: "/services" }, { label: "Anfahrt", href: "/contact" }] }
            ]}
            copyrightText="© 2025 Austrotel Traiskirchen. Alle Rechte vorbehalten."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
