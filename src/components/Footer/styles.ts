'use client';

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NewsletterSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.terciary};
  padding: 40px 0;
`;

export const NewsletterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NewsletterText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;

  h3 {
    font-family: 'Outfit', 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #ffffff;
    line-height: 120%;
    letter-spacing: 0%;
    margin-bottom: 8px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #ffffff;
    line-height: 18px;
    letter-spacing: 0%;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormInput = styled.input`
  width: 233px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #281e48;
  border-radius: 8px;
  padding: 0 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #3f3f40;
  outline: none;

  &::placeholder {
    color: #9f9f9f;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormButton = styled.button`
  width: 157px;
  height: 42px;
  background-color: #f7ca11;
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  border-radius: 8px;
  padding: 15px 40px;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
  cursor: pointer;

  input {
    width: 14px;
    height: 14px;
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MainFooter = styled.div`
  width: 100%;
  background-color: #f6f5f2;
  padding: 50px 0;
`;

export const MainFooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;

  img {
    width: 160px;
    height: auto;
    object-fit: contain;
    margin-bottom: 16px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #3f3f40;
    line-height: 1.4;
    margin-bottom: 24px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: #3f3f40;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }
  }
`;

export const LinksSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  border-left: 1px solid #dedfe4;
  padding-left: 60px;

  @media (max-width: 968px) {
    gap: 30px;
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    flex-wrap: wrap;
  }
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 130px;

  h4 {
    font-family: 'Work Sans', 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #4e4e4e;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li a {
      font-family: 'Work Sans', 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 300;
      color: #666666;
      text-decoration: none;
      transition: color 0.2s ease;
    }
  }
`;

export const CopyrightBar = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 16px 0;
  text-align: center;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #707070;
  }
`;
