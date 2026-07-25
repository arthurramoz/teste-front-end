'use client';

import React, { useState } from 'react';
import {
  Overlay,
  ModalContent,
  CloseButton,
  ModalImageWrapper,
  ModalInfo,
  ModalTitle,
  ModalPrice,
  ModalDescription,
  MoreDetails,
  ModalActions,
  QuantityContainer,
  ModalBuyButton,
} from './styles';

export interface Product {
  id: number;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const formattedQuantity = String(quantity).padStart(2, '0');

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          ✕
        </CloseButton>

        <ModalImageWrapper>
          <img
            src={product.photo}
            alt={product.productName}
            onError={e => {
              (e.target as HTMLImageElement).src = '/products/iphone.png';
            }}
          />
        </ModalImageWrapper>

        <ModalInfo>
          <ModalTitle>{product.productName}</ModalTitle>
          <ModalPrice>{formattedPrice}</ModalPrice>

          <ModalDescription>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </ModalDescription>

          <MoreDetails href="#">Veja mais detalhes do produto &gt;</MoreDetails>

          <ModalActions>
            <QuantityContainer>
              <button type="button" onClick={handleDecrease}>
                —
              </button>
              <span>{formattedQuantity}</span>
              <button type="button" onClick={handleIncrease}>
                +
              </button>
            </QuantityContainer>

            <ModalBuyButton type="button" onClick={onClose}>
              COMPRAR
            </ModalBuyButton>
          </ModalActions>
        </ModalInfo>
      </ModalContent>
    </Overlay>
  );
};

export default ProductModal;
