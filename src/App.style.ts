import { Color } from '@styles/color';
import Mixin from './styles/mixin';
import { styled } from 'styled-components';

const titleHeight = '40px';

export const H1 = styled.h1`
  min-width: 1000px;
  ${Mixin.flex('flex-start')};
  padding-left: 12px;
  height: ${titleHeight};
  font-size: 28px;
  text-align: center;
  border-bottom: 1px solid ${Color.border};
`;

export const Layout = styled.div`
  ${Mixin.flex()};
  height: calc(100% - ${titleHeight});
  min-width: 1000px;

  & > * {
    height: 100%;
  }
`;

export const LNB = styled.div`
  width: 400px;
  min-width: 400px;
`;

export const Content = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100%;

  ${Mixin.flex()};
  flex-direction: column;

  & > *:first-child {
    height: 20%;
  }

  & > *:last-child {
    height: 80%;
  }
`;
