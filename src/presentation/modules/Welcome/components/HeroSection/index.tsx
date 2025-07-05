import React from "react";
import {
  Container,
  TextArea,
  ImageArea,
  Title,
  Subtitle,
  CTAButton,
} from "./styled";
import doctorImg from "@/assets/images/welcome/doctora.svg";
import kidImg from "@/assets/images/welcome/doctoraPaciente.svg";
import videoCallImg from "@/assets/images/welcome/doctoraVirt.svg";

const HeroSection = () => (
  <Container>
    <TextArea data-testid="hero-text-area">
      <span>Consultas médicas presenciales y virtuales</span>
      <Title>Encuentra a tu especialista más cerca de ti</Title>
      <Subtitle>Encuentra tu médico ideal</Subtitle>
      <CTAButton>Buscar médico</CTAButton>
    </TextArea>
    <ImageArea data-testid="hero-image-area">
      <div className="imagesWrapper">
        <img src={doctorImg} alt="Doctora" />
        <img src={kidImg} alt="Doctora y paciente" />
      </div>
      <img src={videoCallImg} alt="Videollamada médica" />
    </ImageArea>
  </Container>
);

export default HeroSection;
