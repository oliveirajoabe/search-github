import { Input } from "../../components/Input";
import * as S from "./styles";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import { CardUser } from "../../components/CardUser";

import searchImage from "../../assets/search.svg";

export const Home = () => {
  const { handleChangeInput, dataUser, searchInput, loadingDataUser, hasUser } =
    useFetchGitHub();

  return (
    <S.Container>
      <Input
        type="search"
        placeholder="Enter a username"
        onChange={handleChangeInput}
        value={searchInput}
      />

      {!loadingDataUser && !hasUser && (
        <img src={searchImage} alt="search image" />
      )}

      {!loadingDataUser && hasUser && <CardUser items={dataUser} />}
      {loadingDataUser && <span>Loading...</span>}
    </S.Container>
  );
};
