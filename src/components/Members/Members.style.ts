import { styled } from 'styled-components';
import Mixin from '@styles/mixin';
import { Color } from '@styles/color';

const InputHeight = '70px';

export const MembersWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-right: 1px solid ${Color.border};

  & > * {
    padding: 0 12px;
  }
`;

export const Members = styled.ul`
  height: calc(100% - ${InputHeight});
  overflow: hidden;
  padding-top: 12px;
`;

export const EmptyMembers = styled.div`
  ${Mixin.flex()};
  height: calc(100% - ${InputHeight});
`;

export const MemberWrapper = styled.li`
  ${Mixin.flex('flex-start')};
  ${Mixin.shadow()};
  list-style: none;
  background-color: ${Color.primary};
  border-radius: 8px;
  height: 40px;
  margin-bottom: 12px;
  padding: 0 8px;
`;

export const Member = styled.div``;

export const Form = styled.form`
  ${Mixin.flex('space-between')}
  position: absolute;
  bottom: 0;
  height: ${InputHeight};
  width: 100%;
  border-top: 1px solid ${Color.border};

  & > input {
    width: 100%;
    margin-right: 12px;
    height: 32px;
    border: 1px solid ${Color.primary};
    background-color: ${Color.background};
    border-radius: 8px;
    padding: 0 8px;
    height: 70%;
    outline: none;
  }

  & > button {
    ${Mixin.button()};
    ${Mixin.shadow()}
    width: 75px;
    height: 70%;
  }
`;
