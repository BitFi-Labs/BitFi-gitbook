---
icon: list-check
---

# Points Categories & Rules

BitFi’s points program includes multiple quest types across different chains.\
You can find the full quest list on this page. Each quest record contains:

* **Quest Name** – the name of the quest
* **Type** – the main asset or quest type (such as bfUSD, bfBTC, Referral, Social)
* **Category** – how the quest is classified in the points system (such as One-time, HODL, Boost, Social, Referral, Other)
* **Chain** – the chain where the quest is active (such as ETH, BSC, BASE, BTR)

***

## 1. Quest Type (Type)

We roughly group the **Type** field into the following categories:

* **bfUSD**\
  Quests primarily related to bfUSD and its associated assets, such as minting bfUSD, staking into Horizon (hbfUSD) or Pulsar (pbfUSD), or providing bfUSD liquidity in protocols like Curve.
* **bfBTC**\
  Quests related to bfBTC, such as holding bfBTC or staking bfBTC into partner protocols.
* **Referral**\
  Quests related to inviting friends, such as inviting users via your referral link and having them complete holdings.
* **Social**\
  Quests focused on social interactions, such as following official accounts, reposting content, or joining community activities.
* **Other**\
  Other activities that do not fit neatly into the above types, such as meme contests or ambassador rewards.

***

## 2. Points Categories (Earned Points)

On the Earned Points page, you can see points from different sources.\
We classify earned points into the following **Categories**:

* **Referral**\
  Points earned from referral behavior. For example, when referred users earn HODL points, you receive a share of points as Referral points.
* **One-time**\
  Points earned from completing one-time quests (such as “first mint” or “first stake”). The same quest only grants these points the first time you meet the conditions.
* **HODL**\
  Points earned in each epoch for holding tokens or LP positions.\
  This includes bfBTC holding quests and bfUSD-related holding quests (bfUSD, hbfUSD, pbfUSD, bfUSD liquidity LP tokens, etc.).
* **Social**\
  Points earned by completing social-related quests, such as following, reposting, or joining community channels.
* **Boost**\
  Extra points granted on top of your base HODL points when you meet certain Boost conditions. Boost usually acts as a multiplier rather than a standalone base source of points.
* **Other**\
  Points from special activities, such as short-term campaigns or community contribution rewards.

***

## 3. Example Rules (bfBTC & bfUSD)

The following examples are provided to help you understand how quests generate points.\
Exact values, multipliers, and ratios are always defined by the Points page and official campaign rules.

### 3.1 bfBTC HODL Points

* In each epoch, the system grants HODL points based on the amount of bfBTC you actually hold during that epoch.
* The current example rule is: **for every 0.0001 bfBTC you hold, you earn 10 points per epoch**.
* One epoch is approximately 24 hours, and the system takes a snapshot of holdings once per day to calculate points.
* Points are distributed as whole numbers only, with no decimals.\
  For example, if you hold 0.00018 bfBTC, you earn 10 points per epoch (not 18).

### 3.2 bfUSD One-time Quests (One-time)

bfUSD-related one-time quests are typically “first action” quests, such as:

* **First Mint 100 bfUSD** – first time minting 100 bfUSD
* **First Stake 100 bfUSD to Horizon** – first time staking 100 bfUSD into Horizon
* **First Stake 100 bfUSD to Pulsar** – first time staking 100 bfUSD into Pulsar
* **First Provide 100 bfUSD Curve Liquidity** – first time providing 100 USD worth of bfUSD liquidity on Curve

Rules:

* Points are only granted the **first time** you meet the quest conditions; repeated actions do not grant the same one-time reward again.
* These quests are designed to encourage you to try bfUSD for the first time: minting, staking, and using bfUSD in DeFi protocols.

### 3.3 bfUSD HODL Quests (HODL)

bfUSD-related HODL quests include, but are not limited to:

* **Hold bfUSD** – hold bfUSD
* **Hold hbfUSD** – hold Horizon shares
* **Hold pbfUSD** – hold Pulsar shares
* **Provide bfUSD Liquidity on Curve** – provide bfUSD liquidity on Curve

Rules:

