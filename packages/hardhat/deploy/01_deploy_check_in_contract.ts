import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { CheckIn } from "../typechain-types";

const deployCheckInContract: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // const batchRegistryContract = await hre.ethers.getContract<BatchRegistry>("BatchRegistry", deployer);

  await deploy("CheckIn", {
    from: deployer,
    args: ["0x8C71260fD3eC957faFf9F36Ef9d8C2B988c48E16", "0xa63f3deC58506f43B721025ae9cBAd9F4F7C658a"],
    log: true,
  });

  const checkInContract = await hre.ethers.getContract<CheckIn>("CheckIn", deployer);
  console.log("CheckIn deployed to: ", await checkInContract.getAddress());
};

export default deployCheckInContract;

deployCheckInContract.tags = ["CheckIn"];
