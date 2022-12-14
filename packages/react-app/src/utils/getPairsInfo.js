import { abis } from "@my-app/contracts";

export const getPairsInfo = async (pairsAddresses, web3) => {
  const pairsInfo = [];
  const pairAbi = abis.pair;
  const tokenAbi = abis.erc20.abi;

  for (let i = 0; i < pairsAddresses.length; i++) {
    const pairAddress = pairsAddresses[i];
    const pair = new web3.eth.Contract(pairAbi, pairAddress);

    const token0Address = await pair.methods.token0().call();
    const token1Address = await pair.methods.token1().call();

    const token0Contract = new web3.eth.Contract(tokenAbi, token0Address);
    const token1Contract = new web3.eth.Contract(tokenAbi, token1Address);

    const token0Name = await token0Contract.methods.name().call();
    const token1Name = await token1Contract.methods.name().call();

    pairsInfo.push({
      address: pairAddress,
      token0Address,
      token1Address,
      token0Name,
      token1Name,
    });
  }

  return pairsInfo;
};
