import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Orbitron, Syne } from "next/font/google";

import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hardvantatechnologies.in"),

  title: {
    default:
      "Hardvanta Technologies LLP | Embedded Systems, IoT & AI Solutions",
    template: "%s | Hardvanta Technologies LLP",
  },

  description:
    "Hardvanta Technologies LLP is a research-driven engineering company specializing in Embedded Systems, IoT Development, PCB Design, Firmware Engineering, Artificial Intelligence, Industrial Automation, and Smart Technology Solutions.",

  keywords: [
    "Hardvanta Technologies LLP",
    "Embedded Systems",
    "IoT Development",
    "PCB Design",
    "Firmware Engineering",
    "Artificial Intelligence",
    "Industrial Automation",
    "AI Solutions",
    "Industrial IoT",
    "Electronics Engineering",
    "Automation Systems",
    "Technology Company India",
    "Engineering Startup",
    "Embedded Hardware",
    "Smart Automation",
    "Research and Development",
  ],

  authors: [
    {
      name: "Hardvanta Technologies LLP",
      url: "https://hardvantatechnologies.in",
    },
  ],

  creator: "Hardvanta Technologies LLP",
  publisher: "Hardvanta Technologies LLP",

  alternates: {
    canonical: "https://hardvantatechnologies.in",
  },

  icons: {
    icon: "/logo/logo.jpeg",
    shortcut: "/logo/logo.jpeg",
    apple: "/logo/logo.jpeg",
  },

  openGraph: {
    title: "Hardvanta Technologies LLP",
    description:
      "Engineering intelligent systems through Embedded Systems, IoT, AI, PCB Design, Firmware Development, and Industrial Automation.",
    url: "https://hardvantatechnologies.in",
    siteName: "Hardvanta Technologies LLP",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Hardvanta Technologies LLP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hardvanta Technologies LLP",
    description:
      "Research-driven engineering company focused on Embedded Systems, IoT, AI Solutions, and Industrial Innovation.",
    images: ["/logo/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${orbitron.variable} ${syne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
