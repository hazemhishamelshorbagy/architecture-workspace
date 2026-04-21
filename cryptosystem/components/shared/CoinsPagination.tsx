'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';
import { useRouter } from 'next/navigation';
import { buildPageNumbers,  ELLIPSIS } from '@/lib/utils';
import clsx from 'clsx';

const CoinsPagination = ({ currentPage, totalPages, hasMorePages }: Pagination) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/coins?page=${page}`);
  };

  const pageNumbers = buildPageNumbers(currentPage, totalPages);
  const isLastPage = !hasMorePages || currentPage === totalPages;

  return (
    <Pagination id="coins-pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-control prev">
          <PaginationPrevious
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? 'control-disabled' : 'control-button'}
          />
        </PaginationItem>

       
          {pageNumbers.map((page, index) => (
            <PaginationItem className='pagination-pages' key={index}>
              {page === ELLIPSIS ? (
                <span className="ellipsis">...</span>
              ) : (
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  className={clsx('page-link', {
                    'page-link-active': currentPage === page,
                  })}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
      
        <PaginationItem className="pagination-control next">
          <PaginationNext
            onClick={() => !isLastPage && handlePageChange(currentPage + 1)}
            className={isLastPage ? 'control-disabled' : 'control-button'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CoinsPagination;