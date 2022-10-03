import { Module } from '@nestjs/common';
import { AccountsModule } from '../accounts/accounts.module';
import { FileSystemModule } from '../file-system/file-system.module';
import { UsersService } from './users.service';

@Module({
  imports: [FileSystemModule, AccountsModule],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
