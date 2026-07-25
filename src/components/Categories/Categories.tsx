'use client';

import React, { useState } from 'react';
import { Center } from '../Pages/global';
import {
  CategoriesContainer,
  CategoryItemWrapper,
  CategoryBox,
  CategoryLabel,
} from './styles';

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

const CATEGORIES_LIST: CategoryItem[] = [
  { id: 'tech', name: 'Tecnologia', icon: '/categories/tech.png' },
  {
    id: 'supermarket',
    name: 'Supermercado',
    icon: '/categories/supermarket.png',
  },
  { id: 'drinks', name: 'Bebidas', icon: '/categories/whiskey.png' },
  { id: 'tools', name: 'Ferramentas', icon: '/categories/ferramentas.png' },
  { id: 'health', name: 'Saúde', icon: '/categories/cuidados-de-saude.png' },
  {
    id: 'fitness',
    name: 'Esportes e Fitness',
    icon: '/categories/corrida.png',
  },
  { id: 'fashion', name: 'Moda', icon: '/categories/moda.png' },
];

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('tech');

  return (
    <Center style={{ width: '1160px' }}>
      <CategoriesContainer>
        {CATEGORIES_LIST.map(category => {
          const isActive = selectedCategory === category.id;
          return (
            <CategoryItemWrapper
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              $isActive={isActive}
              type="button"
            >
              <CategoryBox $isActive={isActive}>
                <img src={category.icon} alt={category.name} />
              </CategoryBox>
              <CategoryLabel $isActive={isActive}>
                {category.name}
              </CategoryLabel>
            </CategoryItemWrapper>
          );
        })}
      </CategoriesContainer>
    </Center>
  );
};

export default Categories;
