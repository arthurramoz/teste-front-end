'use client';

import styled from 'styled-components';

export const BannerContainer = styled.section`
  width: 100%;
  height: 390px;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('/banner/banner.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 822px;
`;

export const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const BannerSubtitle = styled.p`
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0;
  margin-bottom: 55px;

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const BannerButton = styled.button`
  width: 206px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  border-radius: 5px;
  padding: 7px 49px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
