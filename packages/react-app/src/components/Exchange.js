import React, { useState } from "react";
import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import {
  ERC20,
  useContractAllowance,
  useContractFunction,
  useTokenBalance,
} from "@usedapp/core";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";

import { ROUTER_ADDRESS } from "ethers/lib/utils";

const Exchange = ({ pools }) => {
  return <div>Exchange</div>;
};

export default Exchange;
