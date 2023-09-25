import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtPayload, UserInterface } from './interfaces/user.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto, RegisterUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { config } from '../utils/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<UserInterface>,
  ) {}

  async createUserService(newUser: RegisterUserDto) {
    try {
      const user = new User();
      user.name = newUser.name;
      user.userName = newUser.userName;
      user.password = newUser.password;
      return await this.userRepository.save(user);
    } catch (err) {
      return { err: 'Create User Failed' };
    }
  }

  async loginUserService(user: LoginUserDto) {
    try {
      const findUser = await this.userRepository.findOneBy({
        userName: user.userName,
      });
      if (!findUser) {
        console.log('User Not Found');
      } else {
        const checkPassword = await bcrypt.compare(
          user.password,
          findUser.password,
        );
        if (!checkPassword) {
          console.log('Password Not Match');
        } else {
          return findUser;
        }
      }
    } catch (err) {
      return { err: 'Login Failed' };
    }
  }

  createTokens(user: UserInterface) {
    try {
      const secret = config.jwt_secret_key;
      const tokenData = {
        name: user.name,
        userName: user.userName,
        role: user.role,
      };
      return {
        newAccsessToken: jwt.sign(tokenData, secret, { expiresIn: '1h' }),
        newRefreshToken: jwt.sign(tokenData, secret, { expiresIn: '24h' }),
        tokenData,
      };
    } catch (err) {
      console.log(err);
    }
  }

  async getLogedUserService(accessToken: string) {
    try {
      const verifyAccToken = jwt.verify(
        accessToken,
        config.jwt_secret_key,
      ) as JwtPayload;
      if (!verifyAccToken) {
        console.log('Unauthorized');
      } else {
        const logedUserName = verifyAccToken.userName;
        const findUser = await this.userRepository.findOneBy({
          userName: logedUserName,
        });
        return findUser;
      }
    } catch (err) {
      return { err: 'Cannot find User' };
    }
  }

  async refreshService(refreshToken: string) {
    try {
      const verifyRefToken = jwt.verify(
        refreshToken,
        config.jwt_secret_key,
      ) as JwtPayload;
      if (!verifyRefToken) {
        console.log('Unauthorized');
      } else {
        const refreshUserName = verifyRefToken.userName;
        const findUser = await this.userRepository.findOneBy({
          userName: refreshUserName,
        });
        const secret = config.jwt_secret_key;
        const tokenData = {
          name: findUser.name,
          userName: findUser.userName,
          role: findUser.role,
        };
        const newAccessToken = jwt.sign(tokenData, secret, {
          expiresIn: '1h',
        });
        return {
          newAccessToken,
          tokenData,
        };
      }
    } catch (err) {
      console.log('Get New Access Token Eroor ', err);
      return { err: 'Cannot Get New Access Token' };
    }
  }
}
