import axios from 'axios';

export async function getTransactions(address: string) {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}`);
    return response.data;
}