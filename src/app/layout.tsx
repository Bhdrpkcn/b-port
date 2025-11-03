import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import CanvasCursor from "@/components/ui/CanvasCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<bp />",
  description:
    "Explore my projects, skills, and achievements in web development. Showcasing expertise in Next.js, TypeScript, Tailwind CSS, and modern front-end technologies.",
  keywords: [
    "Portfolio",
    "Web Development",
    "Next.js",
    "TypeScript",
    "React",
    "Front-end Developer",
    "JavaScript",
    "Tailwind CSS",
    "GitHub",
    "LinkedIn",
  ],

  authors: [
    {
      name: "Bahadir Pekcan",
      url: "https://www.linkedin.com/in/bhdrpkcn/",
    },
  ],

  openGraph: {
    title: "<bp /> | Web Developer Portfolio",
    description:
      "A showcase of my web development projects and skills, built with modern technologies like Next.js, TypeScript, and Tailwind CSS.",
    url: "https://b-port.vercel.app/",
    siteName: "b-port",
    images: [
      {
        url: "https://b-port.vercel.app/bplogo.png",
        width: 1200,
        height: 630,
        alt: "b-port Web Developer Portfolio Cover Image",
      },
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://b-port.vercel.app/",
    languages: {
      "en-US": "https://b-port.vercel.app/",
    },
    types: {
      "text/html": [
        {
          url: "https://www.linkedin.com/in/bahad%C4%B1r-pekcan/",
          title: "Bahadır on LinkedIn",
        },
        { url: "https://github.com/Bhdrpkcn", title: "Bahadır on GitHub" },
      ],
    },
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <CanvasCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
