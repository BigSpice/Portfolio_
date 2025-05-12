import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./edit.css";
import "./new.css";

const inter = Geist_Mono({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Jordan Kaweesa | Portfolio",
  description:
    "Automation Engineer",
  keywords: [
    "Automation Engineer",
    "Web Development Projects",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Jordan Kaweesa", url: "https://" }],
  openGraph: {
    title: "Jordan Kaweesa | Developer Portfolio",
    description:
      "EFE ",
    url: "https://",
    siteName: "Jordan Kaweesa",
    images: [
      {
        url: "https://",
        width: 1200,
        height: 630,
        alt: "Jordan Kaweesa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Kaweesa | Portfolio",
    description:
      "Automation Engineer with a long background in Computer Systems",
    images: ["https://"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className={cn("antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
