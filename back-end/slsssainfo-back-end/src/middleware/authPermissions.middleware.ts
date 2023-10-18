import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../utils/config';

@Injectable()
export class JudgePermissions implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(400).send('Token not found');
    }
    if (req.method == 'PUT') {
      try {
        const tokenData = jwt.verify(token, config.jwt_secret_key);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (tokenData.role == 'school') {
          return res.status(401).send('Do not have Permission');
        } else {
          return next();
        }
      } catch (err) {
        console.log('judge err', err);
        return res.status(401).send('Invalid Token');
      }
    } else {
      return next();
    }
  }
}

@Injectable()
export class SchoolPermissions implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(400).send('Token not found');
    }
    if (req.method == 'POST') {
      try {
        const tokenData = jwt.verify(token, config.jwt_secret_key);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (tokenData.role == 'judge') {
          return res.status(401).send('Do not have Permission');
        } else {
          return next();
        }
      } catch (err) {
        return res.status(401).send('Invalid Token');
      }
    } else {
      return next();
    }
  }
}

@Injectable()
export class AdminPermissions implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(400).send('Token not found');
    }
    if (req.method == 'POST') {
      try {
        const tokenData = jwt.verify(token, config.jwt_secret_key);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (tokenData.role != 'admin') {
          return res.status(401).send('Do not have Permission');
        } else {
          return next();
        }
      } catch (err) {
        return res.status(401).send('Invalid Token');
      }
    } else {
      return next();
    }
  }
}
