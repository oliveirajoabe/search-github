import * as S from "./styles";

interface Props {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick, ...rest }: Props) => {
  return (
    <S.Button onClick={onClick} {...rest}>
      {text}
    </S.Button>
  );
};
