import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دعوة زفاف أحمد ومريم",
  description: "دعوة زفاف أحمد ومريم، ليلة الخميس ١١ مارس ٢٠٢٧.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#180308",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}