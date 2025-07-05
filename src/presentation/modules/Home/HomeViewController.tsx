import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomeView from './HomeView';
import constants from '@/core/constants';

export const handlerRedirectNewPage = (url: any, e?: any) => window.open(url, '_blank');

const HomeViewController: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerRedirectPage = (url: string) => history.push(url);

  const dataDoctors = [
    {
      name: 'Dr. Juan Pérez',
      specialty: 'Cardiología',
      image: 'https://tse1.mm.bing.net/th/id/OIP._N3gdEz_ljf8-J_majj9RQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      modalities: ['P', 'V'],
      address: 'Av. Siempre Viva 123',
      price: 100,
    },
    {
      name: 'Dra. Ana Gómez',
      specialty: 'Psicología',
      image: 'https://i.pinimg.com/736x/f5/c1/2d/f5c12d5e43374a4a5cab76b859c115b0.jpg',
      modalities: ['P'],
      address: 'Calle Falsa 456',
      price: 80,
    },
    {
      name: 'Dra. Mariana Sánchez',
      specialty: 'Pediatría',
      image: 'https://tse1.mm.bing.net/th/id/OIP.tXqAUmHsm7AhOnQkDiZFcwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      modalities: ['P'],
      address: 'Calle Falsa 456',
      price: 80,
    },
    {
      name: 'Dra. Ana Gómez',
      specialty: 'Pediatría',
      image: 'https://tse2.mm.bing.net/th/id/OIP.yK7U71hhD7LXd__cmInLSwHaFl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      modalities: ['P', 'V'],
      address: 'Calle Falsa 456',
      price: 80,
    },
    {
      name: 'Dr. Javier Gómez',
      specialty: 'Pediatría',
      image: 'https://img.freepik.com/fotos-premium/retrato-feliz-o-medico-tomandose-selfie-foto-perfil-redes-sociales-hospital-salud-descanso-hombre-relajante-o-cara-trabajador-medico-tomando-fotos-orgullo-o-sonriendo-oficina_590464-115372.jpg',
      modalities: ['P'],
      address: 'Calle Falsa 456',
      price: 80,
    },
  ]
  const data = {
    doctors: dataDoctors,
    isLoading: false,
    totalCount: dataDoctors.length,
    currentPage: 1,
  };

  return (
    <HomeView
      data={data}
      handlerRedirectNewPage={handlerRedirectNewPage}
      handlerRedirectPage={handlerRedirectPage}
      name=""
      isLoading={data.isLoading}
    />
  );
};
export default HomeViewController;
