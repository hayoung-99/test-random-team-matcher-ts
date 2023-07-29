import { useState } from 'react';
import * as S from './Teams.style';
import { shuffle } from 'lodash';
import { makeTeams } from './Teams.helper';
import { ISettingOption } from '@components/SettingBar/SettingBar.interface';

interface IProps {
  settingOptions: ISettingOption[];
  members: string[];
}

const Teams = ({ settingOptions, members }: IProps) => {
  const [teams, setTeams] = useState<string[][]>([]);

  const handleClick = () => {
    const shuffledMembers = shuffle(members);
    let totalTeamSize = 2;

    if (settingOptions[0].checked) {
      totalTeamSize = settingOptions[0].value;
    } else {
      totalTeamSize = settingOptions[1].value;
    }

    const teams = makeTeams(shuffledMembers, totalTeamSize);

    setTeams(teams);
  };

  return (
    <S.TeamsWrapper>
      <S.TeamWrapper>
        {teams.map((team, index) => (
          <S.Team key={index}>{team.join('\n')}</S.Team>
        ))}
      </S.TeamWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={handleClick}>랜덤 팀 만들기</S.Button>
      </S.ButtonWrapper>
    </S.TeamsWrapper>
  );
};

export default Teams;
