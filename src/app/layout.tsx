import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "SJSU Robotics",
  description: "San José State University Robotics Club - Building Mars rovers in the heart of Silicon Valley",
};

// Set this to false to hide the recruiting announcement across the site.
const SHOW_RECRUITING_ANNOUNCEMENT = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header>
      {/* toggle on and off at top of file*/}
      {SHOW_RECRUITING_ANNOUNCEMENT && (
        <div className="announcement-bar" role="status">
          <div className="announcement-inner">
            <span>Fall 2026 Recruiting on September 19 </span>
            <Link href="https://discord.com/invite/upfMJazrKX" className="announcement-link">JOIN THE DISCORD</Link>
          </div>
        </div>
      )}
      <div className="header-fade" />
      <div className="container">
        <nav>
          <Link href="/" className="logo-link">
            <img src="/images/transparent_logo.png" alt="SJSU Robotics" className="logo-img" />
            <span className="logo">SJSU Robotics</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/updates" className="nav-link">Updates</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-split">
          {/* Left side - Logo and copyright */}
          <div className="footer-left">
            <div className="logo mb-md">SJSU Robotics</div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} SJSU Robotics. All rights reserved.
            </p>
          </div>

          {/* Right side - Contact info */}
          <div className="footer-right">
            <div className="footer-contact-row">
              <div className="footer-contact-item">
                <p className="contact-label">Email</p>
                <p>sjsurobotics@gmail.com</p>
              </div>
              <div className="footer-contact-item">
                <p className="contact-label">Meetings</p>
                <p>Saturdays, 1:30–3pm</p>
              </div>
              <div className="footer-contact-item">
                <p className="contact-label">Location</p>
                <p>ENGR 319, SJSU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
