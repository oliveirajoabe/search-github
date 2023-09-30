import { useEffect } from "react";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { Avatar } from "../../components/Avatar";
import { List } from "../../components/List";

export const Repos = () => {
  const navigate = useNavigate();
  const { fetchRepos, dataUser, hasUser, dataRepos } = useFetchGitHub();

  useEffect(() => {
    if (hasUser) {
      fetchRepos(dataUser.login);
    } else {
      navigate("/");
    }
  }, [fetchRepos, dataUser, navigate, hasUser]);

  return (
    <S.Container>
      <S.Header>
        {dataUser.avatar_url && (
          <Avatar url={dataUser.avatar_url} alt="imagem do avatar do github" />
        )}
        <span>{dataUser.name}</span>
        <small>{dataUser.login}</small>
      </S.Header>

      <List data={dataRepos} />
    </S.Container>
  );
};
