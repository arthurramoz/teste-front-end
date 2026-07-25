import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import { Poppins, Outfit, Work_Sans } from 'next/font/google';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Teste Econverse - E-commerce',
  description: 'Teste Front-End Econverse',
  icons: {
    icon: '/logo/logo.svg',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${workSans.variable}`}>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
