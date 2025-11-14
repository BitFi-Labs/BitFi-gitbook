---
icon: arrows-down-up
---

# Unstake bfUSD

## Overview

This page describes how to unstake Horizon (hbfUSD) and Pulsar (pbfUSD) vault shares back into bfUSD using the StakedBitFiStablecoin contracts. The unstake flow is a two-step process: creating a withdrawal request from the vault, then claiming bfUSD once the request becomes claimable after the configured epoch delay.

## Standard Unstake Flow

Before submitting a transaction, use the preview helpers to estimate the amounts involved:

* previewWithdraw(uint256 assets) - calculates how many shares must be burned to receive a target amount of bfUSD.
* previewRedeem(uint256 shares) - returns the bfUSD amount that will be received when burning a given number of shares.

To create an unstake request:

* withdraw(uint256 assets, address receiver, address owner) - burns enough shares from owner to request assets bfUSD for receiver. This creates a withdrawal record and starts the settlement countdown.
* redeem(uint256 shares, address receiver, address owner) - similar to withdraw, but specifies the number of shares to burn rather than the bfUSD amount.

Once the configured settlementDelay (measured in epochs) has passed and the withdrawal becomes claimable:

* claimWithdrawals(uint256[] withdrawalIds) - finalizes one or more pending withdrawals and transfers the corresponding bfUSD to the receiver, emitting WithdrawalClaimed events.

During this process the vault emits WithdrawalRequested and WithdrawalClaimed, which provide full context for dashboards and indexers (request epoch, claimable epoch, share amounts, bfUSD amount, and fees).

## Practical Notes

* Unstaking from hbfUSD or pbfUSD back to bfUSD does not incur protocol fees; it is only gated by the epoch delay.
* The vault's currentRatio and epochRatios determine how many bfUSD a given share amount corresponds to at claim time.
* To redeem bfUSD back into USDT, refer to the Redeem bfUSD page, which documents the standard and instant redeemer contracts.
