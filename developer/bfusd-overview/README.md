---
icon: dollar-sign
---

# bfUSD Overview

## Introduction

bfUSD (BitFi USD) is a collateralized stablecoin minted against USDT or USDC. Instead of remaining idle, minted bfUSD can be staked into dual ERC-4626 vaults to share protocol revenue, insurance-buffer distributions, and boosted yields.

## Dual Yield Model

* **Horizon bfUSD (hbfUSD):** A low-risk, delta-neutral vault designed for smooth, non-drawdown ratio growth. Its supply is capped at 100 million shares to control risk.
* **Pulsar bfUSD (pbfUSD):** A higher-risk, higher-yield vault with a 2 million share cap that can experience drawdowns between epochs.
* hbfUSD and pbfUSD share a coordinated risk perimeter: part of Horizon's revenue is used to boost Pulsar, while Pulsar's capital (together with a protocol buffer) helps protect Horizon when markets are stressed.

## Redemption Flexibility

bfUSD supports both standard redemptions (3-epoch wait plus manual claim, zero fees) and instant redemptions (0.5% fee, quota-limited). Redeemer contracts currently release USDT on Ethereum, providing liquidity while helping maintain the peg.

## Technical Footprint

* **ERC-4626 compatible:** Both vaults implement the vault standard, exposing `previewDeposit`, `previewWithdraw`, `convertToShares`, and `convertToAssets` helpers.
* **Chainlink pricing:** Stablecoin prices are sourced from Chainlink oracles before conversion.
* **LayerZero aware:** Deposits, withdrawals, and share transfers can cross chains via LayerZero helpers (e.g., `send`, `quoteSend`).
* **Insurance buffers:** Multiple vaults, an on-chain buffer, and a project-funded insurance pool help keep hbfUSD stable even when Pulsar trades sharply.

## Deployment Status

* **Mainnet:** Deployed on Ethereum; see the deployed-contracts page for contract addresses.
* **Testnet:** Deployed on Base Sepolia (ChainId 84532) for testing.
* **Contract code:** The contracts are verified on Etherscan to support independent review.
