import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "DealHunt",
  description: "Daily deals & price comparison platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
