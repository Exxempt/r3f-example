import { getTokenAccounts } from "@/lib/solana";

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [walletNFTS] = await Promise.all([
    getTokenAccounts(slug)
  ]);

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">{walletNFTS}</h1>
    </section>
  );
}