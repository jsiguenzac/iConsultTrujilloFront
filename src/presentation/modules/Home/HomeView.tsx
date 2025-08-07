import React from 'react';
// import { useDispatch } from 'react-redux';

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
import { CountText, HeaderDocList, Title } from './components/DoctorList/styled';
import SearchBar from '@/presentation/reusables/SearchBar';

const HomeView = (props: any) => {
  const { data } = props;
  // const dispatch = useDispatch();
  return (
    <Container data-testid="cmp-home-view">
      <MainContent>
        <FiltersArea>
          <FiltersPanel />
        </FiltersArea>

        <DoctorArea>
          <div>
            <Title style={{ marginTop: 0 }}>Filtra por especialidad</Title>
            <SearchBar
              placeholder='Escriba la especialidad que desea...'
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
