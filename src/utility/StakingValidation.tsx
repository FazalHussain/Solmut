import {
    Connection,
    PublicKey,
    ParsedInstruction,
    ParsedTransactionWithMeta
  } from '@solana/web3.js';
import { MINT_ADDRESS, STAKING_ADDRESS } from '../constants/constants';
  
  const connection = new Connection("https://api.devnet.solana.com");
  
  const TOKEN_MINT = new PublicKey(MINT_ADDRESS); 
  const STAKING_WALLET = new PublicKey(STAKING_ADDRESS);
  
  /**
   * Validates whether a transaction hash contains a valid SLMT transfer
   */
  export const validatePumpTokenStakeTx = async (
    txHash: string,
    expectedAmount: number, 
  ): Promise<boolean> => {
    try {
      const tx = await connection.getParsedTransaction(txHash, {
        maxSupportedTransactionVersion: 0
      });
  
      if (!tx) {
        throw new Error("Transaction not found");
      }
  
      const parsedTx = tx as ParsedTransactionWithMeta;
  
      for (const ix of parsedTx.transaction.message.instructions as ParsedInstruction[]) {
        if (
          ix.program === 'spl-token' &&
          ix.parsed.type === 'transfer'
        ) {
          const { destination, amount, mint } = ix.parsed.info;
  
          const isCorrectMint = mint === TOKEN_MINT.toBase58();
          const isCorrectDest = destination === STAKING_WALLET.toBase58();
          const isCorrectAmount = parseInt(amount) === expectedAmount;
  
          if (isCorrectMint && isCorrectDest && isCorrectAmount) {
            return true;
          }
        }
      }
  
      return false;
    } catch (err) {
      console.error("Validation Error:", err);
      return false;
    }
  };