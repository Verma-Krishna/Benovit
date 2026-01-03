import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  // 🔹 SEO Friendly Title
  title: {
    default: "Benito Italy CNG & LPG Kits | Premium Gas Conversion Systems",
    template: "%s | Benito Italy",
  },

  // 🔹 Meta Description
  description:
    "Benito Italy offers premium CNG & LPG kits, gas conversion systems, and automotive components designed for performance, safety, and fuel efficiency.",

  // 🔹 Favicon / Icons (SVG)
  icons: {
    icon: "/benitologo.svg",
    shortcut: "/benitologo.svg",
    apple: "/benitologo.svg",
  },

  // 🔹 Open Graph (for social sharing)
  openGraph: {
    title: "Benito Italy CNG & LPG Kits",
    description:
      "Drive into the future with Benito Italy CNG & LPG kits. Advanced, safe, and fuel-efficient gas conversion solutions.",
    url: "https://www.benito-italy.com", // change if needed
    siteName: "Benito Italy",
    images: [
      {
        url: "/benitologo.svg",
        width: 512,
        height: 512,
        alt: "Benito Italy Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // 🔹 Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Benito Italy CNG & LPG Kits",
    description:
      "Premium CNG & LPG gas conversion systems by Benito Italy.",
    images: ["/benitologo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* ✅ Navbar */}
        <div className="fixed left-0 w-full z-[9999]">
          <Header />
        </div>

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
