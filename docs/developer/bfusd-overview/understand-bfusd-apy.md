---
title: Understand bfUSD APY
---

# Understand bfUSD APY

This page explains how bfUSD yield is expressed as APY and how to interpret it for bfUSD vault shares (e.g. `hbfUSD`, `pbfUSD`). It is intended as a conceptual guide for developers and integrators.

## What “APY” means here

bfUSD-related APY is typically an annualized view of how a vault’s share-to-asset value (its “ratio”) changes over time.

Common interpretations you may want to cover on this page:

* **Share price growth:** how many `bfUSD` units one share is worth (assets per share).
* **Annualization window:** which time window is used to annualize (e.g. last epoch, last 7d, last 30d).
* **Net vs. gross:** whether figures are shown before/after fees (if any) and any operational costs.

## On-chain primitives to reference

Depending on your integration, APY estimates can be derived from on-chain observable values such as:

* Epoch-based ratio updates (start/end ratio per epoch)
* ERC-4626 vault helpers (`convertToAssets`, `previewRedeem`, etc.)
* Any protocol-exposed view functions/events that publish ratio updates

## A simple APY estimation outline (placeholder)

1. Pick a time window (e.g. 1 epoch, 7 days).
2. Compute return over the window using ratios or `assetsPerShare`.
3. Annualize the return to produce an APY estimate.

## Notes & caveats (placeholder)

* APY is an estimate and can change between epochs.
* Different front-ends may use different windows/annualization methods.
* For vaults that can draw down, short windows can be noisy.

## TODO (fill in)

* Define the exact APY formulas used by BitFi UI (Horizon vs Pulsar).
* Specify which on-chain sources are canonical for ratio/epoch data.
* Provide a worked example with real contract calls and numbers.
