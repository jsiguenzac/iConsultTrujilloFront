import React from 'react';
import { Card, Avatar, Info, Name, City, Email, Address, Rating, Note } from './styled';
import { DoctorInfo } from '@/presentation/modules/SchedulesAvailables/types';

interface Props {
    doctor: DoctorInfo;
}

const DoctorProfileCard = ({ doctor }: Props) => (
    <Card>
        <Avatar src={doctor.avatar} alt={doctor.name} />
        <Info>
            <Name>{doctor.name}</Name>
            <Email>{doctor.email}</Email>
            <City>{doctor.city}</City>
            <Address>{doctor.address}</Address>
            <Rating>⭐ {doctor.rating} ({doctor.reviews} Calificaciones)</Rating>
            <Note>{doctor.note}</Note>
        </Info>
    </Card>
);

export default DoctorProfileCard;
