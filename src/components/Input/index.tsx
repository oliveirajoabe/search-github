import { useMemo } from "react";
import * as S from "./styled";
import { MagnifyingGlass } from "phosphor-react";

interface InputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  onChange?: ((value: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string;
}

export const Input = ({
  type = "text",
  placeholder,
  onChange,
  value,
  ...rest
}: InputProps) => {
  const isSearch = useMemo(() => type === "search", [type]);

  return (
    <S.Container>
      <S.InputStyle
        type={type}
        placeholder={placeholder}
        isSearch={isSearch}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {isSearch && <MagnifyingGlass weight="bold" />}
    </S.Container>
  );
};
