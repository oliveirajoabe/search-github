import { Button } from "../Button";
import * as S from "./styles";
import { Link as LinkRouter } from "react-router-dom";
import { Link, Star, ArrowDown, ArrowUp } from "phosphor-react";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import { Pagination } from "../Pagination";

interface Props {
  data: DataRepos[];
}
export const List = ({ data }: Props) => {
  const {
    fetchDetailsRepo,
    order,
    handleChangeOrder,
    totalRepos,
    setPage,
    page,
  } = useFetchGitHub();

  const handleChange = (value: Order) => {
    handleChangeOrder(value);
  };

  const pageCount = Math.ceil(totalRepos / 9);

  console.log(totalRepos);
  console.log(page);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return (
    <div>
      <S.Order>
        <span>Order: </span>
        {order === "asc" && (
          <button onClick={() => handleChange("desc")} title="desc">
            <ArrowUp />
          </button>
        )}

        {order === "desc" && (
          <button onClick={() => handleChange("asc")} title="asc">
            <ArrowDown />
          </button>
        )}
      </S.Order>
      <S.ListStyle>
        {data.map((tab) => (
          <S.ItemCard key={tab.id}>
            <S.Header>
              <h2>{tab.name}</h2>
              <S.WrapperStar>
                <Star /> {tab.stargazers_count}
              </S.WrapperStar>
            </S.Header>

            <S.LinkStyles href={tab.html_url} target="_blank">
              <small>
                <Link />
                <span>{tab.html_url}</span>
              </small>
            </S.LinkStyles>
            {tab.description && (
              <div>
                <span>Description:</span>
                <br />
                <small>{tab.description}</small>
              </div>
            )}

            <LinkRouter to={`/repos/details`}>
              <Button
                text="View more"
                onClick={() => fetchDetailsRepo(tab.full_name)}
              />
            </LinkRouter>
          </S.ItemCard>
        ))}
      </S.ListStyle>
      <Pagination pageCount={pageCount} onClick={handlePageClick} />
    </div>
  );
};
