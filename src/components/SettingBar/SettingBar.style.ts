import Mixin from '@styles/mixin';
import { styled } from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  ${Mixin.flex('space-evenly')};
  flex-direction: column;
`;

export const Li = styled.li`
  ${Mixin.flex('space-between')};
  list-style: none;
  padding: 0 20px;
  width: 100%;
`;

export const Radio = styled.div`
  ${Mixin.flex('flex-start', 'center')};
  input[type='radio']:disabled + label {
    opacity: 0.3;
  }

  & * {
    cursor: pointer;
  }

  & > label {
    line-height: 25px;
  }
`;

export const Counter = styled.div<{ selected: boolean }>`
  ${Mixin.flex('center', 'center')};
  opacity: 0.3;
  ${({ selected }) =>
    selected &&
    `
        opacity: 1;
    `}

  div {
    width: 70px;
    text-align: center;
  }

  button {
    ${Mixin.button()};
  }
`;
