/* eslint-disable import/no-unused-modules */
/* eslint-disable no-unused-vars */
import bitscoin from './icon_new/Bitscoin.png.png'
import bitswap from './icon_new/bitsswap.jpg'
import brightGold from './icon_new/brightgold.jpeg'

export const tokenList = [
  {
    coinSymbol: 'BTS',
    coinImg: bitscoin,
    coinName: 'BITSCOIN',
    // address: '0x269c4867bc193c043b3E02BC8D2Cc68088D21023',
    address: '0x9A1628b2f0D8f183b72841cA9374049Eaa8d0eA0',  //testing
    decimals: 18,
  },
  {
    coinSymbol: 'BNB',
    coinImg: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
    coinName: 'Binance Coin',
    address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    decimals: 18,
    isCoin: true
  },
  {
    coinSymbol: 'BRGT',
    coinImg: brightGold,
    coinName: 'BRIGHT GOLD',
    address: '0xcF1283fFEb71Bf76c3660023338F3f3a40B4b4F9',
    decimals: 18,
  },
  {
    coinSymbol: 'BITSSWAP',
    coinImg: bitswap,
    coinName: 'bitsswaps',
    address: '0x73e54252A7c12459EE05B404891cD262d2bCA56d',
    decimals: 18,
  },
  
  {
    coinSymbol: 'DAI',
    coinImg: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
    coinName: 'Dai Token',
    address: '0x3793D3536eecC12D93f77513D5800449582Ad2a3',
    decimals: 18,
  },
  {
    coinSymbol: 'USDC',
    coinImg: 'https://cdn.moralis.io/eth/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    coinName: 'USD Coin',
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    decimals: 18,
  },
  {
    coinSymbol: 'USDT',
    coinImg: 'https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
    coinName: 'Tether USD',
    address: '0xF352E4D29CDa25e1F89F5629Ba0FBf58D867A584',
    decimals: 18,
  },
  {
    coinSymbol: 'AXS',
    coinImg: 'https://tokens.1inch.io/0x715d400f88c167884bbcc41c5fea407ed4d2f8a0.png',
    coinName: 'Axie Infinity Shard',
    address: '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0',
    decimals: 18,
  },
  {
    coinSymbol: 'ADX',
    coinName: 'AdEx Network',
    address: '0x6bff4fb161347ad7de4a625ae5aa3a1ca7077819',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x6bff4fb161347ad7de4a625ae5aa3a1ca7077819.png',
  },
  {
    coinSymbol: 'ATA',
    coinName: 'Automata',
    address: '0xa2120b9e674d3fc3875f415a7df52e382f141225',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xa2120b9e674d3fc3875f415a7df52e382f141225.png',
  },
  {
    coinSymbol: 'ALU',
    coinName: 'Altura',
    address: '0x8263cd1601fe73c066bf49cc09841f35348e3be0',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x8263cd1601fe73c066bf49cc09841f35348e3be0.png',
  },
  {
    coinSymbol: 'ALICE',
    coinName: 'ALICE',
    address: '0xac51066d7bec65dc4589368da368b212745d63e8',
    decimals: 6,
    coinImg: 'https://tokens.1inch.io/0xac51066d7bec65dc4589368da368b212745d63e8.png',
  },
  {
    coinSymbol: 'wALV',
    coinName: 'Alvey Chain',
    address: '0x256d1fce1b1221e8398f65f9b36033ce50b2d497',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x256d1fce1b1221e8398f65f9b36033ce50b2d497.png',
  },
  {
    coinSymbol: 'agEUR',
    coinName: 'agEUR',
    address: '0x12f31b73d812c6bb0d735a218c086d44d5fe5f89',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x12f31b73d812c6bb0d735a218c086d44d5fe5f89.png',
  },
  {
    coinSymbol: 'ankrBNB',
    coinName: 'Ankr Staked BNB',
    address: '0x52f24a5e03aee338da5fd9df68d2b6fae1178827',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x52f24a5e03aee338da5fd9df68d2b6fae1178827.png',
  },
  {
    coinSymbol: 'AQUA',
    coinName: 'AQUA',
    address: '0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991.png',
  },
  {
    coinSymbol: 'AMPL',
    coinName: 'AMPL secured by Meter Passport',
    address: '0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f.png',
  },
  {
    coinSymbol: 'AVA',
    coinName: 'Avatly',
    address: '0x83b79f74f225e8f9a29fc67cb1678e7909d7d73d',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x83b79f74f225e8f9a29fc67cb1678e7909d7d73d.png',
  },
  {
    coinSymbol: 'ARKER',
    coinName: 'ARKER',
    address: '0x9c67638c4fa06fd47fb8900fc7f932f7eab589de',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9c67638c4fa06fd47fb8900fc7f932f7eab589de.png',
  },
  {
    coinSymbol: 'AIR',
    coinName: 'AIR',
    address: '0xd8a2ae43fd061d24acd538e3866ffc2c05151b53',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd8a2ae43fd061d24acd538e3866ffc2c05151b53.png',
  },
  {
    coinSymbol: 'URUS',
    coinName: 'Aurox Token',
    address: '0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b.png',
  },
  {
    coinSymbol: 'BABY',
    coinName: 'BabySwap Token',
    address: '0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657.png',
  },
  {
    coinSymbol: 'BTBS',
    coinName: 'BitBase',
    address: '0x6fefd97f328342a8a840546a55fdcfee7542f9a8',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x6fefd97f328342a8a840546a55fdcfee7542f9a8.png',
  },
  {
    coinSymbol: 'BOG',
    coinName: 'Bogged Finance',
    address: '0xb09fe1613fe03e7361319d2a43edc17422f36b09',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb09fe1613fe03e7361319d2a43edc17422f36b09.png',
  },
  {
    coinSymbol: 'BETA',
    coinName: 'Beta Token',
    address: '0xbe1a001fe942f96eea22ba08783140b9dcc09d28',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbe1a001fe942f96eea22ba08783140b9dcc09d28.png',
  },
  {
    coinSymbol: 'BZEN',
    coinName: 'BITZEN',
    address: '0xdacc0417add48b63cbefb77efbe4a3801aad51ba',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xdacc0417add48b63cbefb77efbe4a3801aad51ba.png',
  },
  {
    coinSymbol: 'BabyDoge',
    coinName: 'Baby Doge Coin',
    address: '0xc748673057861a797275cd8a068abb95a902e8de',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xc748673057861a797275cd8a068abb95a902e8de.png',
    isFoT: true,
  },
  {
    coinSymbol: 'BAS',
    coinName: 'BlockApeScissors',
    address: '0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc.png',
    isFoT: true,
  },
  {
    coinSymbol: 'GUILD',
    coinName: 'BlockchainSpace [via ChainPort.io]',
    address: '0x0565805ca3a4105faee51983b0bd8ffb5ce1455c',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x0565805ca3a4105faee51983b0bd8ffb5ce1455c.png',
  },
  {
    coinSymbol: 'LINK',
    coinImg: 'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
    coinName: 'ChainLink Token',
    address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    decimals: 18,
  },
  {
    coinSymbol: 'ZIX',
    coinName: 'Coinzix Token',
    address: '0x48077400faf11183c043feb5184a13ea628bb0db',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x48077400faf11183c043feb5184a13ea628bb0db.png',
  },
  {
    coinSymbol: 'CALO',
    coinName: 'CALO',
    address: '0xb6b91269413b6b99242b1c0bc611031529999999',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb6b91269413b6b99242b1c0bc611031529999999.png',
  },
  {
    coinSymbol: 'Gold',
    coinName: 'CyberDragon Gold',
    address: '0xb3a6381070b1a15169dea646166ec0699fdaea79',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb3a6381070b1a15169dea646166ec0699fdaea79.png',
  },
  {
    coinSymbol: 'HORD',
    coinName: 'Chainport.io-Peg HORD Token',
    address: '0x39d4549908e7adcee9b439429294eeb4c65c2c9e',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x39d4549908e7adcee9b439429294eeb4c65c2c9e.png',
  },
  {
    coinSymbol: 'CPD',
    coinName: 'Coinspaid',
    address: '0x2406dce4da5ab125a18295f4fb9fd36a0f7879a2',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x2406dce4da5ab125a18295f4fb9fd36a0f7879a2.png',
  },
  {
    coinSymbol: 'C98',
    coinName: 'Coin98',
    address: '0xaec945e04baf28b135fa7c640f624f8d90f1c3a6',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xaec945e04baf28b135fa7c640f624f8d90f1c3a6.png',
  },
  {
    coinSymbol: 'ETERNAL',
    coinName: 'CryptoMines Eternal',
    address: '0xd44fd09d74cd13838f137b590497595d6b3feea4',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd44fd09d74cd13838f137b590497595d6b3feea4.png',
    isFoT: true,
  },
  {
    coinSymbol: 'COINSCOPE',
    coinName: 'Coinscope',
    address: '0xd41c4805a9a3128f9f7a7074da25965371ba50d5',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd41c4805a9a3128f9f7a7074da25965371ba50d5.png',
    isFoT: true,
  },
  {
    coinSymbol: 'CAPS',
    coinName: 'Capsule Coin',
    address: '0xffba7529ac181c2ee1844548e6d7061c9a597df4',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xffba7529ac181c2ee1844548e6d7061c9a597df4.png',
  },
  {
    coinSymbol: 'CR7',
    coinName: 'CR7 Token',
    address: '0x6c43751fef27c956f7e75d5c345a65df1465f7e0',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x6c43751fef27c956f7e75d5c345a65df1465f7e0.png',
  },
  {
    coinSymbol: 'USDD',
    coinImg: 'https://tokens.1inch.io/0xd17479997f34dd9156deef8f95a52d81d265be9c.png',
    coinName: 'Decentralized USD',
    address: '0xd17479997f34dd9156deef8f95a52d81d265be9c',
    decimals: 18,
  },
  {
    coinSymbol: 'DPS',
    coinName: 'DEEPSPACE',
    address: '0xf275e1ac303a4c9d987a2c48b8e555a77fec3f1c',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xf275e1ac303a4c9d987a2c48b8e555a77fec3f1c.png',
  },
  {
    coinSymbol: 'DAO',
    coinName: 'DAO Maker',
    address: '0x4d2d32d8652058bf98c772953e1df5c5c85d9f45',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x4d2d32d8652058bf98c772953e1df5c5c85d9f45.png',
  },
  {
    coinSymbol: 'USX',
    coinName: 'dForce USD',
    address: '0xb5102cee1528ce2c760893034a4603663495fd72',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb5102cee1528ce2c760893034a4603663495fd72.png',
  },
  {
    coinSymbol: 'DFI',
    coinName: 'DFI (DefiChain)',
    address: '0x361c60b7c2828fcab80988d00d1d542c83387b50',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x361c60b7c2828fcab80988d00d1d542c83387b50.png',
  },
  {
    coinSymbol: 'DERI',
    coinName: 'Deri',
    address: '0xe60eaf5a997dfae83739e035b005a33afdcc6df5',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xe60eaf5a997dfae83739e035b005a33afdcc6df5.png',
  },
  {
    coinSymbol: 'DOMI',
    coinName: 'Domi',
    address: '0xbbca42c60b5290f2c48871a596492f93ff0ddc82',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbbca42c60b5290f2c48871a596492f93ff0ddc82.png',
  },
  {
    coinSymbol: 'RISE',
    coinName: 'EverRise',
    address: '0xc17c30e98541188614df99239cabd40280810ca3',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
    isFoT: true,
  },
  {
    coinSymbol: 'ETHPAD',
    coinName: 'ETHPAD.network',
    address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442.png',
  },
  {
    coinSymbol: 'EPX',
    coinName: 'Ellipsis X',
    address: '0xaf41054c1487b0e5e2b9250c0332ecbce6ce9d71',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xaf41054c1487b0e5e2b9250c0332ecbce6ce9d71.png',
  },
  {
    coinSymbol: 'FLOKI',
    coinImg: 'https://tokens.1inch.io/0xfb5b838b6cfeedc2873ab27866079ac55363d37e_1.png',
    coinName: 'FLOKI',
    address: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e',
    decimals: 9,
  },
  {
    coinSymbol: 'FRAX',
    coinImg: 'https://tokens.1inch.io/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40.png',
    coinName: 'Frax',
    address: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
    decimals: 18,
  },
  {
    coinSymbol: 'SANTOS',
    coinName: 'FC Santos Fan Token',
    address: '0xa64455a4553c9034236734faddaddbb64ace4cc7',
    decimals: 8,
    coinImg: 'https://tokens.1inch.io/0xa64455a4553c9034236734faddaddbb64ace4cc7.png',
  },
  {
    coinSymbol: 'FTM',
    coinName: 'Fantom',
    address: '0xad29abb318791d579433d831ed122afeaf29dcfe',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xad29abb318791d579433d831ed122afeaf29dcfe.png',
  },
  {
    coinSymbol: 'FIST',
    coinName: 'FistToken',
    address: '0xc9882def23bc42d53895b8361d0b1edc7570bc6a',
    decimals: 6,
    coinImg: 'https://tokens.1inch.io/0xc9882def23bc42d53895b8361d0b1edc7570bc6a.png',
  },
  {
    coinSymbol: 'GAFI',
    coinImg: 'https://tokens.1inch.io/0x89af13a10b32f1b2f8d1588f93027f69b6f4e27e.png',
    coinName: 'GameFi',
    address: '0x89af13a10b32f1b2f8d1588f93027f69b6f4e27e',
    decimals: 18,
  },
  {
    coinSymbol: 'GMEE',
    coinImg: 'https://tokens.1inch.io/0x84e9a6f9d240fdd33801f7135908bfa16866939a.png',
    coinName: 'GAMEE',
    address: '0x84e9a6f9d240fdd33801f7135908bfa16866939a',
    decimals: 18,
  },
  {
    coinSymbol: 'GAMMA',
    coinName: 'GAMMA',
    address: '0xb3cb6d2f8f2fde203a022201c81a96c167607f15',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb3cb6d2f8f2fde203a022201c81a96c167607f15.png',
  },
  {
    coinSymbol: 'GGT',
    coinName: 'GameGuru',
    address: '0xd2359c576632234d1354b20bf51b0277be20c81e',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd2359c576632234d1354b20bf51b0277be20c81e.png',
  },
  {
    coinSymbol: 'GAME',
    coinName: 'Game Coin [via ChainPort.io]',
    address: '0x66109633715d2110dda791e64a7b2afadb517abb',
    decimals: 5,
    coinImg: 'https://tokens.1inch.io/0x66109633715d2110dda791e64a7b2afadb517abb.png',
  },
  {
    coinSymbol: 'GMT_1',
    coinName: 'GoMining Token',
    address: '0x7ddc52c4de30e94be3a6a0a2b259b2850f421989',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x7ddc52c4de30e94be3a6a0a2b259b2850f421989.png',
    displayedcoinSymbol: 'GMT',
  },
  {
    coinSymbol: 'HIGH',
    coinName: 'Highstreet Token',
    address: '0x5f4bde007dc06b867f86ebfe4802e34a1ffeed63',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x5f4bde007dc06b867f86ebfe4802e34a1ffeed63.png',
  },
  {
    coinSymbol: 'HI',
    coinName: 'hi Dollar',
    address: '0x77087ab5df23cfb52449a188e80e9096201c2097',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x77087ab5df23cfb52449a188e80e9096201c2097.png',
  },
  {
    coinSymbol: 'HPN',
    coinName: 'HyperonChain',
    address: '0xe3d2ba4ebcc6e9ae3569d6418bc2eaabb8feef60',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xe3d2ba4ebcc6e9ae3569d6418bc2eaabb8feef60.png',
  },
  {
    coinSymbol: 'HFT',
    coinName: 'Hashflow',
    address: '0x44ec807ce2f4a6f2737a92e985f318d035883e47',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x44ec807ce2f4a6f2737a92e985f318d035883e47.png',
  },
  {
    coinSymbol: 'JMPT',
    coinName: 'JumpToken',
    address: '0x88d7e9b65dc24cf54f5edef929225fc3e1580c25',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x88d7e9b65dc24cf54f5edef929225fc3e1580c25.png',
  },
  {
    coinSymbol: 'KALM',
    coinName: 'Kalmar Token',
    address: '0x4ba0057f784858a48fe351445c672ff2a3d43515',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x4ba0057f784858a48fe351445c672ff2a3d43515.png',
  },
  {
    coinSymbol: 'KSWAP',
    coinName: 'KyotoSwap Token',
    address: '0x29abc4d03d133d8fd1f1c54318428353ce08727e',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x29abc4d03d133d8fd1f1c54318428353ce08727e.png',
  },
  {
    coinSymbol: 'BNBx',
    coinName: 'Liquid Staking BNB',
    address: '0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275.png',
  },
  {
    coinSymbol: 'LGO',
    coinName: 'Level Governance Token',
    address: '0xbe2b6c5e31f292009f495ddbda88e28391c9815e',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbe2b6c5e31f292009f495ddbda88e28391c9815e.png',
  },
  {
    coinSymbol: 'LNR',
    coinName: 'Lunar',
    address: '0xc1a59a17f87ba6651eb8e8f707db7672647c45bd',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xc1a59a17f87ba6651eb8e8f707db7672647c45bd.png',
  },
  {
    coinSymbol: 'LOOP',
    coinName: 'LoopNetwork',
    address: '0xce186ad6430e2fe494a22c9edbd4c68794a28b35',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xce186ad6430e2fe494a22c9edbd4c68794a28b35.png',
    isFoT: true,
  },
  {
    coinSymbol: 'LIQ',
    coinName: 'Liquidus',
    address: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xc7981767f644c7f8e483dabdc413e8a371b83079.png',
  },
  {
    coinSymbol: 'LVL',
    coinName: 'Level Token',
    address: '0xb64e280e9d1b5dbec4accedb2257a87b400db149',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb64e280e9d1b5dbec4accedb2257a87b400db149.png',
  },
  {
    coinSymbol: 'MDX',
    coinName: 'MDX Token',
    address: '0x9c65ab58d8d978db963e63f2bfb7121627e3a739',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9c65ab58d8d978db963e63f2bfb7121627e3a739.png',
  },
  {
    coinSymbol: 'MIST',
    coinName: 'Mist',
    address: '0x68e374f856bf25468d365e539b700b648bf94b67',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x68e374f856bf25468d365e539b700b648bf94b67.png',
  },
  {
    coinSymbol: 'MDAO',
    coinName: 'MarsDAO',
    address: '0x60322971a672b81bcce5947706d22c19daecf6fb',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x60322971a672b81bcce5947706d22c19daecf6fb.png',
  },
  {
    coinSymbol: 'MFET',
    coinName: 'Multi Functional Environmental Token',
    address: '0x6d23970ce32cb0f1929bece7c56d71319e1b4f01',
    decimals: 8,
    coinImg: 'https://tokens.1inch.io/0x6d23970ce32cb0f1929bece7c56d71319e1b4f01.png',
  },
  {
    coinSymbol: 'MILO',
    coinName: 'Milo Inu',
    address: '0xd9de2b1973e57dc9dba90c35d6cd940ae4a3cbe1',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xd9de2b1973e57dc9dba90c35d6cd940ae4a3cbe1.png',
  },
  {
    coinSymbol: 'MATIC',
    coinName: 'Matic Token',
    address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xcc42724c6683b7e57334c4e856f4c9965ed682bd.png',
  },
  {
    coinSymbol: 'MCONTENT',
    coinName: 'MContent',
    address: '0x799e1cf88a236e42b4a87c544a22a94ae95a6910',
    decimals: 6,
    coinImg: 'https://tokens.1inch.io/0x799e1cf88a236e42b4a87c544a22a94ae95a6910.png',
    isFoT: true,
  },
  {
    coinSymbol: 'STARS',
    coinName: 'Mogul Stars',
    address: '0xbd83010eb60f12112908774998f65761cf9f6f9a',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png',
  },
  {
    coinSymbol: 'HERO',
    coinName: 'Metahero',
    address: '0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13.png',
  },
  {
    coinSymbol: 'MC',
    coinName: 'Merit Circle',
    address: '0x949d48eca67b17269629c7194f4b727d4ef9e5d6',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png',
  },
  {
    coinSymbol: 'Metis',
    coinName: 'Metis Token',
    address: '0xe552fb52a4f19e44ef5a967632dbc320b0820639',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xe552fb52a4f19e44ef5a967632dbc320b0820639.png',
  },
  {
    coinSymbol: 'MONS',
    coinName: 'Monsters Clan Token',
    address: '0xe4c797d43631f4d660ec67b5cb0b78ef5c902532',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xe4c797d43631f4d660ec67b5cb0b78ef5c902532.png',
  },
  {
    coinSymbol: 'MCRT',
    coinName: 'MagicCraft',
    address: '0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f.png',
  },
  {
    coinSymbol: 'MULTI',
    coinName: 'Multichain',
    address: '0x9fb9a33956351cf4fa040f65a13b835a3c8764e3',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3.png',
  },
  {
    coinSymbol: 'LAND_2',
    coinName: 'META-UTOPIA LAND',
    address: '0x9131066022b909c65edd1aaf7ff213dacf4e86d0',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9131066022b909c65edd1aaf7ff213dacf4e86d0.png',
    isFoT: true,
    displayedcoinSymbol: 'LAND',
  },
  {
    coinSymbol: 'BTCMT',
    coinName: 'Minto Bitcoin Hashrate Token',
    address: '0x410a56541bd912f9b60943fcb344f1e3d6f09567',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x410a56541bd912f9b60943fcb344f1e3d6f09567.png',
  },
  {
    coinSymbol: 'MIM',
    coinName: 'Magic Internet Money',
    address: '0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba.png',
  },
  {
    coinSymbol: 'NFTD',
    coinName: 'NFTrade Token [via ChainPort.io]',
    address: '0xac83271abb4ec95386f08ad2b904a46c61777cef',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xac83271abb4ec95386f08ad2b904a46c61777cef.png',
  },
  {
    coinSymbol: 'NFTB',
    coinName: 'NFTB',
    address: '0xde3dbbe30cfa9f437b293294d1fd64b26045c71a',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xde3dbbe30cfa9f437b293294d1fd64b26045c71a.png',
  },
  {
    coinSymbol: 'OLE',
    coinName: 'OpenLeverage',
    address: '0xa865197a84e780957422237b5d152772654341f3',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xa865197a84e780957422237b5d152772654341f3.png',
  },
  {
    coinSymbol: 'OWL',
    coinName: 'OwlDAO token',
    address: '0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19.png',
    isFoT: true,
  },
  {
    coinSymbol: 'PAID',
    coinName: 'PAID Network',
    address: '0xad86d0e9764ba90ddd68747d64bffbd79879a238',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xad86d0e9764ba90ddd68747d64bffbd79879a238.png',
  },
  {
    coinSymbol: 'TruePNL',
    coinName: 'PNL',
    address: '0xb346c52874c7023df183068c39478c3b7b2515bc',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb346c52874c7023df183068c39478c3b7b2515bc.png',
  },
  {
    coinSymbol: 'PEFI',
    coinName: 'Plant Empires Token',
    address: '0xa83bfcf9e252adf1f39937984a4e113eda6e445b',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xa83bfcf9e252adf1f39937984a4e113eda6e445b.png',
  },
  {
    coinSymbol: 'POLC',
    coinName: 'Polka City',
    address: '0x6ae9701b9c423f40d54556c9a443409d79ce170a',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x6ae9701b9c423f40d54556c9a443409d79ce170a.png',
  },
  {
    coinSymbol: 'TLOS',
    coinName: 'pTokens TLOS',
    address: '0xb6c53431608e626ac81a9776ac3e999c5556717c',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb6c53431608e626ac81a9776ac3e999c5556717c.png',
  },
  {
    coinSymbol: 'PRQ',
    coinName: 'Parsiq Token',
    address: '0xd21d29b38374528675c34936bf7d5dd693d2a577',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd21d29b38374528675c34936bf7d5dd693d2a577.png',
  },
  {
    coinSymbol: 'AFP',
    coinName: 'PIGS Token',
    address: '0x9a3321e1acd3b9f6debee5e042dd2411a1742002',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9a3321e1acd3b9f6debee5e042dd2411a1742002.png',
  },
  {
    coinSymbol: 'GAL',
    coinName: 'Project Galaxy',
    address: '0xe4cc45bb5dbda06db6183e8bf016569f40497aa5',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xe4cc45bb5dbda06db6183e8bf016569f40497aa5.png',
  },
  {
    coinSymbol: 'CGG',
    coinName: 'pTokens CGG',
    address: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x1613957159e9b0ac6c80e824f7eea748a32a0ae2.png',
  },
  {
    coinSymbol: 'PINKSALE',
    coinName: 'PinkSale',
    address: '0x602ba546a7b06e0fc7f58fd27eb6996ecc824689',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x602ba546a7b06e0fc7f58fd27eb6996ecc824689.png',
  },
  {
    coinSymbol: 'QUA',
    coinName: 'Quarashi',
    address: '0xfd0fd32a20532ad690731c2685d77c351015ebba',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xfd0fd32a20532ad690731c2685d77c351015ebba.png',
  },
  {
    coinSymbol: 'RAINI',
    coinImg: 'https://tokens.1inch.io/0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed.png',
    coinName: 'Rainicorn',
    address: '0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed',
    decimals: 18,
  },
  {
    coinSymbol: 'RDNT',
    coinImg: 'https://tokens.1inch.io/0xf7de7e8a6bd59ed41a4b5fe50278b3b7f31384df.png',
    coinName: 'Radiant',
    address: '0xf7de7e8a6bd59ed41a4b5fe50278b3b7f31384df',
    decimals: 18,
  },
  {
    coinSymbol: 'RVC',
    coinName: 'Revenue Coin',
    address: '0xbcbdecf8e76a5c32dba69de16985882ace1678c6',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbcbdecf8e76a5c32dba69de16985882ace1678c6.png',
  },
  {
    coinSymbol: 'RVF',
    coinName: 'RocketVaultRocketX',
    address: '0x872a34ebb2d54af86827810eebc7b9dc6b2144aa',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x872a34ebb2d54af86827810eebc7b9dc6b2144aa.png',
  },
  {
    coinSymbol: 'QUACK',
    coinName: 'RichQUACK.com',
    address: '0xd74b782e05aa25c50e7330af541d46e18f36661c',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xd74b782e05aa25c50e7330af541d46e18f36661c.png',
    isFoT: true,
  },
  {
    coinSymbol: 'stkBNB',
    coinImg: 'https://tokens.1inch.io/0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16.png',
    coinName: 'Staked BNB',
    address: '0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16',
    decimals: 18,
  },
  {
    coinSymbol: 'SDAO',
    coinName: 'Singularity Dao',
    address: '0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240.png',
  },
  {
    coinSymbol: 'STRX',
    coinName: 'StrikeX',
    address: '0xd6fdde76b8c1c45b33790cc8751d5b88984c44ec',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd6fdde76b8c1c45b33790cc8751d5b88984c44ec.png',
  },
  {
    coinSymbol: 'stkBNB',
    coinName: 'Staked BNB',
    address: '0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16.png',
  },
  {
    coinSymbol: 'SWAP',
    coinName: 'SatoshiSwap',
    address: '0xe0f7c8682f865b417aeb80bf237025b4cb5ebaef',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xe0f7c8682f865b417aeb80bf237025b4cb5ebaef.png',
  },
  {
    coinSymbol: 'SIS',
    coinName: 'Symbiosis',
    address: '0xf98b660adf2ed7d9d9d9daacc2fb0cace4f21835',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xf98b660adf2ed7d9d9d9daacc2fb0cace4f21835.png',
  },
  {
    coinSymbol: 'STG',
    coinName: 'StargateToken',
    address: '0xb0d502e938ed5f4df2e681fe6e419ff29631d62b',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb0d502e938ed5f4df2e681fe6e419ff29631d62b.png',
  },
  {
    coinSymbol: 'TRIVIA',
    coinImg: 'https://tokens.1inch.io/0xb465f3cb6aba6ee375e12918387de1eac2301b05.png',
    coinName: 'Trivian Token',
    address: '0xb465f3cb6aba6ee375e12918387de1eac2301b05',
    decimals: 3,
  },
  {
    coinSymbol: 'TUSD',
    coinImg: 'https://tokens.1inch.io/0x40af3827f39d0eacbf4a168f8d4ee67c121d11c9.png',
    coinName: 'TrueUSD',
    address: '0x40af3827f39d0eacbf4a168f8d4ee67c121d11c9',
    decimals: 18,
  },
  {
    coinSymbol: 'THG',
    coinName: 'Thetan Gem',
    address: '0x9fd87aefe02441b123c3c32466cd9db4c578618f',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x9fd87aefe02441b123c3c32466cd9db4c578618f.png',
  },
  {
    coinSymbol: 'TMT',
    coinName: 'TopManager Token',
    address: '0x4803ac6b79f9582f69c4fa23c72cb76dd1e46d8d',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0x4803ac6b79f9582f69c4fa23c72cb76dd1e46d8d.png',
  },
  {
    coinSymbol: 'TRIVIA',
    coinName: 'Trivian Token',
    address: '0xb465f3cb6aba6ee375e12918387de1eac2301b05',
    decimals: 3,
    coinImg: 'https://tokens.1inch.io/0xb465f3cb6aba6ee375e12918387de1eac2301b05.png',
  },
  {
    coinSymbol: 'THE',
    coinName: 'THENA',
    address: '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xf4c8e32eadec4bfe97e0f595add0f4450a863a11.png',
  },
  {
    coinSymbol: 'XTM',
    coinName: 'Torum',
    address: '0xcd1faff6e578fa5cac469d2418c95671ba1a62fe',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xcd1faff6e578fa5cac469d2418c95671ba1a62fe.png',
  },
  {
    coinSymbol: 'TRIAS',
    coinName: 'Trias Token',
    address: '0xa4838122c683f732289805fc3c207febd55babdd',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xa4838122c683f732289805fc3c207febd55babdd.png',
  },
  {
    coinSymbol: 'UNI',
    coinImg: 'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
    coinName: 'Uniswap',
    address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    decimals: 18,
  },
  {
    coinSymbol: 'UCO',
    coinName: 'UnirisToken',
    address: '0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de.png',
  },
  {
    coinSymbol: 'ULX',
    coinName: 'Ultron',
    address: '0xd983ab71a284d6371908420d8ac6407ca943f810',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd983ab71a284d6371908420d8ac6407ca943f810.png',
  },
  {
    coinSymbol: 'VEX',
    coinName: 'Velorex',
    address: '0xc029a12e4a002c6858878fd9d3cc74e227cc2dda',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0xc029a12e4a002c6858878fd9d3cc74e227cc2dda.png',
    isFoT: true,
  },
  {
    coinSymbol: 'VRGW',
    coinName: 'Virtual Reality Game World',
    address: '0xfdd2374be7ae7a71138b9f6b93d9ef034a49edb6',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xfdd2374be7ae7a71138b9f6b93d9ef034a49edb6.png',
    isFoT: true,
  },
  {
    coinSymbol: 'UST',
    coinImg: 'https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png',
    coinName: 'Wrapped UST Token',
    address: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
    decimals: 18,
  },
  {
    coinSymbol: 'TONCOIN',
    coinName: 'Wrapped TON Coin',
    address: '0x76a797a59ba2c17726896976b7b3747bfd1d220f',
    decimals: 9,
    coinImg: 'https://tokens.1inch.io/0x76a797a59ba2c17726896976b7b3747bfd1d220f.png',
  },
  {
    coinSymbol: 'MTRG',
    coinName: 'Wrapped MTRG on BSC by Meter.io',
    address: '0xbd2949f67dcdc549c6ebe98696449fa79d988a9f',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png',
  },
  {
    coinSymbol: 'WAL',
    coinName: 'WastedLands',
    address: '0xd306c124282880858a634e7396383ae58d37c79c',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xd306c124282880858a634e7396383ae58d37c79c.png',
  },
  {
    coinSymbol: 'WNDR',
    coinName: 'Wonderman Token',
    address: '0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8',
    decimals: 8,
    coinImg: 'https://tokens.1inch.io/0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8.png',
  },
  {
    coinSymbol: 'XETA',
    coinName: 'XANA',
    address: '0xbc7370641ddcf16a27eea11230af4a9f247b61f9',
    decimals: 18,
    coinImg: 'https://tokens.1inch.io/0xbc7370641ddcf16a27eea11230af4a9f247b61f9.png',
  },
]
