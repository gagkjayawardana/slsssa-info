import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompetitionEvent } from './entities/competition.entity';
import { Repository } from 'typeorm';
import { CompetitionInterface } from './interfaces/competition.interfaces';
import { CompetitionDto } from './dto/competition.dto';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(CompetitionEvent)
    private competitionRepository: Repository<CompetitionInterface>,
  ) {}

  async createCompetitionService(newCompetition: CompetitionDto) {
    try {
      const competition = await this.competitionRepository.save(newCompetition);
      return competition;
    } catch (err) {
      return { err: 'Create competition Failed' };
    }
  }

  async getAllCompetitionService() {
    try {
      const allCompetitions = await this.competitionRepository.find();
      return allCompetitions;
    } catch (err) {
      return { err: 'Competitions are not Found' };
    }
  }
}
