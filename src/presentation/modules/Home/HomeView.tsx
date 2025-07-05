import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  MainContent,
  FiltersArea,
  DoctorArea,
  MapArea,
  FooterArea
} from './styles';

import FooterView from '../../components/footer/FooterView';
import FiltersPanel from '../../components/FilterPanel';
import DoctorList from './components/DoctorList';
import MapSection from '@/presentation/reusables/MapSection';
import Header from './components/HomeHeader';
import { CountText, HeaderDocList, Title } from './components/DoctorList/styled';
import SearchBar from '@/presentation/reusables/SearchBar';

const HomeView = (props: any) => {
  const { data } = props;
  const dispatch = useDispatch();
  const navs = [
    { name: 'Inicio', path: '/' },
    { name: 'Historial', path: '/historial' },
    { name: 'Citas Pendientes', path: '/citas-pendientes' },
  ];


  return (
    <Container data-testid="cmp-home-view">
      <Header
        avatarSrc="https://scontent.flim18-2.fna.fbcdn.net/v/t39.30808-1/495727835_3146161048871182_6283638010870078510_n.jpg?stp=c0.466.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHbfySSiGUHnRaqH-D-EmxVLUxj0N5Am4UtTGPQ3kCbhUM93ZRGD9wtZtOJzAD3Uq42oRkYvklM-NwpFwJE7wqY&_nc_ohc=TluVHu0sTQsQ7kNvwHLM5-5&_nc_oc=AdkKpkB6RJIijJFReD2OPtdLz5E91NWfAAJRsMcSV7Vz6QBSYvtOIljjqFNxeVBg5F0&_nc_zt=24&_nc_ht=scontent.flim18-2.fna&_nc_gid=2HyeX81_tlPk8DY51t0THg&oh=00_AfNbJV037lwiWmAL4yAV-OTDXE4UXraotkb3bOYXYSkjzw&oe=686D49FD"
        userName="Joel Sigüenza"
        onProfile={() => console.log('Ir a perfil')}
        onLogout={() => console.log('Cerrar sesión')}
      />
      <MainContent>
        <FiltersArea>
          <FiltersPanel />
        </FiltersArea>

        <DoctorArea>
          <div>
            <Title style={{ marginTop: 0 }}>Filtra por especialidad</Title>
            <SearchBar
              placeholder='Escribe la especialidad que desea...'
              value=''
              onChange={(e) => console.log(e)}
              onSelect={(option) => console.log(option)}
            />
            <HeaderDocList>
              <Title>Listado de especialistas</Title>
              <CountText>
                {data?.doctors?.length > 0 ? `Mostrando ${data?.doctors?.length} de ${data?.totalCount} resultados` : 'No hay médicos disponibles'}
              </CountText>
            </HeaderDocList>
            <DoctorList
              doctors={data?.doctors}
              totalCount={data?.totalCount}
              currentPage={data?.currentPage}
              isLoading={data?.isLoading}
            />
          </div>
        </DoctorArea>

        <MapArea>
          <MapSection doctors={data?.doctors} />
        </MapArea>
      </MainContent>
      <FooterArea>
        <FooterView />
      </FooterArea>
    </Container>
  );
};

export default HomeView;
