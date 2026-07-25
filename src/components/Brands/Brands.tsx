'use client';

import React from 'react';
import { Center } from '../Pages/global';
import {
  BrandsContainer,
  BrandsTitle,
  BrandsList,
  BrandCard,
} from './styles';

const BRANDS_LIST = [1, 2, 3, 4, 5];

const Brands: React.FC = () => {
  return (
    <BrandsContainer>
      <Center>
        <BrandsTitle>Navegue por marcas</BrandsTitle>
        <BrandsList>
          {BRANDS_LIST.map((id) => (
            <BrandCard key={id}>
              <img src="/logo/logo.svg" alt="Econverse Marca" />
            </BrandCard>
          ))}
        </BrandsList>
      </Center>
    </BrandsContainer>
  );
};

export default Brands;
