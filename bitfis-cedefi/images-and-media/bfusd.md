# bfUSD

> bfUSD lets stablecoin holders switch from passive backing to interest-bearing exposure with transparent buffers and layered yield strategies.

## Multi-token Deposits

bfUSD is minted on Ethereum when users deposit USDT or USDC into BitFi's stablecoin engine. Chainlink price feeds keep conversions fair, and the protocol routes the minted bfUSD into liquidity pools that mirror traditional stablecoin desks but with stronger accountability.

## Dual Pool Strategy

Two isolated ERC-4626 pools provide differentiated strategy exposure:

* **Horizon (hbfUSD)** is a low-risk, delta-neutral vault with a steadily increasing ratio and a capped supply of 100 million shares.
* **Pulsar (pbfUSD)** is a higher-yield vault capped at 2 million shares that accepts more aggressive market tilts; its boosted reward stream comes partly from Horizon’s revenue, and its liquidity acts as insulation for Horizon when the low-risk pool faces drawdowns.

The two pools cooperate like mutual insurers: Horizon feeds Pulsar extra yields when markets are benign, and Pulsar absorbs losses before Horizon is touched when volatility causes unexpected drawdowns.

## Integrated Insurance Buffer

bfUSD maintains a dedicated buffer to absorb losses before user capital is affected. This component, combined with Pulsar’s principal support, creates a layered insurance mechanism that is visible on-chain and managed by the `BitFiStablecoinManager`.

## Developer-Friendly Integrations

Developers can interact with the full bfUSD stack via the verified ABIs (see the bfUSD documentation pack) for the ERC-20 token, the minters, the vaults, the zap helper, and the instant/standard redeemers. LayerZero helpers (`send`, `quoteSend`) allow cross-chain movements of bfUSD, hbfUSD, and pbfUSD with transparent `crossChainFee()` reporting.
