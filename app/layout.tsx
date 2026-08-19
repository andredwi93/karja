import type { Metadata } from "next";
import Script from "next/script";
import { getSiteUrl } from "@/lib/site";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: "%s | Karja",
    default: "Karja",
  },
  description:
    "Karja adalah platform untuk menjual hasil karya digital, seperti template, preset, dan font",
  // keywords: ["Karja", "Sell Digital Product", "Digital Product", "Template", "Preset", "Font"],
  // openGraph: {
  //   title: "Karja - Platform untuk menjual hasil karya digital",
  //   description:
  //     "Karja adalah platform untuk menjual hasil karya digital, seperti template, preset, dan font",
  //   url: "https://karja.vercel.app",
  //   siteName: "Karja",
  //   images: [
  //     {
  //       url: "/assets/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Karja",
  //     },
  //   ],
  //   locale: "id_ID",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Karja - Platform untuk menjual hasil karya digital",
  //   description:
  //     "Karja adalah platform untuk menjual hasil karya digital, seperti template, preset, dan font",
  //   images: ["/assets/og-image.png"],
  // },
};

import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.className} h-full antialiased`}
    >
      <body>
        <NextTopLoader color="#1FB571" />
        <TooltipProvider>{children}</TooltipProvider>
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3VTPS5G23Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3VTPS5G23Q');
          `}
        </Script>
      </body>
    </html>
  );
}
