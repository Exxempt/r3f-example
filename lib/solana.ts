import { Connection, GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { metadata } from "../lib/metadata";

export async function getTokenAccounts(
  wallet: string,
  // solanaConnection: Connection
) {
   const rpcEndpoint = 'RPC_URL';
   const solanaConnection = new Connection(rpcEndpoint);
  const filters: GetProgramAccountsFilter[] = [
    {
      dataSize: 165, //size of account (bytes)
    },
    {
      memcmp: {
        offset: 32, //location of our query in the account (bytes)
        bytes: wallet, //our search criteria, a base58 encoded string
      },
    },
  ];
  const accounts = await solanaConnection.getParsedProgramAccounts(
    TOKEN_PROGRAM_ID,
    { filters: filters }
  );
  const mints = metadata.map(({ token }) => token);
  const walletResults: Array<string> = [];
  accounts.forEach((account) => {
    const parsedAccountInfo: any = account.account.data;
    const mintAddress: string = parsedAccountInfo["parsed"]["info"]["mint"];
    const tokenBalance: number =
      parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
    if (mints.includes(mintAddress) && tokenBalance === 1) {
      walletResults.push(mintAddress);
    }
  });
  return (
    console.log(walletResults),
    walletResults
  )
}
