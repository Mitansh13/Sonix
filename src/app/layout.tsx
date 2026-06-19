import "./globals.css";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

import { Analytics } from "@vercel/analytics/react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Sonix | Free Private Audio Converter (MP3, WAV, FLAC, OGG)",
  description:
    "Convert audio files safely and instantly in your browser. Sonix uses local WebAssembly processing so your files never upload to a server. 100% private, secure, and free.",
  keywords: [
    "audio converter",
    "client-side audio conversion",
    "local audio conversion",
    "mp3 to wav",
    "secure audio converter",
    "private audio converter",
    "browser-based audio converter",
    "ffmpeg webassembly",
    "free audio converter",
    "wav to mp3",
    "flac converter",
    "ogg to mp3",
    "aac converter",
    "m4a to wav",
  ],
  authors: [{ name: "Sonix" }],
  creator: "Sonix",
  publisher: "Sonix",
  metadataBase: new URL("https://so-nix.me"),
  alternates: {
    canonical: "https://so-nix.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://so-nix.me",
    siteName: "Sonix",
    title: "Sonix | Free Private Audio Converter (MP3, WAV, FLAC, OGG)",
    description:
      "Convert audio files safely and instantly in your browser. Sonix uses local WebAssembly processing so your files never upload to a server. 100% private, secure, and free.",
    images: [
      {
        url: "https://so-nix.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonix Audio Converter - Free & Private",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonix | Free Private Audio Converter (MP3, WAV, FLAC, OGG)",
    description:
      "Convert audio files safely and instantly in your browser. Sonix uses local WebAssembly processing so your files never upload to a server. 100% private, secure, and free.",
    images: ["https://so-nix.me/og-image.png"],
    creator: "@sonixaudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        {/* Google AdSense - Replace ca-pub-PLACEHOLDER with your actual publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7636187486912431"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 relative">
        {/* Floating glass navbar */}
        <header className="sticky top-4 z-50 mx-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center justify-between px-5 sm:px-8 py-4 max-w-6xl lg:mx-auto">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sonix-logo-light.svg" alt="Sonix" className="h-8 sm:h-10 w-auto" />
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</Link>
          </nav>
        </header>
        <main className="relative z-10 pt-4">
          {children}
        </main>
        <footer className="mt-auto py-8 text-center text-sm text-slate-500 bg-slate-50 border-t border-slate-200">
          <div className="flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sonix-logo-light.svg" alt="Sonix" className="h-8 w-auto opacity-60" />
            <p>© {new Date().getFullYear()} Sonix Audio Converter. All rights reserved.</p>
            <div className="flex gap-6 text-slate-400">
              <Link href="/privacy-policy" className="hover:text-sonix-cyan transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-sonix-cyan transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-sonix-cyan transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}