import { Injectable } from '@nestjs/common';
import { AccountListing } from './interfaces/account-listing.interface';
import { UserListing } from './interfaces/user-listing.interface';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileSystemService {

    constructor() { }

    async getAccountsData(): Promise<AccountListing> {
        const data = readFileSync(join(process.cwd(), 'data/accounts.json'), 'utf8');
        return JSON.parse(data);
    }

    async getUsersData(): Promise<UserListing> {
        const data = readFileSync(join(process.cwd(), 'data/users.json'), 'utf8');
        return JSON.parse(data);
    }

}
