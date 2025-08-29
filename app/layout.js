import '../styles/globals.css';

export const metadata = {
  title: 'DealHunt',
  description: 'Find the best deals across multiple stores',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <div className="brand-name">DealHunt</div>
          {/* Navbar placeholder */}
        </header>
        <main>{children}</main>
        <footer className="footer">
          © 2025 DealHunt. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
