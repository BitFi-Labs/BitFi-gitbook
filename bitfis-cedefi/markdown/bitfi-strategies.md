# BitFi Strategies

BitFi partners with several professional quantitative teams, employing a stable delta-neutral strategy to generate consistent returns.

BitFi utilizes a sophisticated delta-neutral strategy to generate consistent BTC yield for users. Unlike traditional investment approaches susceptible to market volatility, our strategy minimizes price fluctuation exposure while maximizing returns. This is achieved through a dynamically adjusted portfolio maintaining a net delta of zero.

We apply the same risk-aware mindset to our USD products: Horizon (hbfUSD) follows a conservative, delta-neutral path while Pulsar (pbfUSD) takes a more aggressive approach, accepting potential drawdowns for higher upside. The two pools operate like a paired insurance structure—Horizon channels incremental revenue to Pulsar, and Pulsar absorbs losses before Horizon is impacted.


## **Core Strategy Components:**

* **Delta-Neutral Hedging:** A core component of our strategy involves creating a delta-neutral portfolio by precisely matching long positions in Bitcoin-correlated assets with short positions in derivative contracts (e.g., perpetual swaps, futures). This dynamic hedging minimizes exposure to market volatility.
* **Yield Generation:** While delta-neutral hedging mitigates price risk, BitFi generates yield through:
  * **Funding Rates:** Capitalizing on positive funding rates from perpetual swap contracts. 
  * **Basis Spreads:** Exploiting favorable discrepancies between spot and derivative market prices. 
  * **Staking Rewards (where applicable):** Integrating staking rewards from underlying assets.
