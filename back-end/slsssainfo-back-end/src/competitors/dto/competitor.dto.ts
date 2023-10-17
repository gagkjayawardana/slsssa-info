import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

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

export class UpdateCompetitorDto {
  @IsNotEmpty()
  @IsNumber()
  marks: number;

  @IsString()
  sharpShooter: string;
}
