import type { Metadata } from "next";
import "@/app/ui/globals.css";

import { montserrat } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Lotto RNG",
  description: "A combinatory random number generator set for the lottery",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}