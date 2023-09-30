import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 38px;
    padding: 0.2rem 1rem;

    cursor: pointer;
    text-decoration: none;

    border-radius: 8px;

    border: 1px solid ${theme.grey};
    color: ${theme.grey};

    background-color: transparent;

    transition: opacity 0.2s;

    &: hover {
      opacity: 0.5;
    }
  `}
`;
