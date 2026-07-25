'use client';

import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 0;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryItemWrapper = styled.button<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  width: 128px;
  flex-shrink: 0;
`;

export const CategoryBox = styled.div<{ $isActive: boolean }>`
  width: 128px;
  height: 128px;
  border-radius: 10px;
  background-color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#F4F4F4')};
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CategoryLabel = styled.span<{ $isActive: boolean }>`
  margin-top: 22px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  color: ${({ $isActive }) => ($isActive ? '#3019B2' : '#4E4E4E')};
  text-align: center;
  line-height: 100%;
  letter-spacing: 0%;
  white-space: nowrap;
`;
