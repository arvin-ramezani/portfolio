import React, { FC, useState, ChangeEventHandler } from 'react';

import { IHomePageGetRespose } from '@/pages/api';
import {
  PaginationButtons,
  PaginationSelectBox,
  StyledPagination,
} from '@/styles/components/ui/pagination.styled';
import Button from '../button/button';

interface PaginationProps {
  pagination: IHomePageGetRespose['courses']['pagination'];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({ pagination, setPage, page }) => {
  const [pageCount, setPageCount] = useState(pagination.pageCount);

  const onPageSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (pagination.count === +e.target.value) return;

    setPage(+e.target.value);
  };

  const onNext = () => {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  };

  const onPrev = () => {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };

  return (
    <StyledPagination>
      <PaginationButtons>
        <Button
          text="Previous"
          onClick={onPrev}
        />

        <PaginationSelectBox
          value={page}
          onChange={onPageSelect}
        >
          {Array(pagination.pageCount)
            .fill(null)
            .map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
        </PaginationSelectBox>

        <Button
          text="Next"
          onClick={onNext}
        />
      </PaginationButtons>
    </StyledPagination>
  );
};

export default Pagination;
