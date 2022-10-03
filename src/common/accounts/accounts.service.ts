import { Injectable, NotFoundException } from '@nestjs/common';
import { FileSystemService } from '../file-system/file-system.service';
import { Account } from '../file-system/interfaces/account.interface';
import { currencies } from './currencies';

@Injectable()
export class AccountsService {

    constructor(
        private fileSystemService: FileSystemService
    ) { }

    async getUserAccounts(userId: number): Promise<Account[]> {
        const data = await this.fileSystemService.getAccountsData();
        const userAccounts = data.accounts.filter(account => account.userId === userId);
        userAccounts.map(account => {
            if (currencies[account.currency]) {
                account.balance = parseFloat((account.balance * currencies[account.currency]).toFixed(2));
                account.currency = 'USD';
            } else {
                throw new NotFoundException('Currency not found');
            }
        })
        return userAccounts;
    }
}
