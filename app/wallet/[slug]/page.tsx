import { getTokenAccounts } from "@/lib/solana";

export default async function Blog({ params }) {
    const [walletNFTS] = await Promise.all([
      getTokenAccounts(params.slug)
    ]);
  
    return (
        <section>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">{walletNFTS}</h1>
      </section>
    );
  }