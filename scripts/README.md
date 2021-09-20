## Deployment

Deployment will create 2 billion Wequil coins and deposit it the sender account specified in 
the mnemonic (12 words walled identified) in the `hardhat.config.js`. The gas fee ~0.06 MATIC will be extracted from 
the same account. The account needs to have MATIC in the MATIC mainnet. 

To get you started you can simply clone the `angular-seed` repository and install the dependencies:

### Run
Compile the contracts: <br>
`npm hardhat run scripts/deploy.js`
Deploy the coin: <br>
`npx hardhat run  scripts/deploy.js --network matic`