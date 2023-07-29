import { Color } from '@styles/color';
import Mixin from '../../styles/mixin';
import { styled } from 'styled-components';

const buttonHeight = '70px';

export const TeamsWrapper = styled.div`
  border-top: 1px solid ${Color.border};
  width: 100%;
  position: relative;
`;

export const TeamWrapper = styled.div`
  padding: 12px;
  ${Mixin.flex('center', 'flex-start')};
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  height: calc(100% - ${buttonHeight});
  overflow: hidden;
`;

export const Team = styled.div`
  width: 150px;
  min-height: 120px;
  border: 1px solid ${Color.primary};
  border-radius: 8px;
  padding: 4px 8px;
  white-space: break-spaces;
`;

export const ButtonWrapper = styled.div`
  ${Mixin.flex()};
  position: absolute;
  bottom: 0;
  height: ${buttonHeight};
  width: 100%;
  border-top: 1px solid ${Color.border};
`;

export const Button = styled.button`
  ${Mixin.button()};
  ${Mixin.shadow()};
  height: 44px;
  width: 100%;
  margin: 0 12px;
  line-height: 16px;
`;
