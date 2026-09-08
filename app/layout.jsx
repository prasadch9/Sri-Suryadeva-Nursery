import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Sri Suryadeva Nursery | Kadiyam",
  description:
    "Sri Suryadeva Nursery, Kadiyam — beautiful plants, palms, flowering plants, ornamental greens and garden solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <img src="/logo.jpg" alt="Sri Suryadeva Nursery" className="footer-logo" />
              <p>Growing greener spaces, one plant at a time.</p>
            </div>
            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/our-plants">Our Plants</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Sri Suryadeva Nursery, Kadiyam. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}