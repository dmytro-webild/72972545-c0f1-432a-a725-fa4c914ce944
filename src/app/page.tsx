"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
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
            brandName="Austro-Tel Handyshoptraiskirchen"
            navItems={[
              { name: "Start", id: "hero" },
              { name: "Über uns", id: "/about" },
              { name: "Service", id: "services" },
              { name: "Bewertungen", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Kontakt", id: "contact" },
            ]}
            button={{ text: "Kontakt", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCarouselLogo
            logoText="Austro-Tel Handyshop"
            description="Schnelle Smartphone-Reparaturen & Experten-Service in Traiskirchen – Ihr Gerät in besten Händen"
            buttons={[{ text: "Express-Reparatur anfragen", href: "#contact" }]}
            slides={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-85khy938.jpg", imageAlt: "Austro-Tel Shop Außenansicht" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-7q0tljrn.jpg", imageAlt: "Shop Frontansicht" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-ks07pcgn.jpg", imageAlt: "Shop Innenansicht" }
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <InlineImageSplitTextAbout
            useInvertedBackground={false}
            heading={[
              { type: "text", content: "Ihr lokaler Experte für " },
              { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-ks07pcgn.jpg", alt: "Handyshop" },
              { type: "text", content: " Smartphone-Reparaturen & Technik" },
            ]}
            buttons={[{ text: "Wegbeschreibung zum Shop", href: "#contact" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureHoverPattern
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { icon: Wrench, title: "Fachgerechte Reparaturen", description: "Display-, Software- und Hardware-Reparaturen durch erfahrene Profis." },
              { icon: Smartphone, title: "Neuste Geräte", description: "Große Auswahl an aktuellen Smartphones und passendem Zubehör." },
              { icon: ShieldCheck, title: "Transparente Preise", description: "Ehrliche und faire Kostenaufstellung ohne versteckte Gebühren." },
            ]}
            title="Warum Austro-Tel?"
            description="Mit über 250+ Bewertungen und 4,8 Sternen sind wir Ihr vertrauenswürdiger Ansprechpartner in Traiskirchen."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            useInvertedBackground={true}
            animationType="slide-up"
            textboxLayout="split"
            title="Was unsere Kunden sagen"
            description="Zufriedene Kunden stehen bei uns an erster Stelle. Lesen Sie, warum uns so viele Menschen vertrauen."
            kpiItems={[{ value: "250+", label: "Bewertungen" }, { value: "4.8", label: "Sterne-Bewertung" }, { value: "100%", label: "Ehrlicher Service" }]}
            testimonials={[
              { id: "t1", name: "Markus H.", role: "Kunde", company: "Mein iPhone Display war innerhalb einer Stunde wie neu. Top Service!", rating: 5, imageSrc: "" },
              { id: "t2", name: "Julia S.", role: "Kundin", company: "Sehr freundliche Beratung und faire Preise bei der Reparatur meines Samsungs.", rating: 5, imageSrc: "" },
              { id: "t3", name: "Peter R.", role: "Kunde", company: "Schnelle Hilfe bei Softwareproblemen, absolut empfehlenswert für alle in Traiskirchen.", rating: 5, imageSrc: "" }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "faq1", title: "Wie lange dauert eine Reparatur?", content: "Die meisten Reparaturen werden innerhalb weniger Stunden erledigt, abhängig von der Ersatzteilverfügbarkeit." },
              { id: "faq2", title: "Brauche ich einen Termin?", content: "Termine sind nicht zwingend erforderlich, aber empfehlenswert für eine schnellere Abwicklung." },
              { id: "faq3", title: "Gibt es eine Garantie?", content: "Selbstverständlich gewähren wir Garantie auf alle unsere Reparaturen und verbauten Teile." },
            ]}
            buttons={[{ text: "Kontaktieren Sie uns", href: "#contact" }]}
            title="Häufige Fragen"
            description="Haben Sie Fragen? Wir helfen Ihnen gerne weiter."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={true}
            background={{ variant: "animated-grid" }}
            text="Besuchen Sie uns in der Otto Glöckel-Straße 1, 2514 Traiskirchen. Öffnungszeiten: Mo–Fr 08:30–19:30, Sa 08:30–17:00. Kontaktieren Sie uns unter 02252 521031."
            buttons={[
              { text: "Anrufen", href: "tel:+432252521031" },
              { text: "WhatsApp-Anfrage", href: "https://wa.me/436646370016" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
              { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "#contact" }] },
              { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "#services" }, { label: "Verkauf", href: "#services" }] },
            ]}
            copyrightText="© 2024 Austro-Tel Handyshop Traiskirchen."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
