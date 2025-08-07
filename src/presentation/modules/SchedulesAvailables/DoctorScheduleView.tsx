import React from 'react';
import DoctorProfileCard from '@/presentation/components/DoctorProfileCard';
import AvailabilityHeader from './components/AvailabilityHeader';
import WeeklyCalendar from '@/presentation/reusables/WeeklyCalendar';
import { PageContainer, ContentWrapper } from './styled';
import { DoctorInfo, ScheduleSlot } from './types';
import { FooterArea } from '../Home/styles';
import FooterView from '@/presentation/components/footer/FooterView';

const dummyDoctor: DoctorInfo = {
    name: 'Dr. Jack Sparrow',
    email: 'jacks99@gmail.com',
    city: 'Trujillo',
    address: 'Av. Nicolas de Pierola 786',
    rating: 4.9,
    reviews: 68,
    avatar: 'https://tse1.mm.bing.net/th/id/OIP._N3gdEz_ljf8-J_majj9RQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    note: 'Atiende a personas mayores y niños de 10 años a más'
};

const dummySchedule: ScheduleSlot[] = [
    {
        day: 'Lun 05',
        today: true,
        schedules: [
            { time: '08:00', status: 'D', modality: 'V' },
            { time: '09:00', status: 'O', modality: 'P' },
            { time: '10:00', status: 'O', modality: 'P' },
            { time: '19:00', status: 'R', modality: 'V' },
            { time: '20:00', status: 'O', modality: 'P' },
        ]
    },
    {
        day: 'Mar 06',
        today: false,
        schedules: [
            { time: '09:00', status: 'R', modality: 'V' },
            { time: '20:00', status: 'D', modality: 'V' }
        ]
    },
    {
        day: 'Mié 07',
        today: false,
        schedules: [
            { time: '20:00', status: 'O', modality: 'V' },
            { time: '21:00', status: 'D', modality: 'P' }
        ]
    },
    {
        day: 'Jue 08',
        today: false,
        schedules: []
    },
    {
        day: 'Vie 09',
        today: false,
        schedules: [
            { time: '21:00', status: 'D', modality: 'P' }
        ]
    }
];

const DoctorScheduleView = () => (
    <>
        <PageContainer>
            <DoctorProfileCard doctor={dummyDoctor} />
            <ContentWrapper>
                <AvailabilityHeader />
                <WeeklyCalendar schedule={dummySchedule} />
            </ContentWrapper>
        </PageContainer>
        <FooterArea>
            <FooterView />
        </FooterArea>
    </>
);

export default DoctorScheduleView;
