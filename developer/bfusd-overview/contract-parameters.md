# Contract Parameters

| Parameter | Value | Notes |
| --- | --- | --- |
| bfUSD decimals | 6 | Matches USDT/USDC standard precision |
| hbfUSD supply cap | 100,000,000 shares | Controls risk for the low-risk pool |
| pbfUSD supply cap | 2,000,000 shares | Controls risk for the high-yield pool |
| Ratio precision | 1e8 | `currentRatio()` and `epochRatios()` use this scaling to convert between bfUSD and shares |
| Standard redemption delay | 3 epochs + manual claim | Users must wait for `settlementDelay` epochs before calling `claimWithdrawals` |
| Instant redemption fee | 0.5% | Charges the fee in bfUSD and enforces a quota on the redeemer contract |
| Staking/unstaking fees | 0 | Minting, depositing, withdrawing, and unstaking are free; only instant redemption and cross-chain transfers charge small fees |
| Cross-chain fee | Variable (per `crossChainFee()`) | Charged when sending shares via LayerZero; uses `FeeLibrary.Fees` structure |
| Oracle | Chainlink | Stablecoins prices are sourced from Chainlink oracles |
| Epoch tracking | `epochRatios(uint256 epoch)` | Each epoch stores `(startRatio, endRatio, startTime, endTime)` to rebuild historical share values |

Additional notes:

* `StakedBitFiStablecoin` exposes `maxDeposit`, `maxMint`, `maxWithdraw`, and `maxRedeem` to enforce the supply caps and ensure `supplyCap` is never exceeded.
* `previewDeposit`, `previewMint`, `previewWithdraw`, and `previewRedeem` reuse the vault ratio logic, making the user experience more predictable and user-friendly.
* `pendingWithdrawal` data (requested epochs, claimable epochs, fees) can be read through the `withdrawals(uint256 id)` view and should be shown in any UI that lists queued redemptions.
