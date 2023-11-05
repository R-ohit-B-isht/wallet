import * as fs from 'node:fs';
import * as path from 'node:path';

const walletPath = path.join(__dirname, '../..', 'data', 'wallet.json');

export function readWalletsFromFile(): any[] {
  if (fs.existsSync(walletPath)) {
    const data = fs.readFileSync(walletPath, 'utf8');
    const parsedData= JSON.parse(data);
    return Array.isArray(parsedData) ? parsedData : [parsedData];
  }

  return [];
}

export function writeWalletsToFile(wallets: any[]): void {
  fs.writeFileSync(walletPath, JSON.stringify(wallets));
}
