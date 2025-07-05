import React from 'react';
import { Container, Filters, DateNav } from './styled';

const AvailabilityHeader = () => (
    <Container>
        <div>
            <h3>HORARIOS DISPONIBLES</h3>
            <span>Dentista</span>
        </div>
        <Filters>
            <select>
                <option>Todos</option>
                <option>Virtual</option>
                <option>Presencial</option>
            </select>
            <input type="date" />
            <button>Limpiar</button>
        </Filters>
        <DateNav>
            <span>Semana del 05 - 11 Dic 2022</span>
            <div>
                <button>◀</button>
                <button>▶</button>
            </div>
        </DateNav>
    </Container>
);

export default AvailabilityHeader;
