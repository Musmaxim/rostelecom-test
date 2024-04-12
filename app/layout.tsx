import type { Metadata } from "next";
import "./globalStyles/normalize.css";
import "./globalStyles/globals.css";
import "./globalStyles/header.css";
import "./globalStyles/menu.css";
import "./globalStyles/mobile-navbar.css";
import "./globalStyles/catalog-menu.css";
import "./globalStyles/search-modal.css";
import "./globalStyles/cart-popup.css";
import "./globalStyles/footer.css";
import "./globalStyles/slick.css";
import "./globalStyles/slick-theme.css";
import "./globalStyles/auth-popup.css";
import "./globalStyles/header-profile.css";
import PageLayout from "@/components/layouts/PageLayout";

export const metadata: Metadata = {
  title: "Rostelecom-test",
  description: "Just for testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}
