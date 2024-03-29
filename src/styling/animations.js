import { keyframes } from "styled-components";

export const slideUpAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  90% {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;
