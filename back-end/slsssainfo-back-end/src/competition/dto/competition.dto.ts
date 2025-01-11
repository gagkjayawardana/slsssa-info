import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CompetitionDto {
  @IsNotEmpty()
  @IsString()
  competitionName: string;

  @IsNotEmpty()
  @IsString()
  competitionType: string;

  @IsNotEmpty()
  @IsDateString()
  competitionDate: string;

  @IsNotEmpty()
  competitionStart: string;

  @IsNotEmpty()
  competitionEnd: string;

  @IsNotEmpty()
  @IsString()
  competitionVenue: string;

  @IsNotEmpty()
  @IsString()
  competitionDescription: string;
}
