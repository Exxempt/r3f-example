'use client'

import { Connection } from "@solana/web3.js";
import { Button } from "@/components/ui/button"
import { getTokenAccounts } from "@/lib/solana";
 
export default function WalletPage() {
    // const rpcEndpoint = 'https://soft-little-leaf.solana-mainnet.quiknode.pro/bf7cebd749826d1eaac301132606f76313cb871c/';
    // const solanaConnection = new Connection(rpcEndpoint);
    const walletToQuery = 'BRW9F17ScjfhzagtCktNiJR4iKMVfav9U6tusPwxz7XP';
    const onClick = () => {
        getTokenAccounts(walletToQuery);
    }
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Wallet Page: Insert Address or connect wallet. </h1>
      <Button onClick={onClick}>Button</Button>
    </section>
    
  );
}