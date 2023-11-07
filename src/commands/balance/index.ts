import { Command, Flags } from '@oclif/core';

import { getBalance } from '../../api/get-balance-api';
import { readWalletsFromFile } from '../../utils/file-utils';

export default class GetBalanceCommand extends Command {
    static description = 'Get the balance of a wallet';

    static flags = {
        name: Flags.string({char: 'n', description: 'Wallet name', required: true}),
    }

    async run() {
        const {flags} = await this.parse(GetBalanceCommand);
    
        const wallets = readWalletsFromFile();
        
        const wallet = wallets.find((w: { name: string | undefined; }) => w.name === flags.name);

        if (!wallet) {
        this.error('Wallet with the given name does not exist');
        return;
        }
        
        if(wallet.addresses.length === 0){
            this.error('Wallet with the given name does not have any addresses');
            return;
        }

        const promises = wallet.addresses.map((address:string) =>
        getBalance(address).then((response) => {
            const balanceInBTC = response.balance / 100_000_000;
            this.log(`\n-------------------------`);
            this.log(`Address: ${address}`);
            this.log(`-------------------------`);
            this.log(`Balance: ${balanceInBTC} BTC`);
            this.log(`Total Received: ${response.total_received / 100_000_000} BTC`);
            this.log(`Total Sent: ${response.total_sent / 100_000_000} BTC`);
            this.log(`Unconfirmed Balance: ${response.unconfirmed_balance / 100_000_000} BTC`);
            this.log(`Final Balance: ${response.final_balance / 100_000_000} BTC`);
            this.log(`Number of Transactions: ${response.n_tx}`);
            this.log(`Unconfirmed Number of Transactions: ${response.unconfirmed_n_tx}`);
            this.log(`Final Number of Transactions: ${response.final_n_tx}`);
            this.log(`-------------------------`);
        })
        );

        await Promise.all(promises);
    }
}