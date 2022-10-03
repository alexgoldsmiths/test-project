import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Module({
  imports: [],
  providers: [AccountsService],
})
export class AccountsModule {}
