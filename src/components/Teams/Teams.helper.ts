export const makeTeams = (members: string[], totalTeamSize: number) => {
  const teams: string[][] = Array.from(Array(totalTeamSize), () => []);

  members.forEach((member, idx) => {
    teams[idx % totalTeamSize].push(member);
  });

  return teams;
};
