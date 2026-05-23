import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hardvantatechnologies.in"),

  title: {
    default:
      "Hardvanta Technologies LLP | Embedded Systems, IoT & AI Solutions",

    template: "%s | Hardvanta Technologies LLP",
  },

  description:
    "Hardvanta Technologies LLP is a research-driven engineering company specializing in Embedded Systems, IoT Development, PCB Design, Firmware Development, Smart Automation, Artificial Intelligence, Industrial Automation, and Software Solutions.",

  keywords: [
    "Hardvanta Technologies LLP",
    "Hardvanta Technologies",
    "Embedded Systems Company",
    "IoT Company India",
    "IoT Development",
    "PCB Design Company",
    "Firmware Development",
    "Industrial Automation",
    "AI Solutions",
    "Artificial Intelligence",
    "Machine Learning",
    "Embedded Hardware",
    "Electronics Engineering",
    "Research and Development",
    "Engineering Company",
    "Automation Solutions",
    "Smart Automation",
    "Software Development",
    "Technology Company India",
    "Greater Noida Startup",
    "Industrial IoT",
    "Smart Systems",
    "Embedded Software",
    "Product Prototyping",
  ],

  authors: [
    {
      name: "Hardvanta Technologies LLP",
      url: "https://hardvantatechnologies.in",
    },
  ],

  creator: "Hardvanta Technologies LLP",

  publisher: "Hardvanta Technologies LLP",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo/logo.jpeg",
    shortcut: "/logo/logo.jpeg",
    apple: "/logo/logo.jpeg",
  },

  openGraph: {
    title: "Hardvanta Technologies LLP",

    description:
      "Engineering intelligent solutions through Embedded Systems, IoT, AI, Smart Automation, PCB Design, Firmware Development, and Industrial Technology.",

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
      "Research-driven engineering company focused on Embedded Systems, IoT, AI Solutions, Smart Automation, PCB Design, and Industrial Innovation.",

    images: ["/logo/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,

      noimageindex: false,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
