import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum WeaponType {
  RIFLE = 'Rifle',
  PISTOL = 'Pistol',
}

export enum Gender {
  MEN = 'Men',
  WOMEN = 'Women',
}

export enum Category {
  JUNIOR = 'Junior',
  YOUTH = 'Youth',
}

@Entity()
export class Competitors extends BaseEntity {
  @PrimaryGeneratedColumn()
  competitorId: string;

  @PrimaryColumn()
  competitionName: string;

  @Column()
  schoolName: string;

  @Column()
  participantName: string;

  @Column({ type: 'date' })
  participantBirthday: string;

  @Column({
    type: 'enum',
    enum: WeaponType,
    default: WeaponType.RIFLE,
  })
  rifleOrPistol: WeaponType;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.MEN,
  })
  menOrWomen: Gender;

  @Column({
    type: 'enum',
    enum: Category,
    default: Category.JUNIOR,
  })
  youthOrJunior: Category;

  @Column({ nullable: true })
  marks: number;

  @Column({ nullable: true })
  place: number;

  @Column({ nullable: true })
  sharpShooter: string;

  @BeforeInsert()
  async generateCompetitionId() {
    const count = await Competitors.count();
    this.competitorId = `competitor-${count + 1}`;
  }
}
