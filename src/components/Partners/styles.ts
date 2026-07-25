'use client';

import styled from 'styled-components';

export const PartnersContainer = styled.section`
  width: 100%;
  padding: 40px 0;
`;

export const PartnersGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PartnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.85) 100%
    ),
    url('/banner/banner parceiros.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 18px;
  padding: 40px;
`;

export const PartnerTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const PartnerSubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 130%;
  letter-spacing: 0%;
  max-width: 200px;
  margin-bottom: 16px;
`;

export const PartnerButton = styled.button`
  width: 144.7px;
  height: 48px;
  background-color: #f7ca11;
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }
`;
