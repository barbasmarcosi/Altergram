import { css, keyframes } from 'styled-components';

const fadeKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
  `;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeKeyframes} ${type};
  `;

const slideEffect = keyframes`
from {
  margin-top: -100px;
  transition: 1s margin-top;
}
`;

export const slideComponent = ({ time = '1s', type = 'ease' } = {}) =>
css`
  animation: ${time} ${slideEffect} ${type};
`;
