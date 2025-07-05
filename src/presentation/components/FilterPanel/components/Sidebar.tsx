import React, { useEffect, useRef } from 'react';
import {
    FiltersWrapper,
    CloseButtonWrapper,
    CloseButton,
    GroupHeader
} from './styled';

import UserCard from '../../UserCard';
import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import ModalityFilter from './ModalityFilter';
import FilterButtons from './FilterButtons';
import useIsMobile from '@/presentation/hooks/useIsMobile';

type Props = {
    open: boolean;
    onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
    const isMobile = useIsMobile(true);
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Click fuera para cerrar (solo móvil)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMobile &&
                open &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (open && isMobile) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [open, isMobile, onClose]);

    if (!isMobile) {
        return (
            <FiltersWrapper ref={sidebarRef} data-testid="sidebar-desktop">
                <GroupHeader>
                    <UserCard />
                </GroupHeader>
                <DateFilter />
                <PriceFilter />
                <ModalityFilter />
                <FilterButtons />
            </FiltersWrapper>
        );
    }

    // Móvil: mostrar solo si está abierto
    if (!open) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1599,
                display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 1
                }}
            />
            <FiltersWrapper
                ref={sidebarRef}
                className="active"
                data-testid="sidebar-mobile"
                style={{ zIndex: 2 }}
            >
                <GroupHeader>
                    <UserCard />
                    <CloseButtonWrapper>
                        <CloseButton onClick={onClose}>×</CloseButton>
                    </CloseButtonWrapper>
                </GroupHeader>
                <DateFilter />
                <PriceFilter />
                <ModalityFilter />
                <FilterButtons />
            </FiltersWrapper>
        </div>
    );
};

export default Sidebar;
