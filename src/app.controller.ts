import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './common/users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get('/user/balance/:name')
  async getUSerTotalBalance(
    @Param('name') name: string
  ): Promise<number> {
    return this.usersService.getUserTotalBalance(name);
  }
}
