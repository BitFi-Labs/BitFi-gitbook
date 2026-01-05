# Epoch Updates

## bfBTC Epoch Updates

Epoch updates are triggered when:

* The value of open positions changes beyond a predefined threshold.
* A specified time interval elapses.

Upon meeting these conditions, the manager triggers an epoch update. The management wallet updates the contract to the next epoch and updates the exchange ratio (`Ratio`). 

After the update, all deposit and withdrawal transactions use the latest epoch's value to calculate bfBTC amounts.

Due to performance differences between Binance Smart Chain and Ethereum, Ethereum epoch updates might lag behind BSC updates. The delay typically does not exceed one minute.

## bfUSD Epoch Updates

The same epoch mechanism is used for bfUSD on Ethereum. When `updateEpoch` is called for the bfUSD manager contract, it refreshes the ratios for both Horizon (hbfUSD) and Pulsar (pbfUSD) vaults and settles pending withdrawals based on the updated ratios.

For bfUSD vaults, Horizon (`hbfUSD`) and Pulsar (`pbfUSD`) additionally use an **Epoch Vesting** mechanism: when the epoch ratio increases, the new ratio is linearly vested over a fixed window rather than applied instantly. This reduces short-term arbitrage opportunities around the epoch boundary. For full details, including formulas and the latest design update, see [bfUSD Epoch Vesting](bfusd-epoch-vesting.md).

After a bfUSD epoch update:

* `currentRatio` and `epochRatios` for hbfUSD and pbfUSD reflect the new exchange rate between shares and bfUSD.
* Unstake & standard redemption requests that have reached their claimable epoch can be processed, allowing users to claim bfUSD at the proposed epoch ratio or claim USDT.
