/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
module.exports = {
  solidity: "0.8.19",
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/iOQ8om6l4F02GR1a91iuBq9UcFPmv2S9',
      accounts: ['e607b39dde4075839a179d719ad0b89e7654825e4c00de10b9017d089b285d04'],
    },
  },
};



