import ReactPaginate, { ReactPaginateProps } from "react-paginate";

import * as S from "./styles";
import { useCallback } from "react";

interface Props extends ReactPaginateProps {
  onClick?: (selectedItem: { selected: number }) => void;
}

export const Pagination = ({ onClick, ...rest }: Props) => {
  const handlePageClick = useCallback(
    (selectedItem: { selected: number }) => {
      if (onClick) {
        onClick(selectedItem);
      }
    },
    [onClick]
  );

  return (
    <S.Container>
      <ReactPaginate
        {...rest}
        previousLabel="<"
        nextLabel=">"
        onPageChange={handlePageClick}
      />
    </S.Container>
  );
};
