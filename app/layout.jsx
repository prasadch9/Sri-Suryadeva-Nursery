import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sri Suryadeva Nursery | Kadiyam",
  description:
    "Sri Suryadeva Nursery, Kadiyam - Quality plants, palms, flowering plants and ornamental greens.",
  icons: {
    icon: "/logoo.jpg",
    shortcut: "/logoo.jpg",
    apple: "/logoo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}