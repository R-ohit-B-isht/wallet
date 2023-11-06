import axios from 'axios';

export async function getWallet(walletName: string) {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/wallets/${walletName}?token=${process.env.CYPHERROCK_TOKEN}`);

    return response;
}