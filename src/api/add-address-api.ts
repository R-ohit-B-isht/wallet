import axios from 'axios';

export async function addAddressesToWallet(walletName: string, addresses: string) {
    const data = {
        addresses: [addresses]
    };

    const response = await axios.post(`https://api.blockcypher.com/v1/btc/test3/wallets/${walletName}/addresses?token=${process.env.CYPHERROCK_TOKEN}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.data;
}