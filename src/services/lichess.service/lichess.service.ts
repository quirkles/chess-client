import {v4} from 'uuid'
import axios from 'axios'

import {accountSchema, AccountSchema} from "@/services";


export class LichessService {
    private lichessHost = 'https://lichess.org';
    private accessToken: string | null = null;

    private account: AccountSchema | null = null

    constructor() {}

    async getAccountData(): Promise<AccountSchema> {
        if(this.account) {
            return this.account
        }
        if(!this.accessToken) {
            throw new Error('Access token not set')
        }
        return axios.get(`${this.lichessHost}/api/account`, {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        }).then(resp => {
            return accountSchema.parse(resp.data)
        })
    }

    setAccessToken(token: string): void {
        this.accessToken = token
    }

}
