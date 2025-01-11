import { Test, TestingModule } from '@nestjs/testing';
import { Request, Response } from 'express';
import { CompetitorController } from '../competitor.controller';
import { CompetitorService } from '../competitor.service';
import { GetCompetitorResultsType } from '../interfaces/competitor.interface';

describe('CompetitorController', () => {
  let controller: CompetitorController;
  let service: CompetitorService;

  const reqMock = {
    body: {},
    params: {},
  } as Request;

  const mockResponse = () => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitorController],
      providers: [
        {
          provide: 'COMPETITOR_SERVICE',
          useValue: {
            getAllCompetitorsService: jest.fn((x) => x),
            updateCompetitorService: jest.fn((x) => x),
          },
        },
      ],
    }).compile();
    service = module.get<CompetitorService>('COMPETITOR_SERVICE');
    controller = module.get<CompetitorController>(CompetitorController);
  });

  it('should be defind Competitor Controller and service', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getCompetitors', () => {
    const allCompetitors = {
      competitors: [
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
      ],
    } as unknown as GetCompetitorResultsType;

    const resMock = mockResponse();

    it('should return all competitors of the competition', async () => {
      jest
        .spyOn(service, 'getAllCompetitorsService')
        .mockResolvedValue(allCompetitors);
      await controller.getAllCompetitorsController(reqMock, resMock);
      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith(allCompetitors);
    });

    it('should return an error', async () => {
      jest
        .spyOn(service, 'getAllCompetitorsService')
        .mockRejectedValue({ err: 'Competitors are not Found' });
      await controller.getAllCompetitorsController(reqMock.body, resMock);
      expect(resMock.status).toHaveBeenCalledWith(400);
    });
  });

  describe('updateCompetitor', () => {
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

    reqMock.body = {
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

    reqMock.params = {
      competitorId: '3',
    };

    const resMock = mockResponse();

    it('Competitor update successfully', async () => {
      jest
        .spyOn(service, 'updateCompetitorService')
        .mockResolvedValue(changeCompetitor);
      await controller.updateCompetitorController(
        reqMock.body,
        reqMock,
        resMock,
      );
      expect(resMock.status).toHaveBeenCalledWith(200);
    });

    it('fail update competitor', async () => {
      jest
        .spyOn(service, 'updateCompetitorService')
        .mockRejectedValue({ err: 'Cannot Update Competitor' });
      await controller.updateCompetitorController(
        reqMock.body,
        reqMock,
        resMock,
      );
      expect(resMock.status).toHaveBeenCalledWith(400);
    });
  });
});
