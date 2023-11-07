import axios from 'axios';
import BIP32Factory from 'bip32';
import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';

const bip32 = BIP32Factory(ecc);

export async function generateAddress(mnemonic: string, index: number) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const root = bip32.fromSeed(seed);
    const path = `m/44'/0'/0'/${index}`;
    const child = root.derivePath(path);
    const { address } = bitcoin.payments.p2pkh({network: bitcoin.networks.testnet, pubkey: child.publicKey });
    return address;
}

export async function isAddressUnused(address: string) {
    const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}`;
    try {
        const response = await axios.get(url);
        return response.data.n_tx === 0;
    } catch (error) {
        console.error(`Failed to check if address is unused: ${error}`);
        return false;
    }
}