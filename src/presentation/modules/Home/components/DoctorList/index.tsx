import React from 'react';
import {
    Container,
    ListContainer
} from './styled';
import DoctorCard from '../DoctorCard';
import Pagination from '@/presentation/reusables/Pagination';
import Spinner from '@/presentation/components/Spinner';

interface Doctor {
    name: string;
    specialty: string;
    image: string;
    modalities: string[];
    address: string;
    price: number;
}

interface DoctorListProps {
    isLoading?: boolean;
    error?: string;
    doctors: Doctor[];
    totalCount: number;
    currentPage: number;
}

const DoctorList = ({ doctors, totalCount, currentPage, isLoading }: DoctorListProps) => {
    return (
        <Container>
            {isLoading && <Spinner text='Cargando médicos...' />}
            {!isLoading && (
                <>
                    <ListContainer>
                        {doctors?.map((doctor, index) => (
                            <DoctorCard
                                key={index}
                                name={doctor.name}
                                specialty={doctor.specialty}
                                image={doctor.image}
                                modalities={doctor.modalities}
                                address={doctor.address}
                                price={doctor.price}
                            />
                        ))}
                    </ListContainer>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(totalCount / 50)}
                        onPageChange={(page) => console.log(`Cambiando a la página ${page}`)}
                    />
                </>
            )}
        </Container>
    );
};

export default DoctorList;