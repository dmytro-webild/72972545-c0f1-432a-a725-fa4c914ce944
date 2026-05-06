import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Austro-Tel Traiskirchen | Handy Reparatur & Service',
  description: 'Top-rated smartphone shop in Traiskirchen. Expert repairs, device sales, and friendly service. 4.8 star rating, 250+ reviews.',
  openGraph: {
    "title": "Austro-Tel Handyshop Traiskirchen",
    "description": "Ihr lokaler Experte für Smartphone Reparaturen & Mobiltelefone.",
    "siteName": "Austro-Tel Handyshop"
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
