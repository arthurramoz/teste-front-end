'use client';

import React from 'react';
import { Center } from '../Pages/global';
import {
  HeaderContainer,
  TopBar,
  TopBarContent,
  TopBarItem,
  MainBar,
  MainBarContent,
  LogoWrapper,
  SearchBox,
  SearchInput,
  SearchButton,
  ActionsContainer,
  ActionIcon,
  NavBar,
  NavBarContent,
  NavCategory,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <Center>
          <TopBarContent>
            <TopBarItem>
              <img src="/icons/shield.svg" alt="Compra 100% segura" />
              <span>
                Compra <strong>100% segura</strong>
              </span>
            </TopBarItem>

            <TopBarItem>
              <img src="/icons/truck.svg" alt="Frete grátis" />
              <span>
                <strong>Frete grátis</strong> acima de R$ 200
              </span>
            </TopBarItem>

            <TopBarItem>
              <img src="/icons/creditcard.svg" alt="Parcele suas compras" />
              <span>
                <strong>Parcele</strong> suas compras
              </span>
            </TopBarItem>
          </TopBarContent>
        </Center>
      </TopBar>

      <MainBar>
        <Center>
          <MainBarContent>
            <LogoWrapper href="/">
              <img src="/logo/logo.svg" alt="Econverse" />
            </LogoWrapper>

            <SearchBox>
              <SearchInput
                type="text"
                placeholder="O que você está buscando?"
              />
              <SearchButton type="button" aria-label="Buscar">
                <img src="/icons/searchglass.svg" alt="Buscar" />
              </SearchButton>
            </SearchBox>

            <ActionsContainer>
              <ActionIcon small type="button" aria-label="Meus Pedidos">
                <img src="/icons/box.svg" alt="Meus Pedidos" />
              </ActionIcon>
              <ActionIcon type="button" aria-label="Meus Favoritos">
                <img src="/icons/heart.svg" alt="Meus Favoritos" />
              </ActionIcon>
              <ActionIcon type="button" aria-label="Minha Conta">
                <img src="/icons/user.svg" alt="Minha Conta" />
              </ActionIcon>
              <ActionIcon type="button" aria-label="Meu Carrinho">
                <img src="/icons/cart.svg" alt="Meu Carrinho" />
              </ActionIcon>
            </ActionsContainer>
          </MainBarContent>
        </Center>
      </MainBar>

      <NavBar>
        <Center>
          <NavBarContent>
            <NavCategory>Todas Categorias</NavCategory>
            <NavCategory>Supermercado</NavCategory>
            <NavCategory>Livros</NavCategory>
            <NavCategory>Moda</NavCategory>
            <NavCategory>Lançamentos</NavCategory>
            <NavCategory highlighted>Ofertas do Dia</NavCategory>
            <NavCategory>
              <img src="/icons/crown.svg" alt="Assinatura" />
              Assinatura
            </NavCategory>
          </NavBarContent>
        </Center>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
