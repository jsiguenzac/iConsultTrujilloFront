import React from 'react';
import { FilterBlock, Title, RadioGroup } from '../styled';

const ModalityFilter: React.FC = () => (
    <FilterBlock>
        <Title>Modalidad</Title>
        <RadioGroup>
            {['Presencial', 'Virtual', 'Ambos'].map(option => (
                <label key={option}>
                    <input type="checkbox" defaultChecked={option !== 'Ambos'} /> {option}
                </label>
            ))}
        </RadioGroup>
    </FilterBlock>
);

export default ModalityFilter;