import Members from '@components/Members/Members';
import * as S from './App.style';
import SettingBar from '@components/SettingBar/SettingBar';
import Teams from '@components/Teams/Teams';
import { useState } from 'react';
import { ISettingOption } from '@components/SettingBar/SettingBar.interface';
import { INITIAL_SETTING_OPTIONS } from '@components/SettingBar/SettingBar.const';

function App() {
  const [members, setMembers] = useState<string[]>([]);
  const [settingOptions, setSettingOptions] = useState<ISettingOption[]>(INITIAL_SETTING_OPTIONS);

  return (
    <>
      <S.H1>🪄 RANDOM TEAM MATCHER</S.H1>
      <S.Layout>
        <S.LNB>
          <Members members={members} setMembers={setMembers} />
        </S.LNB>
        <S.Content>
          <SettingBar settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
          <Teams members={members} />
        </S.Content>
      </S.Layout>
    </>
  );
}

export default App;
