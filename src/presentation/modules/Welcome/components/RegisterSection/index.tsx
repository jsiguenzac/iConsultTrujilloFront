import React from 'react';
import { Container, Form, Input, Select, Button } from './styled';
import doctRegisterImg from '@/assets/images/welcome/docRegister.svg';

const RegisterSection = () => (
    <Container>
        <Form>
            <h3>Regístrate</h3>
            <Input placeholder="Nombres y Apellidos" />
            <Input placeholder="Correo" type="email" />
            <Input placeholder="Celular" />
            <Select>
                <option>Selecciona tu ciudad</option>
                <option>Trujillo</option>
                <option>Lima</option>
            </Select>
            <Button>Registrarme</Button>
            <a href="https://iconsult.pe/medicos" target="_blank" rel="noopener noreferrer">
                ¿Eres un profesional de la salud? Regístrate aquí
            </a>
        </Form>
        <img src={doctRegisterImg} alt="Fondo registro" />
    </Container>
);

export default RegisterSection;
