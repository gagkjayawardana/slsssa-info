import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Competitors } from './entities/competitors.entity';
import { Repository } from 'typeorm';
import { CompetitorResultsInterface } from './interfaces/competitor.interface';
import { AddCompetitorDto, UpdateCompetitorDto } from './dto/competitor.dto';

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

  async getAllCompetitorsService(competitionName: string) {
    try {
      const allCompetitors = await this.competitorRepository.find({
        where: { competitionName },
        order: {
          competitorId: 'ASC',
        },
      });
      return allCompetitors;
    } catch (err) {
      return { err: 'Competitors are not Found' };
    }
  }

  async updateCompetitorService(
    competitorData: UpdateCompetitorDto,
    competitorId: string,
  ) {
    try {
      const competitor = await this.competitorRepository.findOneBy({
        competitorId: competitorId,
      });
      if (competitor) {
        const marks = competitorData.marks;
        if (marks >= 80) {
          competitorData.sharpShooter = 'SharpShooter';
        } else {
          competitorData.sharpShooter = '';
        }
        this.competitorRepository.merge(competitor, competitorData);
        const result = await this.competitorRepository.save(competitor);
        return result;
      }
    } catch (err) {
      return { err: 'Cannot Update Competitor' };
    }
  }

  async getJuniorRifleMenService(competitionName: string) {
    try {
      const juniorRifleMen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Rifle',
          menOrWomen: 'Men',
          youthOrJunior: 'Junior',
        },
        order: {
          marks: 'DESC',
        },
      });
      return juniorRifleMen;
    } catch (err) {
      return { err: 'Cannot find Junior Rifle Men Category Shooters' };
    }
  }

  async getJuniorRifleWomenService(competitionName: string) {
    try {
      const juniorRifleWomen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Rifle',
          menOrWomen: 'Women',
          youthOrJunior: 'Junior',
        },
        order: {
          marks: 'DESC',
        },
      });
      return juniorRifleWomen;
    } catch (err) {
      return { err: 'Cannot find Junior Rifle Women Category Shooters' };
    }
  }

  async getYouthRifleMenService(competitionName: string) {
    try {
      const YouthRifleMen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Rifle',
          menOrWomen: 'Men',
          youthOrJunior: 'Youth',
        },
        order: {
          marks: 'DESC',
        },
      });
      return YouthRifleMen;
    } catch (err) {
      return { err: 'Cannot find Youth Rifle Men Category Shooters' };
    }
  }

  async getYouthRifleWomenService(competitionName: string) {
    try {
      const YouthRifleWomen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Rifle',
          menOrWomen: 'Women',
          youthOrJunior: 'Youth',
        },
        order: {
          marks: 'DESC',
        },
      });
      return YouthRifleWomen;
    } catch (err) {
      return { err: 'Cannot find Youth Rifle Women Category Shooters' };
    }
  }

  async getJuniorPistolMenService(competitionName: string) {
    try {
      const juniorPistolMen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Pistol',
          menOrWomen: 'Men',
          youthOrJunior: 'Junior',
        },
        order: {
          marks: 'DESC',
        },
      });
      return juniorPistolMen;
    } catch (err) {
      return { err: 'Cannot find Junior Pistol Men Category Shooters' };
    }
  }

  async getJuniorPistolWomenService(competitionName: string) {
    try {
      const juniorPistolWomen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Pistol',
          menOrWomen: 'Women',
          youthOrJunior: 'Junior',
        },
        order: {
          marks: 'DESC',
        },
      });
      return juniorPistolWomen;
    } catch (err) {
      return { err: 'Cannot find Junior Pistol Women Category Shooters' };
    }
  }

  async getYouthPistolMenService(competitionName: string) {
    try {
      const YouthPistolMen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Pistol',
          menOrWomen: 'Men',
          youthOrJunior: 'Youth',
        },
        order: {
          marks: 'DESC',
        },
      });
      return YouthPistolMen;
    } catch (err) {
      return { err: 'Cannot find Youth Pistol Men Category Shooters' };
    }
  }

  async getYouthPistolWomenService(competitionName: string) {
    try {
      const YouthPistolWomen = await this.competitorRepository.find({
        where: {
          competitionName,
          rifleOrPistol: 'Pistol',
          menOrWomen: 'Women',
          youthOrJunior: 'Youth',
        },
        order: {
          marks: 'DESC',
        },
      });
      return YouthPistolWomen;
    } catch (err) {
      return { err: 'Cannot find Youth Pistol Women Category Shooters' };
    }
  }
}
