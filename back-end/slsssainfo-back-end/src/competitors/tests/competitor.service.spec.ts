import { getRepositoryToken } from '@nestjs/typeorm';
import { CompetitorService } from '../competitor.service';
import { Competitors } from '../entities/competitors.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';

describe('CompetitorService', () => {
  let service: CompetitorService;
  let competitorRepository: Repository<Competitors>;

  const COMPETITOR_REPOSITORY_TOKEN = getRepositoryToken(Competitors);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompetitorService,
        {
          provide: COMPETITOR_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CompetitorService>(CompetitorService);
    competitorRepository = module.get<Repository<Competitors>>(
      COMPETITOR_REPOSITORY_TOKEN,
    );
  });

  it('should be defined Competitor Service and Repository', () => {
    expect(service).toBeDefined();
    expect(competitorRepository).toBeDefined();
  });

  describe('getCompetitors', () => {
    const allCompetitors = [
      {
        competitorId: 3,
        competitionName: 'Test competition 1',
        schoolName: 'School12',
        participantName: 'PARTICIPANT ONE',
        participantBirthday: '2004-12-01',
        rifleOrPistol: 'Pistol',
        menOrWomen: 'Men',
        youthOrJunior: 'Youth',
        marks: 80,
        place: null,
        sharpShooter: 'SharpShooter',
      },
    ];
    const competitionName = 'Test competition 1';

    it('successfully get competitors', async () => {
      competitorRepository.find = jest.fn().mockResolvedValue(allCompetitors);
      const res = await service.getAllCompetitorsService(competitionName);
      expect(res).toEqual(allCompetitors);
    });

    it('get all competitors fail', async () => {
      competitorRepository.find = jest.fn().mockRejectedValue(null);
      const res = await service.getAllCompetitorsService(competitionName);
      expect(res).toEqual({ err: 'Competitors are not Found' });
    });
  });

  describe('updateCompetitor', () => {
    const findCompetitor = {
      competitorId: '3',
      competitionName: 'Test competition 1',
      schoolName: 'School12',
      participantName: 'PARTICIPANT ONE',
      participantBirthday: '2004-12-01',
      rifleOrPistol: 'Pistol',
      menOrWomen: 'Men',
      youthOrJunior: 'Youth',
      marks: 90,
      place: null,
      sharpShooter: 'SharpShooter',
    };

    const changeCompetitor = {
      competitorId: '3',
      competitionName: 'Test competition 1',
      schoolName: 'School12',
      participantName: 'PARTICIPANT ONE',
      participantBirthday: '2004-12-01',
      rifleOrPistol: 'Pistol',
      menOrWomen: 'Men',
      youthOrJunior: 'Youth',
      marks: 80,
      place: null,
      sharpShooter: 'SharpShooter',
    };

    const competitorId = '3';

    it('update competitor succesfully', async () => {
      competitorRepository.findOneBy = jest
        .fn()
        .mockResolvedValue(findCompetitor);
      competitorRepository.merge = jest
        .fn()
        .mockResolvedValue(changeCompetitor);
      competitorRepository.save = jest.fn().mockResolvedValue(changeCompetitor);
      const res = await service.updateCompetitorService(
        changeCompetitor,
        competitorId,
      );
      expect(res).toEqual(changeCompetitor);
    });

    it('update student fail', async () => {
      competitorRepository.findOneBy = jest
        .fn()
        .mockResolvedValue(findCompetitor);
      competitorRepository.merge = jest.fn().mockResolvedValue(null);
      competitorRepository.save = jest.fn().mockRejectedValue(null);
      const res = await service.updateCompetitorService(
        changeCompetitor,
        competitorId,
      );
      expect(res).toEqual({ err: 'Cannot Update Competitor' });
    });
  });
});
