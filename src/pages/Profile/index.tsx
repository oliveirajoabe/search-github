import { useEffect } from "react";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

export const Profile = () => {
  const navigate = useNavigate();
  const { fetchRepos, dataUser, hasUser } = useFetchGitHub();

  useEffect(() => {
    if (hasUser) {
      fetchRepos(dataUser.login);
    } else {
      navigate("/");
    }
  }, [fetchRepos, dataUser, navigate, hasUser]);

  return (
    <S.Container>
      <div>
        <span>{dataUser.name}</span>
        <span>{dataUser.login}</span>
      </div>
    </S.Container>
  );
};
