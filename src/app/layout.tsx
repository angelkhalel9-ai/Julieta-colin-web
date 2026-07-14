import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { IntroSplash } from "@/components/intro-splash";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://drajulietagastro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${content.doctor.name} | Gastroenteróloga en Ensenada, B.C.`,
  description:
    "Endoscopías, colonoscopías y consultas de gastroenterología con la Dra. Julieta Colín Garnica en Ensenada, B.C. Más de 15 años de trayectoria médica. Agenda por WhatsApp.",
  openGraph: {
    title: `${content.doctor.name} | Gastroenteróloga en Ensenada, B.C.`,
    description:
      "Endoscopías, colonoscopías y consultas de gastroenterología en Ensenada, B.C. Agenda tu cita por WhatsApp.",
    url: siteUrl,
    siteName: content.doctor.name,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: content.doctor.name,
  medicalSpecialty: "Gastroenterology",
  description: content.doctor.bio,
  identifier: {
    "@type": "PropertyValue",
    name: "COFEPRIS",
    value: content.doctor.cofeprisRegistration,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: content.location.address,
    addressLocality: "Ensenada",
    addressRegion: "Baja California",
    postalCode: "22890",
    addressCountry: "MX",
  },
  telephone: content.contact.whatsappNumber,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ServiceWorkerRegister />
        <IntroSplash />
      </body>
    </html>
  );
}
