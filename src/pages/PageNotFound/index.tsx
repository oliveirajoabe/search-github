import image from "../../assets/404.svg";

import * as S from "./styles";

export const PageNotFound = () => {
  return (
    <S.Container>
      <img src={image} alt="page not found" />
    </S.Container>
  );
};
