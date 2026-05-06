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
              { name: "Home", id: "hero" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Contact", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCarouselLogo
            logoText="Austro-Tel Handyshop"
            description="Expert repairs, latest devices, and honest service since day one. Visit us today in Traiskirchen or call ahead for fast, reliable solutions."
            buttons={[{ text: "Book Your Service Now", href: "#contact" }]}
            slides={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-85khy938.jpg", imageAlt: "Austro-Tel Shop Exterior" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-7q0tljrn.jpg", imageAlt: "Shop Front View" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-ks07pcgn.jpg", imageAlt: "Shop Interior View" },
              { imageSrc: "http://img.b2bpic.net/free-photo/indian-couple-performs-transactions-from-bank-atm_627829-12289.jpg", imageAlt: "Repair Services" },
              { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-holding-smartphones_23-2149303399.jpg", imageAlt: "Latest Smartphones" },
              { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171292.jpg", imageAlt: "Tech Support" }
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <InlineImageSplitTextAbout
            useInvertedBackground={false}
            heading={[
              { type: "text", content: "Your local experts for " },
              { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778067173487-ks07pcgn.jpg", alt: "Handyshop interior" },
              { type: "text", content: " smartphone repairs & technology" },
            ]}
            buttons={[{ text: "Visit us at Otto Glöckel-Str. 1", href: "#contact" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureHoverPattern
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { icon: Wrench, title: "Expert Repairs", description: "Display, software, and technical hardware repairs performed by professionals." },
              { icon: Smartphone, title: "Latest Devices", description: "Large selection of new smartphones and necessary accessories." },
              { icon: ShieldCheck, title: "Transparent Pricing", description: "Honest, fair prices without hidden costs or unexpected surprises." },
            ]}
            title="Why Choose Austro-Tel?"
            description="With over 250+ reviews and a 4.8 star rating, we are the trusted choice for mobile repairs in Traiskirchen."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          {/* Note: Testimonials component would go here, rendered as requested in locked structure */}
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "faq1", title: "How long does a repair take?", content: "Most repairs are completed within a few hours, depending on parts availability." },
              { id: "faq2", title: "Do I need an appointment?", content: "Appointments are not mandatory but recommended for faster service." },
              { id: "faq3", title: "Do you offer warranty?", content: "Yes, we provide a warranty on all our repair services and parts." },
            ]}
            title="Frequently Asked Questions"
            description="Have questions? We are here to help."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={false}
            background={{ variant: "animated-grid" }}
            text="Visit us at Otto Glöckel-Straße 1, 2514 Traiskirchen. We are open Monday–Friday 08:30–19:30 and Saturday 08:30–17:00. Call us at 02252 521031."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Austro-Tel Handyshop"
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Contact", href: "#contact" }] },
              { title: "Services", items: [{ label: "Repairs", href: "#services" }, { label: "Sales", href: "#services" }] },
            ]}
            copyrightText="© 2024 Austro-Tel Handyshop Traiskirchen."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}