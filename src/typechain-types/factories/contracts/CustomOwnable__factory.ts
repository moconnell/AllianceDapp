/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CustomOwnable,
  CustomOwnableInterface,
} from "../../contracts/CustomOwnable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CustomOwnable__factory {
  static readonly abi = _abi;
  static createInterface(): CustomOwnableInterface {
    return new utils.Interface(_abi) as CustomOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CustomOwnable {
    return new Contract(address, _abi, signerOrProvider) as CustomOwnable;
  }
}