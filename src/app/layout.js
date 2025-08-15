import Footer from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import "./styles/globals.css";

export const metadata = {
  title: "Luxi | Wi-Fi Solutions",
  description:
    "Experience the Connectivity You Deserve: Wi-Fi Solutions Tailored for Your Grand Estate's Elegance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="luxury">
      <body className="flex flex-col min-h-screen bg-base-100 text-base-content">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* TODO: add the back to top button */}
      </body>
    </html>
  );
}
