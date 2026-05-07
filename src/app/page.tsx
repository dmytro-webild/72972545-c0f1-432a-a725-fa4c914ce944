"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
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
            brandName="Austro-Tel Handyshop"
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
        </div>

        <div id="hero" data-section="hero">
          <HeroCarouselLogo
            logoText="Austro-Tel Handyshop"
            description="Seit 25 Jahren Ihr Smartphone-Experte in Traiskirchen – Reparatur in unter 60 Minuten mit blitzschnellem Service. WhatsApp: 06646370015"
            buttons={[{ text: "Jetzt Reparatur-Termin vereinbaren", href: "/contact" }, { text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }]}
            slides={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-a7jdq3jn.jpg?_wi=1", imageAlt: "Austro-Tel Shop Außenansicht" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-xa8y728e.jpg?_wi=1", imageAlt: "Shop Frontansicht" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-3i66kqvi.png", imageAlt: "Shop Innenansicht" }
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <InlineImageSplitTextAbout
            useInvertedBackground={false}
            heading={[
              { type: "text", content: "Ihr lokaler Experte für " },
              { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-3i66kqvi.png", alt: "Handyshop" },
              { type: "text", content: " Smartphone-Reparaturen – seit einem Vierteljahrhundert im Einsatz." },
            ]}
            buttons={[{ text: "Unsere Services entdecken", href: "/services" }, { text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureHoverPattern
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            tag="Top-Rated in Traiskirchen"
            features={[
              { icon: Wrench, title: "Sofort-Reparatur", description: "Display-, Software- und Hardware-Reparaturen durch erfahrene Profis seit 25 Jahren." },
              { icon: Smartphone, title: "Top-Aktuelle Modelle", description: "Große Auswahl an aktuellen Smartphones und passendem Zubehör bei Ihrem vertrauten Partner." },
              { icon: ShieldCheck, title: "Fair-Preis-Garantie", description: "Ehrliche und faire Kostenaufstellung ohne versteckte Gebühren seit zwei Jahrzehnten." },
            ]}
            title="Warum Austro-Tel?"
            description="Seit 25 Jahren stehen wir für Qualität. Mit über 250+ Bewertungen und 4,8 Sternen sind wir Ihr vertrauenswürdiger Ansprechpartner in Traiskirchen."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            useInvertedBackground={true}
            animationType="slide-up"
            textboxLayout="split"
            title="Was unsere Kunden sagen"
            description="Seit 25 Jahren an Ihrer Seite. Zufriedene Kunden stehen bei uns an erster Stelle. Lesen Sie, warum uns so viele Menschen seit Jahrzehnten vertrauen."
            kpiItems={[{ value: "25", label: "Jahre Erfahrung" }, { value: "4.8", label: "Sterne-Bewertung" }, { value: "100%", label: "Ehrlicher Service" }]}
            testimonials={[
              { id: "t1", name: "Markus H.", role: "Kunde", company: "Mein iPhone Display war innerhalb einer Stunde wie neu. Top Service!", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-a7jdq3jn.jpg?_wi=2" },
              { id: "t2", name: "Julia S.", role: "Kundin", company: "Sehr freundliche Beratung und faire Preise bei der Reparatur meines Samsungs.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-xa8y728e.jpg?_wi=2" },
              { id: "t3", name: "Peter R.", role: "Kunde", company: "Schnelle Hilfe bei Softwareproblemen, absolut empfehlenswert für alle in Traiskirchen.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778144863108-a7jdq3jn.jpg?_wi=1" }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "faq1", title: "Wie lange dauert eine Reparatur?", content: "Seit 25 Jahren Erfahrung garantieren wir schnellen Service – meistens erhalten Sie Ihr Gerät noch am selben Tag zurück." },
              { id: "faq2", title: "Brauche ich einen Termin?", content: "Termine sind nicht zwingend erforderlich, aber wir empfehlen sie für eine noch schnellere Abwicklung bei Ihrem langjährigen Experten." },
              { id: "faq3", title: "Gibt es eine Garantie?", content: "Selbstverständlich gewähren wir auf unsere jahrelange Erfahrung vertrauenswürdige Garantie auf alle Reparaturen und verbauten Teile." },
            ]}
            buttons={[{ text: "Kontaktieren Sie uns", href: "/contact" }, { text: "Anrufen", onClick: () => window.location.href = "tel:+432252521031" }]}
            title="Häufige Fragen"
            description="Haben Sie Fragen? Wir helfen Ihnen als Ihr lokaler Experte mit 25 Jahren Erfahrung gerne weiter."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
              { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Kontakt", href: "/contact" }, { label: "Datenschutz", href: "/privacy" }] },
              { title: "Dienstleistungen", items: [{ label: "Reparaturen", href: "/services" }, { label: "Verkauf", href: "/services" }] },
            ]}
            copyrightText="© 2025 | Austro-Tel Handyshop Traiskirchen - Seit 25 Jahren Ihr Fachgeschäft."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}