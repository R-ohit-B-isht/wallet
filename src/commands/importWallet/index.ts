import { Command, Flags } from '@oclif/core';
import * as dotenv from 'dotenv';

import { readWalletsFromFile,writeWalletsToFile } from '../../utils/file-utils';

dotenv.config();

export default class ImportWalletCommand extends Command {
    static description = 'Import a wallet from a mnemonic';

    static flags = {
        mnemonic: Flags.string({char: 'm', description: 'Mnemonic',required: true}),
        name: Flags.string({char: 'n', description: 'Wallet name',required: true}),
    }
    
    async run() {
        const {flags} = await this.parse(ImportWalletCommand)
        if (!flags.name || !flags.mnemonic) {
            this.error('Mnemonic and wallet name are required');
            return;
        }

        const wallets = readWalletsFromFile();

        if (wallets.some((w: { name: string | undefined; }) => w.name === flags.name)) {
            this.error('Wallet with the same name already exists');
            return;
        }

        const wallet = {
            addresses:[],
            mnemonic: flags.mnemonic,
            name: flags.name,
        };

        wallets.push(wallet);
        writeWalletsToFile(wallets);

        this.log(`Wallet imported and saved`);
    }
}