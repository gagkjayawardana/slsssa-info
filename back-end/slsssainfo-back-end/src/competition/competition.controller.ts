import { Body, Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionDto } from './dto/competition.dto';
import { Response } from 'express';

@Controller('competition')
export class CompetitionController {
  constructor(
    @Inject('COMPETITION_SERVICE')
    private readonly competitionService: CompetitionService,
  ) {}

  @Post()
  async createCompetitionController(
    @Body() newCompetition: CompetitionDto,
    @Res() res: Response,
  ) {
    try {
      const competition =
        await this.competitionService.createCompetitionService(newCompetition);
      res.status(200);
      res.json(competition);
    } catch (err) {
      res.status(400);
    }
  }

  @Get()
  async getAllCompetitionController(@Res() res: Response) {
    try {
      const competitions =
        await this.competitionService.getAllCompetitionService();
      res.status(200);
      res.json(competitions);
    } catch (err) {
      res.status(400);
    }
  }
}
