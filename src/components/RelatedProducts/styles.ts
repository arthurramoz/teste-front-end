'use client';

import styled from 'styled-components';

export const RelatedProductsContainer = styled.section`
  width: 100%;
  padding: 50px 60px 30px 60px;
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  overflow-x: auto;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ViewAllLink = styled.a`
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #3f3f40;
  text-decoration: none;
  margin-top: -12px;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const TabItem = styled.button<{ $isActive: boolean }>`
  flex: 1;
  min-width: 140px;
  height: 44px;
  background: transparent;
  border: none;
  border-right: 1px solid #bdbdbd;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
  color: ${({ $isActive }) => ($isActive ? '#3019B2' : '#3B3B3B')};
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: #3019b2;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  ${({ $direction }) =>
    $direction === 'left' ? 'left: -50px;' : 'right: -50px;'}
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: transform 0.2s ease, background-color 0.2s ease;

  svg {
    width: 27px;
    height: 27px;
    fill: #3b3b3b;
  }

  @media (max-width: 768px) {
    ${({ $direction }) =>
      $direction === 'left' ? 'left: 0px;' : 'right: 0px;'}
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductCard = styled.div`
  width: 100%;
  max-width: 304px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
  padding: 20px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 228px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  img {
    width: 100%;
    max-width: 220px;
    height: 200px;
    object-fit: contain;
  }
`;

export const ProductDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0%;
  color: #3f3f40;
  margin-bottom: 12px;
`;

export const OldPrice = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #808080;
  text-decoration: line-through;
  display: block;
`;

export const CurrentPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #393939;
  display: block;
  margin-top: 2px;
`;

export const Installments = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #393939;
  display: block;
  margin-top: 4px;
`;

export const Shipping = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  display: block;
  margin-top: 6px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #283496;
  }
`;
