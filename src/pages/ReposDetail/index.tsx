import { Link, Star } from "phosphor-react";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import * as S from "./styles";
import { RoutePrevious } from "../../components/RoutePrevious";

export const ReposDetail = () => {
  const { dataRepoDetail, loadingDataRepoDetail } = useFetchGitHub();

  return (
    <S.Container>
      <RoutePrevious />
      {!loadingDataRepoDetail && dataRepoDetail && (
        <S.Card>
          <S.HeaderCard>
            <h2>{dataRepoDetail?.name}</h2>
            <span>
              <Star /> {dataRepoDetail?.stargazers_count}
            </span>
          </S.HeaderCard>
          {dataRepoDetail?.description && (
            <span>
              Description: <br />
              {dataRepoDetail?.description}
            </span>
          )}
          {dataRepoDetail?.language && (
            <span>Language: {dataRepoDetail?.language}</span>
          )}
          <S.LinkStyle href={dataRepoDetail?.html_url} target="_blank">
            <Link />
            {dataRepoDetail?.html_url}
          </S.LinkStyle>
        </S.Card>
      )}
      {loadingDataRepoDetail && <span>Loading...</span>}
    </S.Container>
  );
};
