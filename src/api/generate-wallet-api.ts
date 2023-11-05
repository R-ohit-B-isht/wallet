import axios from 'axios';

export async function createWallet(name: string, address: string|undefined) {
    const response = await axios.post(`https://api.blockcypher.com/v1/btc/test3/wallets?token=${process.env.CYPHERROCK_TOKEN}`, {
        addresses: [address],
        name,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.data;
}