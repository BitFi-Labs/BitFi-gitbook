---
icon: object-union
---

# Integration with CeFi and DeFi

## **CeFi Integration**

BitFi seamlessly integrates with centralized exchanges (CEXs) like Binance via Ceffu's MirrorX service. Upon deposit, BitFi transfers funds to a Ceffu Prime Wallet, mirroring them at a 1:1 ratio to a Binance MirrorX sub-account without requiring users to directly interact with the CEX. This approach is accessible to all Bitcoin & stablecoins holders, regardless of experience level.

See: [Implementation of CeFi](/bitfis-cedefi/cefi/).



## **DeFi Integration**

BitFi issues two liquidity tokens, **bfBTC** and **bfUSD**, that connect CeFi yields with on-chain DeFi opportunities. Users can hold these tokens to earn underlying CeDeFi yield and also supply them to integrated protocols for swapping, lending, or liquidity provision. bfBTC and bfUSD can be redeemed through BitFi's contracts at supported endpoints, returning the corresponding BTC or stablecoin collateral.

See: [Implementation of DeFi](/bitfis-cedefi/defi/).
