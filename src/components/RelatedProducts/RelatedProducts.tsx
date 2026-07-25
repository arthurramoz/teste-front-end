'use client';

import React, { useState, useEffect } from 'react';
import {
  Center,
  SectionTitleContainer,
  TitleDividerLine,
  SectionTitle,
} from '../Pages/global';
import ProductModal, { Product } from '../ProductModal/ProductModal';
import {
  RelatedProductsContainer,
  TabsContainer,
  TabItem,
  ViewAllLink,
  CarouselWrapper,
  NavButton,
  ProductsGrid,
  ProductCard,
  ProductImageWrapper,
  ProductDescription,
  OldPrice,
  CurrentPrice,
  Installments,
  Shipping,
  BuyButton,
} from './styles';

const CATEGORY_TABS = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

interface RelatedProductsProps {
  showTabs?: boolean;
  showViewAll?: boolean;
}

const API_URL = '/api/products';

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  showTabs = true,
  showViewAll = false,
}) => {
  const [activeTab, setActiveTab] = useState<string>('CELULAR');
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data && data.success && Array.isArray(data.products)) {
          const apiProducts: Product[] = data.products.map(
            (item: any, index: number) => ({
              id: index + 1,
              productName: item.productName,
              descriptionShort: item.descriptionShort,
              photo: item.photo || '/products/iphone.png',
              price: item.price,
              oldPrice: Math.round(item.price * 1.1),
            }),
          );
          setProducts(apiProducts);
        }
      } catch (error) {
        console.error('Erro ao buscar produtos da API Econverse:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev <= 0 ? Math.max(0, products.length - 4) : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 4 >= products.length ? 0 : prev + 1));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <RelatedProductsContainer>
      <Center>
        <SectionTitleContainer>
          <TitleDividerLine />
          <SectionTitle>Produtos relacionados</SectionTitle>
          <TitleDividerLine />
        </SectionTitleContainer>

        {showViewAll && <ViewAllLink href="#">Ver todos</ViewAllLink>}

        {showTabs && (
          <TabsContainer>
            {CATEGORY_TABS.map(tab => (
              <TabItem
                key={tab}
                $isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </TabItem>
            ))}
          </TabsContainer>
        )}

        <CarouselWrapper>
          <NavButton
            $direction="left"
            type="button"
            aria-label="Anterior"
            onClick={handlePrev}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </NavButton>

          <ProductsGrid>
            {visibleProducts.map(product => (
              <ProductCard key={product.id}>
                <div>
                  <ProductImageWrapper
                    onClick={() => handleOpenModal(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={product.photo}
                      alt={product.productName}
                      onError={e => {
                        (e.target as HTMLImageElement).src =
                          '/products/iphone.png';
                      }}
                    />
                  </ProductImageWrapper>

                  <ProductDescription>
                    {product.descriptionShort}
                  </ProductDescription>

                  <OldPrice>
                    {product.oldPrice?.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </OldPrice>

                  <CurrentPrice>
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </CurrentPrice>

                  <Installments>
                    ou 2x de{' '}
                    {(product.price / 2).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}{' '}
                    sem juros
                  </Installments>

                  <Shipping>Frete grátis</Shipping>
                </div>

                <BuyButton
                  type="button"
                  onClick={() => handleOpenModal(product)}
                >
                  COMPRAR
                </BuyButton>
              </ProductCard>
            ))}
          </ProductsGrid>

          <NavButton
            $direction="right"
            type="button"
            aria-label="Próximo"
            onClick={handleNext}
          >
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </NavButton>
        </CarouselWrapper>
      </Center>

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;
