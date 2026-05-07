"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
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

        <div id="about" data-section="about" className="pt-24">
            <InlineImageSplitTextAbout
                useInvertedBackground={false}
                heading={[
                { type: "text", content: "Austrotel Traiskirchen: 25 Jahre Expertise in Smartphone-Reparatur und Mobilfunk." },
                ]}
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
