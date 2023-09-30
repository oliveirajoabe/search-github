import user from "../../assets/user.png";

import * as S from "./styles";

interface Props {
  url: string;
  alt: string;
}

export const Avatar = ({ url, alt }: Props) => {
  return <S.AvatarStyles src={url || user} alt={alt} />;
};
