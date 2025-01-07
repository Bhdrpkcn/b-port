import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<bp /> | webdev",
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
      url: "https://www.linkedin.com/in/bahad%C4%B1r-pekcan/",
    },
  ],

  openGraph: {
    title: "<bp /> | Web Developer Portfolio",
    description:
      "A showcase of my web development projects and skills, built with modern technologies like Next.js, TypeScript, and Tailwind CSS.",
    url: "https://your-portfolio-url.com", // REPLACE
    siteName: "b-port",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png", // REPLACE
        width: 1200,
        height: 630,
        alt: "b-port Web Developer Portfolio Cover Image",
      },
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://your-portfolio-url.com", // REPLACE
    languages: {
      "en-US": "https://your-portfolio-url.com", // REPLACE
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
    icon: "/favicon.ico", // Standard favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
