import { TSizeSetting } from './SettingBar.type';

export interface ISettingOption {
  title: string;
  checked: boolean;
  id: TSizeSetting;
  value: number;
}
