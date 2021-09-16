const { expect } = require("chai");
var assert = require('assert');
const web3 = require('web3');


describe("WEQC function tests", function() {

    let weqc,accounts;

	beforeEach(async function () {
		const WEQC = await ethers.getContractFactory("WEquilCoin");
        accounts = await ethers.getSigners();
		weqc = await WEQC.deploy([accounts[0].address],[100]);
		await weqc.deployed();
	});

	it("Test Transfer", async function() {
        await weqc.transfer(accounts[1].address,web3.utils.toWei("200"));
		assert(await weqc.balanceOf(accounts[1].address) == web3.utils.toWei("200"),"balance of account 1 should be correct")
	});
});
