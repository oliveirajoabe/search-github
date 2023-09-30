import styled, { css } from "styled-components";

export const ListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  list-style: none;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemCard = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 8px;

    background-color: ${theme["dark-purple"]};

    > a {
      text-decoration: none;
      margin: 5px 0 10px 0;
    }
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperStar = styled.small`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LinkStyles = styled.a`
  ${({ theme }) => css`
    color: ${theme.grey};
    > small > span {
      &:hover {
        opacity: 0.5;
      }
    }
  `}
`;
