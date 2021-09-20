require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
//const { mnemonic, POLYSCANAPIKEY } = require('secrets.json'); // This function does not work

const POLYSCANAPIKEY = "5TRMH6V6YAMWQY7763VPA2XMSAW5CENP5M";//polygonscan
const mnemonic = ['12 words'];
//const API_KEY = "GetYourOwn";
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async() => {
    const accounts = await ethers.getSigners();
    for (const account of accounts) {
        console.log(account.address);
    }
});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "matic",
    networks: {
        localhost: {
            url: "http://127.0.0.1:7545"
        },
        hardhat: {},
        infura: {
            url: "https://polygon-mainnet.infura.io/v3/0cc1d969be224b6581d3332ea7537bcb",
            chainId: 137,
            gasPrice: 50000000000,
            accounts: { mnemonic: mnemonic}
        },
          matic: {
          url: "https://polygon-mainnet.g.alchemy.com/v2/oODNfEtLzrxr9-Tr534BcyJbFlU1LC9V",
            gas: 2100000,
            gasPrice: 50000000000,
            accounts: { mnemonic: mnemonic  }
        },
           moralis: {
          url: "https://jtkj6nkacp5f.grandmoralis.com:2053/server",
            gas: 2100000,
            gasPrice: 50000000000,
            accounts: { mnemonic: mnemonic  }
        }
        
    },
    etherscan: {
        apiKey: POLYSCANAPIKEY,
    },
    solidity: {
        version: "0.8.4",
        // version: "0.6.12",
        settings: {
            optimizer: {
                enabled: true
            }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 20000
    }
};
