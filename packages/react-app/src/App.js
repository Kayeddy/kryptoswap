import { useEthers } from "@usedapp/core";
import styles from "./styles";
import { KryptoswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";
import { usePools } from "./hooks";

function App() {
  const { account } = useEthers();
  const [loading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={KryptoswapLogo}
            alt="Kryptoswap Logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>KryptoSwap</h1>
          <p className={styles.subTitle}> Exchange your tokens in seconds </p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  loading ? (
                    <Loader title="Loading Pools, please wait" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet to proceed" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
