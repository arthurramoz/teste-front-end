'use client';

import styled from 'styled-components';

export const BrandsContainer = styled.section`
  width: 100%;
  padding: 50px 0 30px;
`;

export const BrandsTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 40px;
`;

export const BrandsList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BrandCard = styled.div`
  width: 211px;
  height: 211px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.18);
  }

  img {
    width: 140px;
    height: auto;
    object-fit: contain;
  }
`;
