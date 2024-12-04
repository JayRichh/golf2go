import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '~/components/layout/navbar';
import { Footer } from '~/components/layout/footer';
import { PageTransition } from '~/components/ui/PageTransition';

// Load fonts locally for better performance
const geist = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '300 700',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  preload: true,
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background font-sans">
        {/* Background pattern */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]" />
        </div>

        {/* Main content */}
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />

        {/* Overlay for mobile menu */}
        <div id="mobile-menu-overlay" />
      </body>
    </html>
  );
}
