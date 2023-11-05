import axios from 'axios';

export async function getWallet(walletName: string) {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/wallets/${walletName}/addresses?token=${process.env.USERTOKEN}`);

    return response;
}