import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { CompetitionEvent } from './competition/entities/competition.entity';
import { CompetitionModule } from './competition/competition.module';
import { CompetitorModule } from './competitors/competitor.module';
import { Competitors } from './competitors/entities/competitors.entity';
import { VerifyLogout } from './middleware/loggedUser.middleware';
import {
  AdminPermissions,
  JudgePermissions,
  SchoolPermissions,
} from './middleware/authPermissions.middleware';

dotenv.config();

@Module({
  imports: [
    UserModule,
    CompetitionModule,
    CompetitorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, CompetitionEvent, Competitors],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyLogout)
      .forRoutes({ path: 'user/logout', method: RequestMethod.GET });
    consumer.apply(JudgePermissions).forRoutes({
      path: 'competitors/:competitorId',
      method: RequestMethod.PUT,
    });
    consumer
      .apply(SchoolPermissions)
      .forRoutes({ path: 'competitors', method: RequestMethod.POST });
    consumer
      .apply(AdminPermissions)
      .forRoutes({ path: 'user/register', method: RequestMethod.POST });
    consumer
      .apply(AdminPermissions)
      .forRoutes({ path: 'competition', method: RequestMethod.POST });
  }
}
