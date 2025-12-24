import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SJSU Robotics",
  description: "San José State University Robotics Club - Building Mars rovers in the heart of Silicon Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <MobileMenuScript />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header>
      <div className="header-fade" />
      <div className="container">
        <nav>
          <Link href="/" className="logo-link">
            {/* Logo placeholder - replace with: <img src="/logo.png" alt="" className="logo-img" /> */}
              <img src="/images/transparent_logo.png" alt="SJSU Robotics" className="logo-img" />
            <span className="logo">SJSU Robotics</span>
          </Link>
          <div className="nav-links">
            <Link href="/board" className="nav-link">Board</Link>
            <Link href="/updates" className="nav-link">Updates</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
          <button className="menu-toggle" aria-label="Toggle navigation">
            <span />
          </button>
        </nav>
      </div>
      <div className="mobile-menu">
        <Link href="/board">Board</Link>
        <Link href="/updates">Updates</Link>
        <Link href="/contact">Contact</Link>
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
                <p>Saturdays, 1–3pm</p>
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

function MobileMenuScript() {
  const script = `
    (function() {
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.querySelector('.mobile-menu');
      if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('open'));
        menu.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => menu.classList.remove('open'));
        });
      }

      // FAQ toggle
      document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (btn) {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(other => {
              if (other !== item) other.classList.remove('open');
            });
            item.classList.toggle('open');
          });
        }
      });
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
