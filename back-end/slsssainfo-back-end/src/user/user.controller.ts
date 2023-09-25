import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { UserService } from './user.service';
import { LoginUserDto, RegisterUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: UserService,
  ) {}

  @Post('/register')
  async createUserController(
    @Body() newUser: RegisterUserDto,
    @Res() res: Response,
  ) {
    try {
      const { name, userName, password } = newUser;
      const user = await this.userService.createUserService({
        name,
        userName,
        password,
      });

      res.status(200);
      res.json(user);
      return;
    } catch (err) {
      res.status(400);
    }
  }

  @Post('/login')
  async loginUserService(@Body() userData: LoginUserDto, @Res() res: Response) {
    try {
      const { userName, password } = userData;

      const user = await this.userService.loginUserService({
        userName,
        password,
      });
      if (!('err' in user)) {
        const newToken = this.userService.createTokens(user);
        res.cookie('accessToken', newToken.newAccsessToken, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
        });
        res.cookie('refreshToken', newToken.newRefreshToken, {
          maxAge: 60 * 60 * 24 * 1000,
          httpOnly: true,
        });
        res.status(200);
        res.json(user);
        return;
      }
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/getUser')
  async getLogedUser(@Req() req: Request, @Res() res: Response) {
    try {
      const userToken = req.cookies.accessToken;
      const user = await this.userService.getLogedUserService(userToken);
      res.status(200);
      res.json(user);
    } catch (err) {
      res.status(400);
    }
  }

  @Get('/logout')
  logoutUser(@Res() res: Response) {
    try {
      res.cookie('accessToken', '', {
        maxAge: -1,
        httpOnly: true,
      });
      res.cookie('refreshToken', '', {
        maxAge: -1,
        httpOnly: true,
      });

      res.status(200);
      res.json({ msg: 'Successfully logged out' });
    } catch (err) {
      res.status(400);
    }
  }

  @Post('/refresh')
  async refreshUser(@Req() req: Request, @Res() res: Response) {
    try {
      const refToken = req.cookies.refreshToken;
      const userToken = await this.userService.refreshService(refToken);
      if (userToken) {
        res.cookie('accessToken', userToken.newAccessToken, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
        });

        res.status(200);
        res.json(userToken);
      }
    } catch (err) {
      res.status(400);
    }
  }
}
