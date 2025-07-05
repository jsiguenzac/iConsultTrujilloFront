import React from 'react';
import DoctorProfileCard from '@/presentation/components/DoctorProfileCard';
import AvailabilityHeader from './components/AvailabilityHeader';
import WeeklyCalendar from '@/presentation/reusables/WeeklyCalendar';
import { PageContainer, ContentWrapper } from './styled';
import { DoctorInfo, ScheduleSlot } from './types';
import Header from '../Home/components/HomeHeader';
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
    { day: 'Lun 05', time: '08:00', status: 'available_virtual' },
    { day: 'Lun 05', time: '09:00', status: 'occupied' },
    { day: 'Mar 06', time: '09:00', status: 'available_virtual' },
    { day: 'Mié 07', time: '09:00', status: 'occupied' },
    { day: 'Vie 09', time: '08:00', status: 'available_presencial' },
    { day: 'Sáb 10', time: '09:00', status: 'occupied' },
];

const DoctorScheduleView = () => (
    <>
        <PageContainer>
            <Header
                avatarSrc="https://scontent.flim18-2.fna.fbcdn.net/v/t39.30808-1/495727835_3146161048871182_6283638010870078510_n.jpg?stp=c0.466.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHbfySSiGUHnRaqH-D-EmxVLUxj0N5Am4UtTGPQ3kCbhUM93ZRGD9wtZtOJzAD3Uq42oRkYvklM-NwpFwJE7wqY&_nc_ohc=TluVHu0sTQsQ7kNvwHLM5-5&_nc_oc=AdkKpkB6RJIijJFReD2OPtdLz5E91NWfAAJRsMcSV7Vz6QBSYvtOIljjqFNxeVBg5F0&_nc_zt=24&_nc_ht=scontent.flim18-2.fna&_nc_gid=2HyeX81_tlPk8DY51t0THg&oh=00_AfNbJV037lwiWmAL4yAV-OTDXE4UXraotkb3bOYXYSkjzw&oe=686D49FD"
                userName="Joel Sigüenza"
                onProfile={() => console.log('Ir a perfil')}
                onLogout={() => console.log('Cerrar sesión')}
            />
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
