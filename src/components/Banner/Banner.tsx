'use client';

import React from 'react';
import { Center } from '../Pages/global';
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerButton,
} from './styles';

const Banner = () => {
  return (
    <BannerContainer>
      <Center>
        <BannerContent>
          <BannerTitle>Venha conhecer nossas promoções</BannerTitle>
          <BannerSubtitle>
            <strong>50% Off</strong> <span>nos produtos</span>
          </BannerSubtitle>
          <BannerButton type="button">Ver produto</BannerButton>
        </BannerContent>
      </Center>
    </BannerContainer>
  );
};

export default Banner;
