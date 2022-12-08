import React, { useState, useEffect } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";

import styles from "../styles";

const WalletButton = () => {
  const { ens } = useLookupAddress();
  const { account, deactivate, activateBrowserWallet } = useEthers();

  const [accountAddress, setAccountAddress] = useState("");

  useEffect(() => {
    if (ens) {
      setAccountAddress(ens);
    } else if (account) {
      setAccountAddress(shortenAddress(account));
    } else {
      setAccountAddress("");
    }
  }, [account, ens, setAccountAddress]);

  return (
    <button
      className={styles.walletButton}
      onClick={() => {
        !account ? activateBrowserWallet() : deactivate();
        console.log(account);
      }}
    >
      {accountAddress || "Connect wallet"}
    </button>
  );
};

export default WalletButton;
