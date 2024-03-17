import Hydrate from "./Hydrate";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "/book.svg",
  title: "الشيخ محمود خليل | مدرس اللغة العربية والقران الكريم",
  description: "الشيخ محمود خليل مدرس اللغة العربية والقران الكريم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <Hydrate>{children}</Hydrate>
    </html>
  );
}
