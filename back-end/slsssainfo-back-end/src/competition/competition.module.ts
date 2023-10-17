import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionEvent } from './entities/competition.entity';
import { Module } from '@nestjs/common';
import { CompetitionController } from './competition.controller';
import { CompetitionService } from './competition.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompetitionEvent])],
  controllers: [CompetitionController],
  providers: [{ provide: 'COMPETITION_SERVICE', useClass: CompetitionService }],
})
export class CompetitionModule {}
