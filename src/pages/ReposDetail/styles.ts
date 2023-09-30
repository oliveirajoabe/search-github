import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 20rem;

  @media (max-width: 576px) {
    padding: 5rem 2rem;
  }
  @media (min-width: 577px) and (max-width: 992px) {
    padding: 5rem 2rem;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    background-color: ${theme["dark-purple"]};
    padding: 2rem;
    border-radius: 8px;
    gap: 1rem;
  `}
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkStyle = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.grey};

    &:hover {
      opacity: 0.5;
    }
  `}
`;
