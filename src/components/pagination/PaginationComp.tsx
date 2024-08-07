import { PaginationProps } from "@/types/recipe.types";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const PaginationComp = ({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) => {
  
  const handlePreviousClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePageClick =
    (page: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      handlePageChange(page);
    };

  return (
    <div className="mt-5 mb-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePreviousClick} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink href="#" onClick={handlePageClick(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNextClick} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComp;
