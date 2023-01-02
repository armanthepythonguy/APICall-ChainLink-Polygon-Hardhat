const hre = require("hardhat");

async function main() {

  let contract = await hre.ethers.getContractFactory("APICALL");
  contract = await contract.deploy();

  await contract.deployed();

  console.log(
    `deployed to ${contract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
