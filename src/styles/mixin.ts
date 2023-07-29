import { css } from 'styled-components';
import { Color } from './color';

const flex = (jc = 'center', ai = 'center') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
`;

const button = () => css`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  text-align: center;
  background-color: ${Color.primary};
`;

const shadow = () => css`
  box-shadow: 9px 7px 24px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 7px 24px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 7px 24px 0px rgba(0, 0, 0, 0.75);
`;

const Mixin = {
  flex,
  button,
  shadow,
};

export default Mixin;
