# bfUSD Oracle

## Overview

bfUSD uses price feeds to convert between USDT, USDC, and the dual staking pools. USDT deposits are always treated as 1:1, while USDC conversions consult a Chainlink oracle to keep pricing fair when the stablecoin drifts slightly.


## hbfUSD / pbfUSD Ratio Tracking

* **`currentRatio()`** – exposes the current bfUSD-to-share ratio with 1e8 precision.
* **`epochRatios(uint256 epoch)`** – returns `(startRatio, endRatio, startTime, endTime)` so that front-ends can reconstruct how a share price changed inside an epoch.
* **`convertToShares` / `convertToAssets`** – reuse the ratio logic, so once the oracle provides the bfUSD value, the vault can translate between assets and shares deterministically.

## Notes

* Always call `previewDeposit`, `previewMint`, `previewWithdraw`, or `previewRedeem` to show the expected amounts before sending a transaction.
* For USDC flows, read the Chainlink feed first, then apply the vault ratio to determine the share amount to mint or burn.
