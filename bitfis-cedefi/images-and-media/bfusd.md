# bfUSD

> bfUSD is BitFi's yield-bearing stablecoin backed by USDT and USDC.

## Overview

bfUSD is minted on Ethereum by depositing USDT or USDC into BitFi's stablecoin contracts. Pricing is secured by Chainlink oracles, and the resulting bfUSD token is an ERC-20 asset that can move between BitFi and external DeFi protocols.

## Horizon and Pulsar

bfUSD supports two ERC-4626 vaults with different risk profiles:

* **Horizon (hbfUSD):** Low-risk, delta-neutral vault with a steadily increasing share price and a supply cap of 100 million shares.
* **Pulsar (pbfUSD):** Higher-risk, higher-yield vault with a 2 million share cap that can experience drawdowns between epochs.

Horizon and Pulsar are linked by design: part of Horizon's revenue is used to boost Pulsar, and Pulsar's capital helps protect Horizon during stress events.

## Insurance and Integrations

A protocol buffer, together with Pulsar's capital, is used to absorb losses before they impact Horizon depositors. All contracts are available via verified ABIs, and LayerZero helpers (send, quoteSend) support cross-chain transfers of bfUSD, hbfUSD, and pbfUSD.
