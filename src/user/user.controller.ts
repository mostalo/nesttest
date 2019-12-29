import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('api/users')
  showAllUsers() {
    return this.userService.showAll();
  }

  @Post('auth/login')
  login(@Body() data) {
    return this.userService.login(data);
  }

  @Post('auth/register')
  register(@Body() data) {
    return this.userService.register(data);
  }
}
