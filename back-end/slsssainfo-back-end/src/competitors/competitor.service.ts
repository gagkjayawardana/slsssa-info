import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Competitors } from './entities/competitors.entity';
import { Repository } from 'typeorm';
import { CompetitorResultsInterface } from './interfaces/competitor.interface';
import { AddCompetitorDto } from './dto/competitor.dto';

@Injectable()
export class CompetitorService {
  constructor(
    @InjectRepository(Competitors)
    private competitorRepository: Repository<CompetitorResultsInterface>,
  ) {}

  async addCompetitorService(newCompetitor: AddCompetitorDto) {
    try {
      const competitor = await this.competitorRepository.save(newCompetitor);
      return competitor;
    } catch (err) {
      return { err: 'Comperitors adding Failed' };
    }
  }

  async getJuniorRifleMenService() {
    try {
      const juniorRifleMen = await this.competitorRepository.findBy({
        rifleOrPistol: 'rifle',
        menOrWomen: 'men',
        youthOrJunior: 'junior',
      });
      return juniorRifleMen;
    } catch (err) {
      return { err: 'Cannot find  Junior Rifle Men Category Shooters' };
    }
  }
}
