export interface CompetitorInterface {
  competitorId: string;
  competitionName: string;
  schoolName: string;
  participantName: string;
  participantBirthday: string;
  rifleOrPistol: string;
  menOrWomen: string;
  youthOrJunior: string;
}

export interface CompetitorResultsInterface {
  competitorId: string;
  competitionName: string;
  schoolName: string;
  participantName: string;
  participantBirthday: string;
  rifleOrPistol: string;
  menOrWomen: string;
  youthOrJunior: string;
  marks: number;
  place: number;
  sharpShooter: string;
}
