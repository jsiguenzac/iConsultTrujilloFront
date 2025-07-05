import React from 'react';
import { Container, StatItem } from './styled';

const stats = [
    { label: 'Pacientes satisfechos', value: '30,000,000+' },
    { label: 'Especialistas', value: '409+' },
    { label: 'Horarios remotos y presenciales', value: '18+' },
];

const StatsSection = () => (
    <Container>
        {stats.map((stat, i) => (
            <StatItem key={i}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
            </StatItem>
        ))}
    </Container>
);

export default StatsSection;
