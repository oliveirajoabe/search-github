import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  img {
    width: 50%;

    @media (max-width: 992px) {
      width: 70%;
    }
    @media (max-width: 576px) {
      width: 90%;
    }
  }
`;
