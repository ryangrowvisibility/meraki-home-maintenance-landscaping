import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const head = Nunito_Sans({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Meraki Home Maintenance Landscaping | Lawn Care in Ajax & Pickering",
  description:
    "Lawn care, garden bed clean-ups, sod installation, walkways and yard waste removal in Ajax and Pickering, Ontario. Led by Stelios. 5.0 stars from 8 Google reviews. Call (905) 724-2012.",
  openGraph: {
    title: "Meraki Home Maintenance Landscaping | Ajax & Pickering",
    description: "Lawn and garden care done right, on time, at a fair price. 5.0 stars on Google. Call Stelios at (905) 724-2012.",
    type: "website",
    locale: "en_CA",
    images: ["/images/photo1.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
