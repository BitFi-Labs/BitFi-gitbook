# bfUSD Epoch Vesting Mechanism

This document describes the bfUSD-specific epoch vesting mechanism used by the Horizon (`hbfUSD`) and Pulsar (`pbfUSD`) vaults on Ethereum. It does not apply to bfBTC.

The mechanism is designed to:

* Smooth out ratio changes over time.
* Reduce arbitrage opportunities around the exact epoch update timestamp.

Throughout this document:

* `StartRatio`: the ratio at the start of the current epoch.
* `EndRatio`: the target ratio for the current epoch.
* `CurrentRatio`: the effective ratio at a given timestamp within the epoch.
* `EpochDuration`: fixed at 24 hours (in seconds) for vesting calculations when the ratio increases.

All formulas below apply independently to both Horizon (`hbfUSD`) and Pulsar (`pbfUSD`) vaults.

## 1. Linear ratio vesting when the epoch ratio increases

When an epoch update results in an increased ratio:

1. After `updateEpoch` is executed:
   * The previous epoch's `EndRatio` is stored as the current epoch's `StartRatio`.
   * The new target ratio for this epoch is stored as `EndRatio`.
2. `EpochDuration` is set to 24 hours (in seconds).
3. Over the next 24 hours, the ratio is incremented every second from `StartRatio` toward `EndRatio` until, at the end of the 24th hour, it reaches `EndRatio`.

Let:

* `TimeElapsed` be the number of seconds elapsed since the epoch start, clamped to `[0, EpochDuration]`.

Then:

$$
\mathrm{CurrentRatio}
=
\mathrm{StartRatio}
+ \left( \mathrm{EndRatio} - \mathrm{StartRatio} \right)
\times
\frac{\mathrm{TimeElapsed}}{\mathrm{EpochDuration}}
$$

## 2. Immediate ratio change when the epoch ratio decreases

When an epoch update results in a decreased ratio:

* The protocol does not apply linear vesting.
* It does not use `EpochDuration` for this case.
* Instead, the epoch ratio is updated immediately to `EndRatio` at the time of the epoch update.

In other words, for a decreasing ratio, `CurrentRatio` is set directly to `EndRatio` with no time-based interpolation.

## 3. Stake and unstake calculations

This section summarizes how user deposits (stake) and withdrawals (unstake) are calculated under the epoch vesting mechanism.

### 3.1 Stake (bfUSD -> shares)

When a user stakes bfUSD into Horizon or Pulsar, they receive vault shares. The number of shares is calculated using the final ratio of the current epoch, `EndRatio`:

* Stake:

  $$
  \mathrm{ReceiveAmount}
  =
  \frac{\mathrm{StakeBfusdAmount}}{\mathrm{EndRatio}}
  $$

Where:

* `StakeBfusdAmount` is the amount of bfUSD deposited.
* `ReceiveAmount` is the number of shares minted to the user.

### 3.2 Unstake (shares -> bfUSD)

When a user unstakes shares, they receive bfUSD. The amount of bfUSD is calculated using the time-dependent `CurrentRatio`, which follows the interpolation described in section 1 (for increasing epochs) or is equal to `EndRatio` (for decreasing epochs):

* Unstake:

  $$
  \mathrm{ReceiveAmount}
  =
  \mathrm{UnstakeSharesAmount}
  \times
  \mathrm{CurrentRatio}
  $$

Where:

* `UnstakeSharesAmount` is the number of shares burned.
* `ReceiveAmount` is the amount of bfUSD returned to the user.
* `CurrentRatio` is given by:

  $$
  \mathrm{CurrentRatio}
  =
  \mathrm{StartRatio}
  +
  \left(
    \mathrm{EndRatio}
    -
    \mathrm{StartRatio}
  \right)
  \times
  \frac{\mathrm{TimeElapsed}}{\mathrm{EpochDuration}}
  $$

### 3.3 User impact

Under this design:

* If a user stakes and then unstakes within the same epoch while the ratio is increasing, they will incur a loss.
* The approximate loss (in bfUSD terms) is:

  $$
  \text{Loss}
  \approx
  \mathrm{StakeBfusdAmount}
  \times
  \left(
    \mathrm{EndRatio}
    -
    \mathrm{CurrentRatio}
  \right)
  $$

This behavior:

* Removes profitable short-term "in-and-out" arbitrage based on the linear vesting curve.
* Encourages longer-term holding of `pbfUSD` and `hbfUSD` rather than rapid churn around epoch boundaries.
