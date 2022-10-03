import { UserListing } from './../file-system/interfaces/user-listing.interface';
import { AccountsService } from './../accounts/accounts.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../file-system/interfaces/user.interface';
import { FileSystemService } from '../file-system/file-system.service';

@Injectable()
export class UsersService {
    
    constructor(
        private readonly fileSystemService: FileSystemService,
        private readonly accountsService: AccountsService
    ) { }

    async getUsers(): Promise<User[]> {
        const userListing = await this.fileSystemService.getUsersData();
        return userListing.users;
    }

    async getUserTotalBalance(name: string): Promise<number> {
        const users = await this.getUsers();
        const currentUser = users.find(user => user.name === name);
        if (currentUser) {
            const accounts = await this.accountsService.getUserAccounts(currentUser.id);
            const totalBalance = accounts.reduce((amount, account) => { return amount + account.balance }, 0);
            return totalBalance;
        } else {
            throw new NotFoundException('User not found');
        }
    }
}
