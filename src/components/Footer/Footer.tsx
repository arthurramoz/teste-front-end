'use client';

import React, { useState } from 'react';
import { Center } from '../Pages/global';
import {
  FooterContainer,
  NewsletterSection,
  NewsletterContent,
  NewsletterText,
  NewsletterForm,
  FormRow,
  FormInput,
  FormButton,
  CheckboxContainer,
  MainFooter,
  MainFooterContent,
  BrandColumn,
  SocialIcons,
  LinksSection,
  LinksColumn,
  CopyrightBar,
} from './styles';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setAcceptedTerms(false);
  };

  return (
    <FooterContainer>
      <NewsletterSection>
        <Center>
          <NewsletterContent>
            <NewsletterText>
              <h3>Inscreva-se na nossa newsletter</h3>
              <p>
                Assine a nossa newsletter e receba as novidades e conteúdos
                exclusivos da Econverse.
              </p>
            </NewsletterText>

            <NewsletterForm onSubmit={handleSubmit}>
              <FormRow>
                <FormInput
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormButton type="submit">INSCREVER</FormButton>
              </FormRow>

              <CheckboxContainer>
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <span>Aceito os termos e condições</span>
              </CheckboxContainer>
            </NewsletterForm>
          </NewsletterContent>
        </Center>
      </NewsletterSection>

      <MainFooter>
        <Center>
          <MainFooterContent>
            <BrandColumn>
              <img src="/logo/logo.svg" alt="Econverse" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <SocialIcons>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </SocialIcons>
            </BrandColumn>

            <LinksSection>
              <LinksColumn>
                <h4>Institucional</h4>
                <ul>
                  <li>
                    <a href="#">Sobre Nós</a>
                  </li>
                  <li>
                    <a href="#">Movimento</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe conosco</a>
                  </li>
                </ul>
              </LinksColumn>

              <LinksColumn>
                <h4>Ajuda</h4>
                <ul>
                  <li>
                    <a href="#">Suporte</a>
                  </li>
                  <li>
                    <a href="#">Fale Conosco</a>
                  </li>
                  <li>
                    <a href="#">Perguntas Frequentes</a>
                  </li>
                </ul>
              </LinksColumn>

              <LinksColumn>
                <h4>Termos</h4>
                <ul>
                  <li>
                    <a href="#">Termos e Condições</a>
                  </li>
                  <li>
                    <a href="#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Troca e Devolução</a>
                  </li>
                </ul>
              </LinksColumn>
            </LinksSection>
          </MainFooterContent>
        </Center>
      </MainFooter>

      <CopyrightBar>
        <Center>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Center>
      </CopyrightBar>
    </FooterContainer>
  );
};

export default Footer;
