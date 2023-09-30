import { Link, Star } from "phosphor-react";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import * as S from "./styles";

export const ReposDetail = () => {
  const { dataRepoDetail } = useFetchGitHub();
  console.log(dataRepoDetail);

  return (
    <S.Container>
      <S.Card>
        <S.HeaderCard>
          <h2>{dataRepoDetail?.name}</h2>
          <span>
            <Star /> {dataRepoDetail?.stargazers_count}
          </span>
        </S.HeaderCard>
        <span>
          Description: <br />
          {dataRepoDetail?.description}
        </span>
        <span>Language: {dataRepoDetail?.language}</span>
        <S.LinkStyle href={dataRepoDetail?.html_url} target="_blank">
          <Link />
          {dataRepoDetail?.html_url}
        </S.LinkStyle>
      </S.Card>
    </S.Container>
  );
};
