import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competitors } from './entities/competitors.entity';
import { CompetitorService } from './competitor.service';
import { CompetitorController } from './competitor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Competitors])],
  controllers: [CompetitorController],
  providers: [{ provide: 'COMPETITOR_SERVICE', useClass: CompetitorService }],
})
export class CompetitorModule {}
