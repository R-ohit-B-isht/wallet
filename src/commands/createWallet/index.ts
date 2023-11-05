import { Command, Flags } from '@oclif/core';
import BIP32Factory from 'bip32';
import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as dotenv from 'dotenv';
import * as ecc from 'tiny-secp256k1';

import { createWallet } from '../../api/generate-wallet-api';
import { readWalletsFromFile, writeWalletsToFile } from '../../utils/file-utils';

dotenv.config();

export default class CreateWalletCommand extends Command {
    static description = 'Create a new BIP39 wallet';

    static flags = {
        name: Flags.string({char: 'n', description: 'Wallet name'}),
    }
    
    async run() {
        const {flags} = await this.parse(CreateWalletCommand)
        const bip32 = BIP32Factory(ecc);
        if (!flags.name) {
            this.error('Wallet name is required');
            return;
        }

        const wallets = readWalletsFromFile();

        // Check if wallet with the same name already exists
        if (wallets.some((w: { name: string | undefined; }) => w.name === flags.name)) {
            this.error('Wallet with the same name already exists');
            return;
        }

        const mnemonic = bip39.generateMnemonic();
        const seed = bip39.mnemonicToSeedSync(mnemonic);
        const root = bip32.fromSeed(seed, bitcoin.networks.testnet);
        const account = root.derivePath("m/44'/1'/0'/0/0");

        const { address } = bitcoin.payments.p2pkh({ network: bitcoin.networks.testnet, pubkey: account.publicKey});
 
        const response = await createWallet(flags.name,address)

        const wallet = {
            addresses: [address],
            mnemonic,
            name: flags.name,
        };

        if (response.status !== 200) {
            this.error(`Failed to create wallet: ${response.statusText}`);
            return;
        }

        wallets.push(wallet);
        writeWalletsToFile(wallets);

        this.log(`Wallet created and saved`);
    }
}