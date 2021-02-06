import { keyframes } from "styled-components";

export const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg); 
  } 
`;

export const skeletonBlinking = keyframes`
  0% {
    opacity: 0.2;
  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    opacity: 0.2;
  }
`;
