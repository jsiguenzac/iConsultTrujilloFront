import React from 'react';
import { MenuWrapper, MenuButton } from './filtersToggleMenu.styled';

type Props = {
    onToggle: () => void;
};

const FiltersToggleMenu: React.FC<Props> = ({ onToggle }) => (
    <MenuWrapper>
        <MenuButton onClick={onToggle}>☰ Filtros</MenuButton>
        {/* agregar más acciones aquí */}
    </MenuWrapper>
);

export default FiltersToggleMenu;
