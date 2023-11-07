import { Command, Flags } from '@oclif/core';

import { addAddressesToWallet } from '../../api/add-address-api';
import { generateAddress, isAddressUnused } from '../../api/generate-address-api';
import { readWalletsFromFile, writeWalletsToFile } from '../../utils/file-utils';

export default class GenerateAddressCommand extends Command {
    static description = 'Generate an unused address for a wallet';

    static flags = {
        name: Flags.string({char: 'n', description: 'Wallet name', required: true}),
    }

    async run() {
        const {flags} = await this.parse(GenerateAddressCommand);

        let wallets = readWalletsFromFile();

        const wallet = wallets.find((w: { name: string | undefined; }) => w.name === flags.name);

        if (!wallets.some((w: { name: string | undefined; }) => w.name === flags.name)) {
            this.error('Wallet with the given name does not exist');
            return;
        }

        const address = await generateAddress(wallet.mnemonic, wallet.addresses.length);
        console.log(address)
        if (address && await isAddressUnused(address)) {
            this.log(`Generated unused address: ${address}`);
            wallet.addresses.push(address);
            wallets = wallets.map((w: { name: string | undefined; }) => w.name === flags.name ? wallet : w);
            addAddressesToWallet(wallet.name, address);
            writeWalletsToFile(wallets);
        } else {
            this.log('Generated address is not unused. Please try again.');
        }

    }
}