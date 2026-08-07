import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import OfferPopup from "@/components/OfferPopup";

import { navbarData } from "@/data/siteData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://blissspahadapsar.in";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Bliss Spa | Luxury Spa in Hadapsar Pune",
    template: "%s | Bliss Spa",
  },

  description:
    "Bliss Spa is a luxury wellness spa in Hadapsar, Pune offering Thai Massage, Swedish Massage, Deep Tissue Massage, Couple Massage, Aroma Therapy, Hot Stone Massage, Balinese Massage and premium body spa treatments.",

  keywords: [
    "Bliss Spa",
    "Spa in Hadapsar",
    "Spa in Pune",
    "Luxury Spa Hadapsar",
    "Massage Centre Hadapsar",
    "Body Spa Pune",
    "Thai Massage Pune",
    "Swedish Massage Hadapsar",
    "Deep Tissue Massage",
    "Balinese Massage",
    "Aroma Therapy",
    "Hot Stone Massage",
    "Couple Spa Pune",
    "Massage Near Me",
    "Best Spa in Hadapsar",
    "Wellness Spa Pune",
    "Relaxation Spa",
    "Body Massage Pune",
    "Spa Near Me",
  ],

  authors: [
    {
      name: "Bliss Spa",
    },
  ],

  creator: "Bliss Spa",
  publisher: "Bliss Spa",
  applicationName: "Bliss Spa",
  category: "Spa & Wellness",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Bliss Spa | Luxury Spa in Hadapsar Pune",

    description:
      "Experience premium spa therapies including Thai Massage, Swedish Massage, Deep Tissue Massage, Couple Massage, Aroma Therapy, Hot Stone Massage and Balinese Massage at Bliss Spa in Hadapsar, Pune.",

    url: siteUrl,
    siteName: "Bliss Spa",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bliss Spa Hadapsar Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bliss Spa | Luxury Spa in Hadapsar Pune",
    description: "Premium Spa & Massage Centre in Hadapsar, Pune.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/logo/Shailesh Logo (4).png",
        type: "image/png",
      },
      {
        url: "/logo/Shailesh Logo (4).png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/logo/Shailesh Logo (4).png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/logo/Shailesh Logo (4).png",
    apple: "/logo/Shailesh Logo (4).png",
  },

  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#4B352B",
    "geo.region": "IN-MH",
    "geo.placename": "Hadapsar, Pune",
    "geo.position": "18.4967;73.9418",
    ICBM: "18.4967,73.9418",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {/* =========================================
            GOOGLE ADS / GOOGLE TAG
        ========================================= */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18368569547"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'AW-18368569547');
          `}
        </Script>

        {/* =========================================
            GOOGLE ADS PURCHASE CONVERSION FUNCTION
        ========================================= */}

        <Script
          id="google-ads-purchase-conversion-function"
          strategy="afterInteractive"
        >
          {`
            window.gtag_report_conversion = function(url) {
              var callback = function() {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };

              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-18368569547/jlRtCNKJtt0cEMvB6LZE',
                  'value': 1.0,
                  'currency': 'INR',
                  'transaction_id': '',
                  'event_callback': callback
                });

                return false;
              }

              if (typeof url !== 'undefined') {
                window.location = url;
              }

              return false;
            };
          `}
        </Script>

        {/* =========================================
            PURCHASE CONVERSION PAGE EVENT
        ========================================= */}

        <Script
          id="google-ads-purchase-conversion-event"
          strategy="afterInteractive"
        >
          {`
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'conversion', {
                'send_to': 'AW-18368569547/jlRtCNKJtt0cEMvB6LZE',
                'value': 1.0,
                'currency': 'INR',
                'transaction_id': ''
              });
            }
          `}
        </Script>

        {/* =========================================
            WEBSITE
        ========================================= */}

        <Navbar data={navbarData} />

        <main className="flex-1">{children}</main>

        <Footer />

        <FloatingButtons />

        <OfferPopup />
      </body>
    </html>
  );
}