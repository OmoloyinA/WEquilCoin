WEQUIL COIN PROJECT

Creation of a Polygon Network ERC20 token using Hardhat. 
Solidity as the programming language. 
One of the feature of this coin is the pay-splitter attribute whereby the payer could initiate 
payment to the payee without understanding/concerned how tokens are shared 
between Payee in an assigned ratio. With the help of OpenZepplin...

TOOLS

Hardhat: compile and run the smart contracts on a local development network
Ethers: renowned Ethereum library and wallet implementation
Waffle: tooling for writing comprehensive smart contract tests
Solhint: linter
Prettier Plugin Solidity: code formatter

Usage


Pre Requisites

Before running any command, you need to create a .env file and set a BIP-39 compatible mnemonic as an environment variable.

Then, proceed with installing dependencies:

Here's how to deploy this project

Clone the repo
git clone https://github.com/InnoOkeke/WEquilCoin.git
Install the dependencies
npm install

# or

yarn
Start the local test node
npx hardhat node
Deploy the contract
npx hardhat run scripts/deploy.js --network localhost
