import { defineConfig } from 'vitepress';

const sidebar = [
  {
    text: 'OVERVIEW',
    items: [
      { text: 'Welcome to BitFi', link: '/' },
      { text: 'CeDeFi Innovation', link: '/overview/cedefi-innovation' },
      { text: 'Addressing Market Challenges', link: '/overview/addressing-market-challenges' },
      { text: 'FAQ', link: '/overview/faq' }
    ]
  },
  {
    text: 'BACKGROUND',
    items: [
      { text: 'Current Bitcoin Market Challenges', link: '/background/quickstart' },
      { text: 'The BitFi Solution: A CeDeFi Hybrid Approach', link: '/background/the-bitfi-solution-a-cedefi-hybrid-approach' }
    ]
  },
  {
    text: "BITFI'S CEDEFI",
    items: [
      { text: 'Integration with CeFi and DeFi', link: '/bitfis-cedefi/intro' },
      {
        text: 'Implementation of CeFi',
        link: '/bitfis-cedefi/cefi/',
        collapsed: true,
        items: [
          { text: 'Ceffu MirrorX', link: '/bitfis-cedefi/cefi/ceffu-mirrorx' },
          { text: 'BitFi Strategies', link: '/bitfis-cedefi/cefi/bitfi-strategies' },
          { text: 'Risk Management', link: '/bitfis-cedefi/cefi/risk-management' }
        ]
      },
      {
        text: 'Implementation of DeFi',
        link: '/bitfis-cedefi/defi/',
        collapsed: true,
        items: [
          { text: 'bfBTC', link: '/bitfis-cedefi/defi/bfbtc' },
          { text: 'bfUSD', link: '/bitfis-cedefi/defi/bfusd' }
        ]
      }
    ]
  },
  {
    text: 'HOW TO',
    items: [
      { text: 'Introduction', link: '/how-to/introduction' },
      { text: 'How to participate in Points Campaign', link: '/how-to/how-to-participate-in-points-campaign' },
      { text: 'Get bfUSD and Stake in Horizon/Pulsar Pools', link: '/how-to/get-bfusd-and-stake-in-horizon-pulsar-pools' },
      { text: 'Unstake pbfUSD/hbfUSD and Redeem bfUSD to USDT', link: '/how-to/unstake-pbfusd-hbfusd-and-redeem-bfusd-to-usdt' },
      { text: 'Stake BTC on an EVM-Compatible Chain', link: '/how-to/stake-btc-on-an-evm-compatible-chain' },
      { text: 'Stake BTC on Bitcoin Network', link: '/how-to/stake-btc-on-bitcoin-network' },
      { text: 'Unstake bfBTC to EVM-Compatible Chain', link: '/how-to/unstake-bfbtc-to-evm-compatible-chain' },
      { text: 'Unstake bfBTC to Bitcoin Network', link: '/how-to/unstake-bfbtc-to-bitcoin-network' },
      { text: 'Create SUI Wallet', link: '/how-to/create-sui-wallet' }
    ]
  },
  {
    text: 'POINTS PROGRAM',
    items: [
      { text: 'Overview', link: '/points-program/overview' },
      { text: 'Points Categories & Rules', link: '/points-program/points-details' }
    ]
  },
  {
    text: 'DEVELOPER',
    items: [
      {
        text: 'bfBTC Overview',
        link: '/developer/bfbtc-overview/',
        collapsed: true,
        items: [
          { text: 'Deployed Contracts', link: '/developer/bfbtc-overview/deployed-contracts' },
          { text: 'Contract Parameters', link: '/developer/bfbtc-overview/contract-parameters' },
          { text: 'Contract ABI', link: '/developer/bfbtc-overview/contract-abi' }
        ]
      },
      {
        text: 'bfUSD Overview',
        link: '/developer/bfusd-overview/',
        collapsed: true,
        items: [
          { text: 'Deployed Contracts', link: '/developer/bfusd-overview/deployed-contracts' },
          { text: 'Contract Parameters', link: '/developer/bfusd-overview/contract-parameters' },
          { text: 'Contract ABI', link: '/developer/bfusd-overview/contract-abi' }
        ]
      },
      {
        text: 'Using Contract',
        link: '/developer/using-contract/',
        collapsed: true,
        items: [
          { text: 'Stake bfBTC', link: '/developer/using-contract/stake-bfbtc' },
          { text: 'Unstake bfBTC', link: '/developer/using-contract/unstake-bfbtc' },
          { text: 'bfBTC Fees', link: '/developer/using-contract/bfbtc-fees' },
          { text: 'bfBTC Price Oracle', link: '/developer/using-contract/bfbtc-price-oracle' },
          { text: 'Stake bfUSD', link: '/developer/using-contract/stake-bfusd' },
          { text: 'Unstake bfUSD', link: '/developer/using-contract/unstake-bfusd' },
          { text: 'Redeem bfUSD', link: '/developer/using-contract/redeem-bfusd' },
          { text: 'bfUSD Fees', link: '/developer/using-contract/bfusd-fees' },
          { text: 'bfUSD Oracle', link: '/developer/using-contract/bfusd-oracle' }
        ]
      },
      {
        text: 'Epoch and Ratio',
        link: '/developer/epoch-and-ratio/',
        collapsed: true,
        items: [
          { text: 'Epoch Updates', link: '/developer/epoch-and-ratio/epoch-updates' },
          { text: 'bfUSD Epoch Vesting', link: '/developer/epoch-and-ratio/bfusd-epoch-vesting' },
          { text: 'Underlying Asset Price Variation', link: '/developer/epoch-and-ratio/underlying-asset-price-variation' },
          { text: 'APY Calculation', link: '/developer/epoch-and-ratio/apy-calculation' }
        ]
      },
      { text: 'Audit Report', link: '/developer/audit-report' }
    ]
  },
  {
    text: 'RESOURCE',
    items: [
      { text: 'Communities', link: '/resource/communities' },
      { text: 'Brand Assets', link: '/resource/brand-assets' },
      { text: 'BitFi Home Page', link: 'https://www.bitfi.one/' },
      { text: 'BitFi Dapp', link: 'https://app.bitfi.one/' }
    ]
  }
];

export default defineConfig({
  lang: 'en-US',
  title: 'BitFi Docs',
  description: 'BitFi documentation on VitePress',
  srcDir: '.',
  cleanUrls: true,
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/logo-bitfi.svg' }]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    logo: {
      light: '/logo-bitfi.svg',
      dark: '/logo-bitfi-dark.svg'
    },
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'Home', link: 'https://www.bitfi.one/' },
      { text: 'Earn', link: 'https://app.bitfi.one/' }
    ],
    sidebar,
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bitfi-labs' },
      { icon: 'x', link: 'https://x.com/Bitfi_Org' },
      { icon: 'discord', link: 'https://discord.gg/MRNjNACS5R' },
      { icon: 'telegram', link: 'https://t.me/bitfi_org' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/bitfi-org' }
    ],
    lastUpdatedText: 'Updated',
    footer: {
      message: 'Unlock native yield through CeDeFi',
      copyright: 'BitFi'
    }
  }
});
