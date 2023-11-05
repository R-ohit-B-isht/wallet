import { Command } from '@oclif/core';

import { readWalletsFromFile } from '../../utils/file-utils';



// list wallets available locally

export default class ListWalletsCommand extends Command {
    static description = 'List all wallets';

    async run() {
        const wallets = readWalletsFromFile();

        for (const [index, wallet] of wallets.entries()) {
            this.log(`Wallet ${index + 1}: ${wallet.name}`);
        }
    }
}

// import axios from 'axios';
// import * as dotenv from 'dotenv';

// dotenv.config();

// list wallets on online account 
// export default class ListWalletsCommand extends Command {
//     static description = 'List all wallets';

//     async run() {
//         const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/wallets?token=${process.env.CYPHERROCK_TOKEN}`);

//         if (response.status !== 200) {
//             this.error('Failed to fetch wallets');
//             return;
//         }

//         const wallets = response.data.wallet_names;

//         for (const [index, wallet] of wallets.entries()) {
//             this.log(`Wallet ${index + 1}: ${wallet}`);
//         }
//     }
// }