import type { Metadata } from "next";
import "./globalStyles/normalize.css";
import "./globalStyles/globals.css";
import "./globalStyles/header.css";
import "./globalStyles/menu.css";
import "./globalStyles/mobile-navbar.css";
import "./globalStyles/catalog-menu.css";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Rostelecom-test",
  description: "Just for testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
