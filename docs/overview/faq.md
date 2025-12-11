---
icon: comments-question-check
---

# FAQ

## **What is bfBTC?**

bfBTC is BitFi protocol's real-yield bearing token that provides native BTC rewards for Bitcoin holders while enhancing liquidity in the Bitcoin ecosystem. Through BitFi quantitative strategies, bfBTC delivers continuous BTC rewards to its holders.



## **How does bfBTC work?**

BitFi partners with Ceffu to custody user-deposited Bitcoin. Under multi-party supervision, these funds are deployed in BitFi's quantitative strategies to generate yields. The earnings are regularly updated to the bfBTC ratio (exchange rate), allowing users to accumulate yields once they exchange their BTC for bfBTC.



## **What is bfUSD?**

bfUSD (BitFi USD) is BitFi's yield-bearing stablecoin, minted against USDT or USDC. Holders can keep bfUSD as a transferable ERC-20 asset or stake it into Horizon (hbfUSD) and Pulsar (pbfUSD) vaults to share protocol yields.



## **How does bfUSD work?**

When users deposit USDT or USDC into BitFi's bfUSD contracts, the assets are managed under BitFi's CeDeFi framework and priced via Chainlink oracles. The protocol periodically updates vault ratios so Horizon and Pulsar shares reflect accumulated returns, while bfUSD itself can be redeemed back to USDT through standard or instant redeemers.



## **How can I stake stablecoins on Ethereum?**

On Ethereum, connect your wallet on the bfUSD page, approve USDT or USDC, and deposit into the bfUSD minter. You can either mint bfUSD first and then stake into Horizon/Pulsar, or use the zap flow to go from USDT/USDC directly into hbfUSD or pbfUSD in one transaction.



## **How can I unstake to bfUSD on Ethereum?**

To exit a vault position, connect your wallet on the bfUSD page and choose Horizon or Pulsar. Use the unstake flow to request a withdrawal; after the required epochs have passed, claim to receive bfUSD back into your wallet. No protocol fee is charged for this step, only the epoch delay applies.



## **How can I redeem to USDT on Ethereum?**

With bfUSD in your wallet, use the redeem interface to select either standard redemption (3-epoch wait, no fee) or instant redemption (0.5% fee, quota-based). Standard redemptions settle after the waiting period, while instant redemptions burn bfUSD and immediately send USDT to your address, subject to available quota.



## **How can I stake on Bitcoin Network?**

For Bitcoin network stakes, start by connecting your Bitcoin wallet. Next, select your desired receiving network and connect your EVM wallet to complete the stake. Please note that Bitcoin network stakes require 6 block confirmations (about 1 hour) before bfBTC is sent to your EVM wallet.



## **How can I stake on EVM network?**

For EVM network (ETH, BASE, BSC, HEMI, etc..) stakes. Just connect your wallet and make sure you have BTC(Bitlayer Native Token), BTCB(BSC BEP20), or hemiBTC(Hemi ERC20) along with enough gas fees for the network transaction.



## **How to unstake to Bitcoin?**

To unstake, start by connecting your EVM wallet. Select 'Bitcoin' as your Receive network in the unstake section and connect your Bitcoin wallet to receive the funds. Please note that unstake requests require processing time. Once completed, you'll receive Bitcoin directly to your Bitcoin address while the bfBTC is burned.



## **How to unstake to EVM network?**

To unstake, connect your EVM wallet and select BSC(Binance Smart Chain), BTR(Bitlayer) or HEMI(Hemi network) as your Receive network. Please note that unstake requests require processing time. Once completed, your bfBTC will be burned, and you can claim your BTCB, BTC or hemiBTC from the 'Claim' section.



## **Why is my received BTC amount different after unstake?**

bfBTC's ratio(exchange rate) changes with each Epoch. Since unstake require processing time, the Epoch during execution may differ from when you initiated the request, causing a slight difference between your expected and actual receive amount.



## **What is Epoch & Ratio?**

An Epoch is the minimum timeframe between exchange rate updates. For bfBTC, the ratio is updated each Epoch to reflect BTC strategy performance; the Ratio indicates how much BTC you can receive for 1 bfBTC in that Epoch. For bfUSD, Horizon and Pulsar vault ratios are also updated on an epoch basis, defining how many bfUSD each share is worth when staking or unstaking.



## **What is Est. Rewards?**

Estimated rewards are calculated based on the ratio difference between your deposit time and withdrawal request time. However, rewards from unstake requests in Pending status are not included in Est. rewards, which may result in some differences from your actual rewards.



## What is the Fee?

For bfBTC, BitFi charges small fixed fees on unstake operations to cover processing costs (for example, native withdraw to Bitcoin or EVM withdraw). Refer to the bfBTC fee table in the developer docs for current values.

For bfUSD, unstaking from Horizon or Pulsar back to bfUSD does not incur protocol fees; fees only apply when redeeming bfUSD back into USDT. Standard redemption has no fee but includes a waiting period, while instant redemption charges a 0.5% fee and is limited by a quota.



## What are BitFi Points?

BitFi Points are the reward points of BitFi's points program. Users can participate in various activities to earn points at [https://app.bitfi.one/points-program](https://app.bitfi.one/points-program). Based on the number of points earned, BitFi Tokens will be airdropped in the future. You can earn points by inviting others to join with your referral code and hold bfBTC, by holding bfBTC yourself, or by participating in ecosystem projects.



## What is APY?

BitFi reports two APY metrics: a 7‑epoch rolling APY and a cumulative APY since genesis. The former reflects short‑term performance, while the latter captures long‑term performance. For details, please refer to this article: 

See: [APY Calculation](developer/epoch-and-ratio/apy-calculation.md).

