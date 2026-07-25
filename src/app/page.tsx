'use client';

import Banner from '@/components/Banner/Banner';
import Categories from '@/components/Categories/Categories';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import Partners from '@/components/Partners/Partners';
import Brands from '@/components/Brands/Brands';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Categories />
      <RelatedProducts />
      <Partners />
      <RelatedProducts showTabs={false} showViewAll={true} />
      <Partners />
      <Brands />
      <RelatedProducts showTabs={false} showViewAll={true} />
      <Footer />
    </div>
  );
}
