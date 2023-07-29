import { useState } from 'react';
import * as S from './Teams.style';
import { shuffle } from 'lodash';
import { makeTeams } from './Teams.helper';

interface IProps {
  members: string[];
}

const Teams = ({ members }: IProps) => {
  const [teams, setTeams] = useState<string[][]>([]);

  const handleClick = () => {
    const shuffledMembers = shuffle(members);
    const totalTeamSize = 2;
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
