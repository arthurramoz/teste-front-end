'use client';

import React from 'react';
import { Center } from '../Pages/global';
import {
  PartnersContainer,
  PartnersGrid,
  PartnerCard,
  PartnerTitle,
  PartnerSubtitle,
  PartnerButton,
} from './styles';

const Partners: React.FC = () => {
  return (
    <PartnersContainer>
      <Center>
        <PartnersGrid>
          <PartnerCard>
            <PartnerTitle>Parceiros</PartnerTitle>
            <PartnerSubtitle>
              Lorem ipsum dolor sit amet, consectetur
            </PartnerSubtitle>
            <PartnerButton type="button">CONFIRA</PartnerButton>
          </PartnerCard>

          <PartnerCard>
            <PartnerTitle>Parceiros</PartnerTitle>
            <PartnerSubtitle>
              Lorem ipsum dolor sit amet, consectetur
            </PartnerSubtitle>
            <PartnerButton type="button">CONFIRA</PartnerButton>
          </PartnerCard>
        </PartnersGrid>
      </Center>
    </PartnersContainer>
  );
};

export default Partners;
