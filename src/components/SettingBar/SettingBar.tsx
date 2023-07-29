import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import * as S from './SettingBar.style';
import { ISettingOption } from './SettingBar.interface';

interface IProps {
  settingOptions: ISettingOption[];
  setSettingOptions: Dispatch<SetStateAction<ISettingOption[]>>;
}

const SettingBar = ({ settingOptions, setSettingOptions }: IProps) => {
  // const [totalTeam, setTotalTeam] = useState(settingOptions[0].value);
  // const [totalMember, setTotalMember] = useState(settingOptions[1].value);

  const handleChangeOptionType = (event: ChangeEvent<HTMLInputElement>) => {};

  const handleCounter = (type: '+' | '-', id: 'team' | 'member') => {
    const add = type === '+' ? 1 : -1;

    if (id === 'team') {
      settingOptions[0].value += add;
    } else {
      settingOptions[1].value += add;
    }
    setSettingOptions(JSON.parse(JSON.stringify(settingOptions)));
  };

  return (
    <S.Ul>
      {settingOptions.map(({ title, checked, id, value }) => (
        <S.Li key={id}>
          <S.Radio>
            <input type="radio" id={id} value={id} checked={checked} onChange={handleChangeOptionType} />
            <label htmlFor={id}>{title}</label>
          </S.Radio>
          <S.Counter selected={checked}>
            <button disabled={!checked} onClick={handleCounter.bind(null, '-', id)}>
              -
            </button>
            <div>{value}</div>
            <button disabled={!checked} onClick={handleCounter.bind(null, '+', id)}>
              +
            </button>
          </S.Counter>
        </S.Li>
      ))}
    </S.Ul>
  );
};

export default SettingBar;
