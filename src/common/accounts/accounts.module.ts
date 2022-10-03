import { Module } from '@nestjs/common';
import { FileSystemModule } from '../file-system/file-system.module';
import { AccountsService } from './accounts.service';

@Module({
  imports: [FileSystemModule],
  providers: [AccountsService],
  exports: [AccountsService]
})
export class AccountsModule {}
