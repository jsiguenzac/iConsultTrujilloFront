import React from 'react';
import {
    PaginationWrapper,
    PageButton,
    Ellipsis
} from './styled';

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 6);

    return (
        <PaginationWrapper>
            <PageButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                &lt;
            </PageButton>

            {pages.map((page) => (
                <PageButton
                    key={page}
                    active={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </PageButton>
            ))}

            {totalPages > 6 && <Ellipsis>...</Ellipsis>}

            <PageButton
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &gt;
            </PageButton>
        </PaginationWrapper>
    );
};

export default Pagination;