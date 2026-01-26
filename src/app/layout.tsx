import type { Metadata } from "next";
import { Tangerine, Playfair_Display } from "next/font/google";
import "./globals.css";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfairDisplay",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walking Potato",
  description: "Indian Snack House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tangerine.variable} ${playfairDisplay.variable} bg-wp-brown`}>
        {children}
      </body>
    </html>
  );
}
