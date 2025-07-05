import React from 'react';
import { SearchWrapper, Input, Dropdown, DropdownItem, Icon } from './styled';

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    suggestions?: string[];
    onSelect: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange, placeholder = 'Buscar...', suggestions = [], onSelect }) => {
    return (
        <SearchWrapper>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            <Icon className="fas fa-chevron-down" />
            {suggestions.length > 0 && (
                <Dropdown>
                    {suggestions.map((item, index) => (
                        <DropdownItem key={index} onClick={() => onSelect(item)}>
                            {item}
                        </DropdownItem>
                    ))}
                </Dropdown>
            )}
        </SearchWrapper>
    );
};

export default SearchBar;