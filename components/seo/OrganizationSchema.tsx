export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hardvanta Technologies LLP",
    url: "https://hardvantatechnologies.in",
    logo: "https://hardvantatechnologies.in/logo/hardvanta.png",
    description:
      "Research-driven engineering company specializing in Embedded Systems, IoT Development, PCB Design, Firmware Engineering, Artificial Intelligence, and Industrial Automation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 046, Knowledge Park III, Alpha",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201310",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-91705-46395",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      // add real profile URLs you have, delete lines you don't
      "https://www.instagram.com/hardvantatechnologies?utm_source=qr&igsh=ZG92b3oxZzczeXZw",
      // "https://www.linkedin.com/company/hardvanta-technologies",
      // "https://www.instagram.com/hardvantatechnologies",
      "https://share.google.com/aVdQuxuxnUXno5jri"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}