import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

export const RoutePrevious = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <button onClick={handle}>
        <ArrowLeft />
        Previous
      </button>
    </S.Container>
  );
};
