import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS =
  "0x148c2388a4136b2d02cdadd7951ba31c9b9fa2286d7983722aa1f13bc9df77ce";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/Fs8V210YIZXCjbWDfYf4_cts_3sjLy6j",
  },
};
