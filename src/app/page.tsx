'use client';

import Banner from '@/components/Banner/Banner';
import Categories from '@/components/Categories/Categories';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import Partners from '@/components/Partners/Partners';
import Brands from '@/components/Brands/Brands';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <header role="banner">
        <Banner />
      </header>
      <main>
        <section aria-label="Categorias">
          <Categories />
        </section>
        <section aria-label="Produtos Relacionados">
          <RelatedProducts />
        </section>
        <section aria-label="Parceiros">
          <Partners />
        </section>
        <section aria-label="Mais Produtos">
          <RelatedProducts showTabs={false} showViewAll={true} />
        </section>
        <section aria-label="Nossos Parceiros">
          <Partners />
        </section>
        <section aria-label="Marcas">
          <Brands />
        </section>
        <section aria-label="Produtos em Destaque">
          <RelatedProducts showTabs={false} showViewAll={true} />
        </section>
      </main>
      <Footer />
    </>
  );
}

