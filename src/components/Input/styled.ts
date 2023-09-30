import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    > svg {
      position: absolute;
      left: 14px;
      top: 27%;
      color: ${theme.dark};
    }
  `}
`;

interface InputStyleProps {
  isSearch: boolean;
}

export const InputStyle = styled.input<InputStyleProps>`
  ${({ isSearch }) => css`
    border: none;

    padding: 0 10px 0 ${isSearch ? "40px" : "10px"};
    width: 100%;
    height: 38px;
    border-radius: 8px;
  `}
`;
