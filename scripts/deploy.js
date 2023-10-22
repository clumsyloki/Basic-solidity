const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Info");
  const transactionsContract = await transactionsFactory.deploy();
  await transactionsContract.deployed();
console.log("t",transactionsContract);
  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
