const Moralis = require("moralis");

async function main() {
const [deployer] = await ethers.getSigners();
/*
const matic = require('moralis');
matic.initialize("5dtor5xjCbx7CQHKxTylFy3FrvaAdvievnvys3Gm", "", "n7QHdVur8QAnAhjZv2p5EPcX10P2pGCm2aRlf4Er");
matic.serverURL = 'https://jtkj6nkacp5f.grandmoralis.com:2053/server';
 */
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Token = await ethers.getContractFactory("WEquilCoin");
  const token = await Token.deploy(['0x4E15cdE212044F7a500a1A24e1296DdB2BA9EF09'],[100]);
  console.log("Token address:", token.address);
}
›
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
