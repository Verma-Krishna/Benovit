import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Benito Italy Kits",
  description: "Drive into the Future with Benito Italy CNG & LPG Kits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* ✅ Navbar always visible and above all */}
        <div className="fixed left-0 w-full z-9999">
          <Header />
        </div>

        {/* ✅ Page Content */}
        <main >{children}</main>

        <Footer />
      </body>
    </html>
  );
}
