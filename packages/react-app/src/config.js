import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xd973357Db0F429f00A80061aF1666E3F75D88645";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/Fs8V210YIZXCjbWDfYf4_cts_3sjLy6j",
  },
};
