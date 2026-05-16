import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { FormbricksInit } from "@/components/site/formbricks-init"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = "https://cordconsultancy.com"
const siteDescription =
  "CORD Nutrition and Health Trading PLC delivers professional advisory services across health, nutrition, social affairs, management, and tourism in Ethiopia."

export const metadata: Metadata = {
  title: {
    default: "CORD Consultancy — Health & Nutrition Advisory in Ethiopia",
    template: "%s | CORD Consultancy",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "CORD Consultancy",
    "CORD Nutrition and Health Trading PLC",
    "Health consultancy Ethiopia",
    "Nutrition advisory Addis Ababa",
    "Management consulting Ethiopia",
    "Social affairs advisory",
    "Hotel and tourism consulting",
  ],
  authors: [{ name: "CORD Nutrition and Health Trading PLC" }],
  openGraph: {
    title: "CORD Consultancy — Professional Excellence & Advisory Hub",
    description: siteDescription,
    url: siteUrl,
    siteName: "CORD Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1289,
        alt: "CORD Consultancy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CORD Consultancy — Health & Nutrition Advisory",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="min-h-dvh font-sans antialiased">
        <FormbricksInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
