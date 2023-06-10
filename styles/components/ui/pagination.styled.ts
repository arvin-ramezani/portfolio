import styled from 'styled-components';

export const StyledPagination = styled.div`
  width: fit-content;
  margin: 2rem 0 0 auto;
`;
export const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & button {
    font-size: 0.6rem;
    font-weight: 300;
    border-radius: 5rem;
    letter-spacing: 1px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5rem;
  }
`;

export const PaginationSelectBox = styled.select`
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  & option {
    cursor: pointer;
  }
`;
