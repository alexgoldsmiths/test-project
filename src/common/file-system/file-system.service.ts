import { Injectable } from '@nestjs/common';
import { AccountListing } from './interfaces/account-listing.interface';
import { UserListing } from './interfaces/user-listing.interface';
import fs from 'fs';

@Injectable()
export class FileSystemService {

    async getAccountsData(): Promise<AccountListing> {
        const data = fs.readFileSync('./data/accounts.json', 'utf8');
        return JSON.parse(data);
    }

    async getUsersData(): Promise<UserListing> {
        const data = fs.readFileSync('./data/users.json', 'utf8');
        return JSON.parse(data);
    }

}
