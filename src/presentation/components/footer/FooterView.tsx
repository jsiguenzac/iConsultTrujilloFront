// src/components/Footer/index.tsx
import React from 'react';
import {
  // FooterContainer,
  FooterContent,
  FooterColumn,
  Logo,
  Title,
  Text,
  LinkItem,
  Icon,
  BottomText,
} from './styled';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

// import { FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterView = () => {
  return (
    <>
      <FooterContent>
        <FooterColumn>
          <Logo>iConsult Trujillo</Logo>
        </FooterColumn>

        <FooterColumn>
          <Title>Soporte</Title>
          <Text>
            <Icon><FaEnvelope /></Icon> soporte-consult@gmail.com
          </Text>
          <Text>
            <Icon><FaPhone /></Icon> +880 123 456 789
          </Text>
          <Text>
            <Icon><FaPhone /></Icon> +880 123 456 789
          </Text>
        </FooterColumn>

        <FooterColumn>
          <Title>Acerca de</Title>
          <LinkItem>Nosotros</LinkItem>
          <LinkItem>Servicios</LinkItem>
          <LinkItem>Reservas</LinkItem>
          <LinkItem>Médicos</LinkItem>
        </FooterColumn>

        <FooterColumn>
          <Title>Otros servicios</Title>
          <LinkItem>Diseño gráfico</LinkItem>
          <LinkItem>Diseño web</LinkItem>
          <LinkItem>Diseño móvil</LinkItem>
          <LinkItem>Programación</LinkItem>
        </FooterColumn>
      </FooterContent >

      <BottomText>
        © Todos los derechos reservados - iConsult Trujillo 2025
      </BottomText>
    </>
  );
};

export default FooterView;
