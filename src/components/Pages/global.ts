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
