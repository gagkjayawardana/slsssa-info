import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { AddCompetitorDto } from './dto/competitor.dto';
import { Response } from 'express';

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
}
