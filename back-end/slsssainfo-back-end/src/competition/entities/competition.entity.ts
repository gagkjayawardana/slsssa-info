import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CompetitionEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  competitionId: string;

  @Column()
  competitionName: string;

  @Column()
  competitionType: string;

  @Column({ type: 'date' })
  competitionDate: string;

  @Column({ type: 'time' })
  competitionStart: string;

  @Column({ type: 'time' })
  competitionEnd: string;

  @Column()
  competitionVenue: string;

  @Column()
  competitionDescription: string;

  @Column()
  @CreateDateColumn()
  competitionCreatedAt: Date;

  @Column()
  @UpdateDateColumn()
  competitionUpdatedAt: Date;

  @BeforeInsert()
  async generateCompetitionId() {
    const count = await CompetitionEvent.count();
    this.competitionId = `competition-${count + 1}`;
  }
}
