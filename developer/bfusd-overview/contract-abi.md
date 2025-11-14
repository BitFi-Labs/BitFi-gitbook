# Contract ABI

The bfUSD suite exposes several ABI surfaces:

* **BitFiStablecoin (bfUSD):** ERC-20 with mint and burn access control plus Chainlink Oracle.
* **BitFiStablecoinMinter (USDT / USDC):** Handles deposits of the two underlying stablecoins, enforcing min/max deposits and interacting with the price oracle.
* **StakedBitFiStablecoin (hbfUSD / pbfUSD):** ERC-4626 vaults that expose `deposit`, `mint`, `withdraw`, `redeem`, LayerZero helpers (`send`, `quoteSend`), and detailed view functions such as `currentRatio`, `epochRatios`, and withdrawal bookkeeping.
* **BitFiStablecoinZap:** Bundles minting and staking into a single call for user convenience.
* **Instant & Standard Redeemers:** Accept bfUSD and immediately release USDT/USDC (Instant) or queue a standard redemption (Standard).

All bfUSD-related contracts are verified on Etherscan, so developers can review the implementation and fetch ABIs directly from on-chain sources.
