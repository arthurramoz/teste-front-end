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
  title: 'Econverse | E-commerce de Tecnologia - Smartphones, Notebooks e Acessórios',
  description:
    'Encontre os melhores produtos de tecnologia com até 50% de desconto. Smartphones, notebooks, acessórios e muito mais. Frete grátis e parcelamento em até 12x.',
  keywords: [
    'e-commerce',
    'tecnologia',
    'smartphones',
    'notebooks',
    'acessórios',
    'promoções',
    'econverse',
    'loja online',
  ],
  authors: [{ name: 'Arthur Ramos' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Econverse | E-commerce de Tecnologia',
    description:
      'Encontre os melhores produtos de tecnologia com até 50% de desconto.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Econverse',
  },
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
