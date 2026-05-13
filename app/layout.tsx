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


export const metadata: Metadata = {
  title: {
    default: "CORD Consultancy — Health & Nutrition Advisory in Ethiopia",
    template: "%s | CORD Consultancy",
  },
  description:
    "CORD Nutrition and Health Trading PLC is a premier private consultancy hub in Ethiopia. We deliver professional advisory services across health, nutrition, social affairs, management, and tourism.",
  metadataBase: new URL("https://cordconsultancy.com"), // Replace with your client's custom domain once live
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
    description:
      "Expert health, nutrition, social affairs, management, and hotel & tourism advisory services across Ethiopia.",
    url: "https://cordconsultancy.com", // Replace with custom domain once live
    siteName: "CORD Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure you save a 1200x630px preview image in your public/ folder
        width: 1200,
        height: 630,
        alt: "CORD Consultancy Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CORD Consultancy — Health & Nutrition Advisory",
    description:
      "Expert consulting and professional advisory services across health, nutrition, and management sectors in Ethiopia.",
    images: ["/og-image.png"],
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
