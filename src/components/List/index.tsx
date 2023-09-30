import { Button } from "../Button";
import * as S from "./styles";
import { Link as LinkRouter } from "react-router-dom";
import { Link, Star, ArrowDown, ArrowUp } from "phosphor-react";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
interface Props {
  data: DataRepos[];
}
export const List = ({ data }: Props) => {
  const { fetchDetailsRepo } = useFetchGitHub();

  return (
    <div>
      <div>
        <span>ordenação:</span>
        <ArrowDown />
        <ArrowUp />
      </div>
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
    </div>
  );
};
