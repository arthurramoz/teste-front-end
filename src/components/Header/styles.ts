'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopBar = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBorder};
  padding: 8px 0;
`;

export const TopBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 16px;
    flex-wrap: wrap;
  }
`;

export const TopBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.grayText};

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`;

export const MainBar = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBorder};
  padding: 14px 0;
`;

export const MainBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;

export const SearchBox = styled.div`
  flex: 1;
  max-width: 650px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.grayBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.terciary};
  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayText};
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

interface Prop {
  small?: boolean;
}

export const ActionIcon = styled.button<Prop>`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${({ small }) => (small ? '20px' : '24px')};
    height: ${({ small }) => (small ? '20px' : '24px')};
    object-fit: contain;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  padding: 12px 0;
`;

export const NavBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface NavCategoryProps {
  highlighted?: boolean;
}

export const NavCategory = styled.a<NavCategoryProps>`
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.secondary : theme.colors.grayText};
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;
