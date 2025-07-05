import React from 'react';
import { FilterBlock, Title, RadioGroup } from '../styled';

const DateFilter: React.FC = () => (
    <FilterBlock>
        <Title>Fecha de Reserva</Title>
        <RadioGroup>
            {['Hoy', 'Mañana', 'Próximos 3 días', 'Próxima semana'].map(option => (
                <label key={option}>
                    <input type="radio" name="fecha" /> {option}
                </label>
            ))}
        </RadioGroup>
    </FilterBlock>
);

export default DateFilter;