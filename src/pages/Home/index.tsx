import { Input } from "../../components/Input";
import * as S from "./styles";
import { useFetchGitHub } from "../../hooks/useFetchGitHub";
import { CardUser } from "../../components/CardUser";

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
      {!loadingDataUser && hasUser && <CardUser items={dataUser} />}
      {loadingDataUser && <span>Loading...</span>}
    </S.Container>
  );
};
