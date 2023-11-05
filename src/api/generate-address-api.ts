import axios from 'axios';

export async function generateAddress() {
    const response = await axios.post('https://api.blockcypher.com/v1/btc/test3/addrs');
    return response.data.address;
}

export async function isAddressUnused(address: string) {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}`);
    return response.data.n_tx === 0;
}