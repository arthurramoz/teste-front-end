'use client';

import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
  max-width: 769px;
  height: auto;
  position: relative;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 22px;
  font-weight: 300;
  color: #707070;
  cursor: pointer;
  z-index: 2;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImageWrapper = styled.div`
  width: 300px;
  min-height: 320px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    max-width: 220px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 240px;
  }
`;

export const ModalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 30px;
  gap: 0;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const ModalTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #3b3b3b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

export const ModalPrice = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #3b3b3b;
  margin-bottom: 20px;
`;

export const ModalDescription = styled.p`
  font-family: 'Work Sans', 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  color: #9f9f9f;
  line-height: 150%;
  letter-spacing: 5%;
  max-width: 290px;
  margin-bottom: 8px;
`;

export const MoreDetails = styled.a`
  font-family: 'Work Sans', 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  margin-bottom: 28px;
  cursor: pointer;
`;

export const ModalActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #ffffff;
  overflow: hidden;

  button {
    flex: 1;
    height: 100%;
    background: transparent;
    border: none;
    font-size: 22px;
    font-weight: 400;
    color: #271c47;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease;
  }

  span {
    flex: 1;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #271c47;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalBuyButton = styled.button`
  width: 188px;
  height: 36px;
  background-color: #f7ca11;
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  border-radius: 6px;
  padding: 11px 65px;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
`;
