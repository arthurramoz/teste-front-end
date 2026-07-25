'use client';

import styled from 'styled-components';

export const Center = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.terciary};
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.4;
`;

export const SectionContainer = styled.section`
  width: 100%;
  padding: 40px 0;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 34px;
  margin-bottom: 24px;
`;

export const TitleDividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #DEDFE4;
`;

export const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  color: #3442B5;
  text-align: center;
  white-space: nowrap;
`;

