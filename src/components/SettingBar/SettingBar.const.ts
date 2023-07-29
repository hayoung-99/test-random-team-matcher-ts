import { ISettingOption } from './SettingBar.interface';

export const INITIAL_SETTING_OPTIONS: ISettingOption[] = [
  {
    title: '전체 팀 수',
    checked: true,
    id: 'team',
    value: 2,
  },
  {
    title: '팀당 멤버 수',
    checked: false,
    id: 'member',
    value: 1,
  },
];
