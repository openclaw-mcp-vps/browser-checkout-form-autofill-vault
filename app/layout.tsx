import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoVault — Securely Autofill Checkout Forms Across Any Site",
  description: "Browser extension with AI-powered form detection that securely stores payment info and autofills any checkout form, even non-standard ones."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5f03ef31-95c8-4266-a2f0-1daa99756cf7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
