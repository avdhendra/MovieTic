import { Btn, Container, PageNum } from "./pagination.style";

import React from 'react'


const Pagination = ({ currentPage, totalPages, setPage }) => {
 
   
  const handlePrev = () => {
		if (currentPage !== 1) {
			setPage(currentPage - 1)
		}
	};

	const handleNext = () => {
		if (currentPage !== totalPages) {
		setPage(currentPage + 1)
		}
	};

	if (totalPages === 0) return null;
    return (
      <Container>
        <Btn
          onClick={handlePrev}
          variant="contained"
          color="primary"
          type="button"
        >
          Prev
        </Btn>
        <PageNum variant="h4">{currentPage}</PageNum>
        <Btn
          onClick={handleNext}
          variant="contained"
          color="primary"
          type="button"
        >
          Next
        </Btn>
      </Container>
    );
};

export default Pagination