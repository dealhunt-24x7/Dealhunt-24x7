// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'DealHunt',
  description: 'Find the best deals across multiple stores',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
