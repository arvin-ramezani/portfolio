import React, { FC, useState, ChangeEventHandler } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

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
  const [pageCount] = useState(pagination.pageCount);
  const router = useRouter();
  const { t: translator } = useTranslation();

  const onPageSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
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
    <StyledPagination locale={router.locale}>
      <PaginationButtons>
        <Button
          text={translator('common:prev_pagination_btn')}
          onClick={onPrev}
          disabled={page <= 1}
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
          text={translator('common:next_pagination_btn')}
          onClick={onNext}
          disabled={page === pageCount}
        />
      </PaginationButtons>
    </StyledPagination>
  );
};

export default Pagination;
