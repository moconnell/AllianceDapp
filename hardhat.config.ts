import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "tsconfig-paths/register";
import { HardhatUserConfig } from "hardhat/config";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  networks: {
    localhost: {},
  },
  solidity: "0.8.9", // latest supported as of 2022-05-04, see https://hardhat.org/reference/solidity-support.html
};

export default config;
