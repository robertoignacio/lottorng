import type { Metadata } from "next";
import "@/app/ui/globals.css";

import { noto_sans } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Lotto RNG",
  description: "A combinatory random number generator set for the lottery",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}