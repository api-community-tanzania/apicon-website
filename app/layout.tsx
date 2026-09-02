import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteDescription = "APICon Tanzania 2026 brings together developers, cybersecurity professionals, startups, technology companies, students and API providers to learn, showcase, discover and secure APIs. Saturday 21 November 2026 at Confucius UDSM, Dar es Salaam, Tanzania.";

export const metadata: Metadata = {
  metadataBase: new URL("https://apicon.or.tz"),
  applicationName: "APICon Tanzania",
  authors: [{ name: "APICon Tanzania" }],
  description: siteDescription,
  keywords: ["APICon Tanzania", "API conference Tanzania", "API Security Tanzania", "API Development", "DevSecOps", "API Marketplace", "developer conference Tanzania", "FinTech APIs", "AI APIs", "cybersecurity conference Tanzania", "API ecosystem Tanzania", "AI agents", "MCP"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  icons: { icon: "/assets/images/favicon.svg", apple: "/assets/images/favicon.svg" },
  other: {
    "referrer": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "apple-mobile-web-app-title": "APICon Tanzania",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "format-detection": "telephone=yes",
    "geo.region": "TZ",
    "geo.placename": "Dar es Salaam",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101427",
};

const themeBootstrap = `try{if(localStorage.getItem('apicon-theme')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  // Bootstrap's `:root { scroll-behavior: smooth }` outranks the legacy `html { scroll-behavior: auto }`,
  // so the router needs `data-scroll-behavior` to suspend it while restoring scroll on route transitions.
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
        <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" integrity="sha384-vNhcrEMPkKG6l3cUAUkZp042GDOa4n8sjJI1l/yu7gt1ApVQC8/QS8s0Lekrg+Yp" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: '@import url("/css/style.css");' }} />
        <link rel="llms-txt" href="/llms.txt" />
      </head>
      <body>{children}</body>
    </html>
  );
}
