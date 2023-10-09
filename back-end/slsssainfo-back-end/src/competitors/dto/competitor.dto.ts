import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AddCompetitorDto {
  @IsNotEmpty()
  @IsString()
  competitionName: string;

  @IsNotEmpty()
  @IsString()
  schoolName: string;

  @IsNotEmpty()
  @IsString()
  participantName: string;

  @IsNotEmpty()
  @IsDateString()
  participantBirthday: string;

  @IsNotEmpty()
  @IsEnum(['Rifle', 'Pistol'])
  rifleOrPistol: string;

  @IsNotEmpty()
  @IsEnum(['Men', 'Women'])
  menOrWomen: string;

  @IsNotEmpty()
  @IsEnum(['Youth', 'Junior'])
  youthOrJunior: string;
}
