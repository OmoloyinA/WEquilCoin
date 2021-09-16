# WEQUIL COIN PROJECT

Creation of a Polygon Network ERC20 token using Hardhat. 
Solidity as the programming language. 
One of the feature of this coin is the pay-splitter attribute whereby the payer could initiate 
payment to the payee without understanding/concerned how tokens are shared 
between Payee in an assigned ratio. With the help of OpenZepplin...

## TOOLS

- Hardhat: compile and run the smart contracts on a local development network
- Ethers: renowned Ethereum library and wallet implementation
- Waffle: tooling for writing comprehensive smart contract tests
- Solhint: linter
- Prettier Plugin Solidity: code formatter

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
Clone the repo:
git clone https://github.com/InnoOkeke/WEquilCoin.git
cd WEquilCoin

Install the dependencies:
yarn
```
Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

### Test

Run the Mocha tests:

```sh
$ yarn test
```

### Deploy contract to netowrk (requires Mnemonic and infura API key in a .env file)

```
npx hardhat run --network rinkeby ./scripts/deploy.ts
```

### Validate a contract with etherscan (requires API key)

```
npx hardhat verify --network <network> <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"
```

