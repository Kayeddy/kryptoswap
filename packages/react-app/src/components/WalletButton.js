import React, { useState, useEffect } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";

import styles from "../styles";

const WalletButton = () => {
  const { ens } = useLookupAddress();
  const { account, deactivate, activateBrowserWallet } = useEthers();

  const [rendered, setRendered] = useState("");

  return (
    <button
      className={styles.walletButton}
      onClick={() => {
        !account ? activateBrowserWallet() : deactivate();
      }}
    >
      {rendered === "" ? "Connect Wallet" : rendered}
    </button>
  );
};

export default WalletButton;
