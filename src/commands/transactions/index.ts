import { Command, Flags } from '@oclif/core';

import { getTransactions } from '../../api/get-transactions-api';
import { readWalletsFromFile } from '../../utils/file-utils';

export default class GetTransactionsCommand extends Command {
    static description = 'Get the transactions of a wallet';

    static flags = {
        name: Flags.string({char: 'n', description: 'Wallet name', required: true}),
    }

    async run() {
        const {flags} = await this.parse(GetTransactionsCommand);
        const wallets = readWalletsFromFile();
        const wallet = wallets.find((w: { name: string | undefined; }) => w.name === flags.name);

        if (!wallets.some((w: { name: string | undefined; }) => w.name === flags.name)) {
            this.error('Wallet with the given name does not exist');
            return;
        }
    
        const promises = wallet.addresses.map(async (address: string) => {
            const data = await getTransactions(address);
            this.log(`\n-------------------------`);
            this.log(`Address: ${address}`);
            this.log(`-------------------------`);
            this.log(`Number of Transactions: ${data.n_tx}`);
            this.log('Transactions:');
            // loop only if transactions are more than 0
            if (data.n_tx === 0) {
                this.log('No transactions found for this address.');
            } else {
                for (let i = 0; i < data.txrefs.length; i++) {
                    const tx = data.txrefs[i];
                    this.log(`- ${tx.tx_hash}`);
                }
            }
            
            this.log(`-------------------------`);
        });
        
        await Promise.all(promises);
    }
}