* In each epoch, the system takes snapshots of your bfUSD, hbfUSD, pbfUSD, and bfUSD liquidity positions.
* Based on your average holdings in that epoch, the system grants corresponding HODL points.
* The larger and longer your holdings, the more bfUSD HODL points you accumulate over time.
* The exact multipliers and minimum thresholds are defined by the live configuration on the Points page.

### 3.4 bfUSD Boost Quests (Boost)

Example bfUSD-related Boost quests:

* **Hold hbfUSD to earn the boost**
* **Hold pbfUSD to earn the boost**
* **Provide bfUSD Liquidity on Curve to earn the boost**
* **Boost points on bfUSD**

Rules:

* When you meet certain conditions (for example, holding a required amount of hbfUSD / pbfUSD, or providing a certain size of bfUSD liquidity), your bfUSD HODL points receive an additional boost.
* Boosts are usually applied as a multiplier on top of your base HODL points, and the resulting extra points are attributed under the **Boost** category.
* Exact boost ratios, thresholds, and which holdings qualify are defined by the live configuration and documentation on the Points page.

### 3.5 Referral Points

* When users you invite participate in the points program and earn HODL points, you earn Referral points from their activity.
* The rule is: **for every 10 HODL points a referred user earns, you receive 1 referral point**.
* This makes long-term holdings by your referrals the main driver of your Referral points.

### 3.6 Social and Other Quests

* **Social quests** – for example, Galxe social quests, following official accounts, or sharing campaign posts. Completing these quests grants Social points as a one-time reward per quest.
* **Other quests** – such as meme contests or ambassador rewards. These grant points according to each specific campaign’s rules, and are generally categorized as **Other**.

***

## 4. Quest List Overview

Below is an overview table of the current quests and their classifications:

| Quest Name                                         | Type     | Category | Chain |
| -------------------------------------------------- | -------- | -------- | ----- |
| BitFi Referral                                     | Referral | Referral | All   |
| First Mint 100 bfUSD                               | bfUSD    | One-time | ETH   |
| First Stake 100 bfUSD to Horizon                   | bfUSD    | One-time | ETH   |
| First Stake 100 bfUSD to Pulsar                    | bfUSD    | One-time | ETH   |
| First Provide $100 bfUSD Curve Liquidity           | bfUSD    | One-time | ETH   |
| Hold bfUSD                                         | bfUSD    | HODL     | ETH   |
| Hold hbfUSD                                        | bfUSD    | HODL     | ETH   |
| Hold pbfUSD                                        | bfUSD    | HODL     | ETH   |
| Provide bfUSD Liquidity on Curve                   | bfUSD    | HODL     | ETH   |
| Hold hbfUSD to earn the boost                      | bfUSD    | HODL     | ETH   |
| Hold pbfUSD to earn the boost                      | bfUSD    | HODL     | ETH   |
| Provide bfUSD Liquidity on Curve to earn the boost | bfUSD    | HODL     | ETH   |
| Boost points on bfUSD                              | bfUSD    | Boost    | ETH   |
| Hold bfBTC                                         | bfBTC    | HODL     | All   |
| Stake bfBTC on YieldNest                           | bfBTC    | HODL     | BSC   |
| Stake bfBTC on Cygnus                              | bfBTC    | HODL     | BTR   |
| Stake bfBTC on RollX                               | bfBTC    | HODL     | BASE  |
| Stake bfBTC on DeSyn                               | bfBTC    | HODL     | BTR   |
| Stake bfBTC on Turtle Club TAC (ETH)               | bfBTC    | HODL     | ETH   |
| Hold bfBTC-YT on Spectra-Oct.(Ended)               | bfBTC    | HODL     | HEMI  |
| Hold bfBTC-PT on Spectra-Sep.(Ended)               | bfBTC    | HODL     | HEMI  |
| Hold bfBTC-YT on Spectra-Sep.(Ended)               | bfBTC    | HODL     | HEMI  |
| Provide bfBTC-LP on Spectra-Sep.(Ended)            | bfBTC    | HODL     | HEMI  |
| Galxe HODL (Ended)                                 | bfBTC    | HODL     | All   |
| Galxe Social Quests (Ended)                        | Social   | Social   | All   |
| Meme Contest                                       | bfBTC    | Other    | All   |
| Ambassador Rewards                                 | bfBTC    | Other    | All   |
