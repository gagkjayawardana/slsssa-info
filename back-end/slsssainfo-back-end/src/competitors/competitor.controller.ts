import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { AddCompetitorDto, UpdateCompetitorDto } from './dto/competitor.dto';
import { Response, Request } from 'express';

@Controller('competitors')
export class CompetitorController {
  constructor(
    @Inject('COMPETITOR_SERVICE')
    private readonly competitorService: CompetitorService,
  ) {}

  @Post()
  async addCompetitorController(
    @Body() newCompetitor: AddCompetitorDto,
    @Res() res: Response,
  ) {
    try {
      const competitor =
        await this.competitorService.addCompetitorService(newCompetitor);
      res.status(200);
      res.json(competitor);
      return;
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/:competitionName')
  async getAllCompetitorsController(@Req() req: Request, @Res() res: Response) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getAllCompetitorsService(competitionName);
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Put('/:competitorId')
  async updateCompetitorController(
    @Body() competitorData: UpdateCompetitorDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const competitorId = req.params.competitorId;
      const result = await this.competitorService.updateCompetitorService(
        competitorData,
        competitorId,
      );
      res.status(200);
      res.json(result);
      return;
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/juniorRifleMen/:competitionName')
  async getJuniorRifleMenController(@Req() req: Request, @Res() res: Response) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getJuniorRifleMenService(competitionName);
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/juniorRifleWomen/:competitionName')
  async getJuniorRifleWomenController(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getJuniorRifleWomenService(
          competitionName,
        );
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/youthRifleMen/:competitionName')
  async getjYouthRifleMenController(@Req() req: Request, @Res() res: Response) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getYouthRifleMenService(competitionName);
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/youthRifleWomen/:competitionName')
  async getjYouthRifleWomenController(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getYouthRifleWomenService(competitionName);
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/juniorPistolMen/:competitionName')
  async getJuniorPistolMenController(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getJuniorPistolMenService(competitionName);
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/juniorPistolWomen/:competitionName')
  async getJuniorPistolWomenController(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getJuniorPistolWomenService(
          competitionName,
        );
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/youthPistolMen')
  async getjYouthPistolMenController(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getYouthPistolMenService(competitionName);
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/youthPistolWomen')
  async getjYouthPistolWomenController(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { competitionName } = req.params;
      const competitors =
        await this.competitorService.getYouthPistolWomenService(
          competitionName,
        );
      res.status(200);
      res.json(competitors);
    } catch (err) {
      res.status(400);
    }
  }
}
