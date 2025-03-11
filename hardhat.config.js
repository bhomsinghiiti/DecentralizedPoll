/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { BNB_TESTNET_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "bscTestnet",
   networks: {
      hardhat: {},
      bscTestnet: {
         url: BNB_TESTNET_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 5000000,  
         gasPrice: 20000000000, 
      }
   },
}