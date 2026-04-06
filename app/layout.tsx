import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Analytics Dashboard Take-Home Starter",
  description: "Minimal Next.js starter for an analytics dashboard exercise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en"><body><Providers>{children}</Providers></body></html>;
}
