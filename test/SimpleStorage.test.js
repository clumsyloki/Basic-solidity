const { expect, use } = require("chai");
const { waffle } = require("hardhat");
const { deployContract, solidity } = waffle;

use(solidity);

describe("SimpleStorage", function () {
    let simpleStorage;

    beforeEach(async function () {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy()
    });

    it("Should set and retrieve a value", async function () {
        const newValue = 42;
        await simpleStorage.set(newValue);
        const storedValue = await simpleStorage.get();
        expect(storedValue).to.equal(newValue);
    });
});
