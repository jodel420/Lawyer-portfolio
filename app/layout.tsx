// app/layout.tsx
import "./globals.css"; // Updated to app/globals.css
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Baes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}