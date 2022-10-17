import styled from "styled-components";

export const Loading = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 6px solid var(--color-grey-2);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: rotatingLoading 1s infinite;

  @keyframes rotatingLoading {
    to {
      transform: rotate(1turn);
    }
  }
`;
