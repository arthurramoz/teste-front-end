import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
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
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
