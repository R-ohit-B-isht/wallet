import axios from 'axios';

export async function getBalance(address: string): Promise<any> {
  const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`);
  return response.data;
}
