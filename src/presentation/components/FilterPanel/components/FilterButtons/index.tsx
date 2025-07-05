import React from 'react';
import { ButtonsWrapper } from './styled';

const FilterButtons: React.FC = () => (
    <ButtonsWrapper>
        <button className="apply">Aplicar Filtros</button>
        <button className="clear">Limpiar Filtros</button>
    </ButtonsWrapper>
);

export default FilterButtons;