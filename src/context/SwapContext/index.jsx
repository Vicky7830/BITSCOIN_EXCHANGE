import { ethers } from "ethers";
import React, { createContext, useContext, useReducer, useState } from "react";
import swapContractAbi from "../../enviornment/swapContractAbi.json";
import commonTokenAbi from "../../enviornment/commonTokenAbi.json";
import routerAbi from "../../enviornment/routerAbi.json";
import bitscoin from "./../../assets/icon_new/Bitscoin.png.png";
import { useMetaMask } from "../MetamaskContext";

const swappingContractAddress = "0x4c48775301a53dBD8BF6c361EA3Eb8beF95849c2";

const SwapContext = createContext();

export const useSwapContext = () => {
  return useContext(SwapContext);
};

const shortenHex = (hex) => {
  const start = hex.slice(0, 6);
  const end = hex.slice(-4);
  return `${start}...${end}`;
};

export const SET_ACTIVE_TOKEN = "set_active_token";
export const SET_TOKEN_VALUE = "set_token_value";
export const SWAP_TOKENS = "swap_tokens";
export const A_INPUT = "a_input_change";
export const B_INPUT = "b_input_change";
export const TOKEN_A = "A";
export const TOKEN_B = "B";

const intialState = {
  tokenA: {
    coinSymbol: "BNB",
    coinImg: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    coinName: "Binance Coin",
    address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    decimals: 18,
    isCoin: true,
  },
  tokenB: {
    coinSymbol: "BTS",
    coinImg: bitscoin,
    coinName: "BITSCOIN",
    address: "0x9A1628b2f0D8f183b72841cA9374049Eaa8d0eA0",
    decimals: 18,
  },
  activeToken: TOKEN_A, // A, B
  tokenAValue: "",
  tokenBValue: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_ACTIVE_TOKEN:
      return { ...state, activeToken: action.payload };
    case SET_TOKEN_VALUE: {
      let tokenA = state.tokenA;
      let tokenB = state.tokenB;

      if (state.activeToken === TOKEN_A) {
        tokenA = action.payload;
      } else if (state.activeToken === TOKEN_B) {
        tokenB = action.payload;
      }

      return {
        ...state,
        tokenA,
        tokenB,
      };
    }
    case SWAP_TOKENS: {
      const tokenA = state.tokenA;
      const tokenB = state.tokenB;
      const tokenAValue = state.tokenAValue;
      const tokenBValue = state.tokenBValue;
      return {
        ...state,
        tokenA: tokenB,
        tokenB: tokenA,
        tokenAValue: tokenBValue,
        tokenBValue: tokenAValue,
      };
    }
    case A_INPUT: {
      return {
        ...state,
        tokenAValue: action.payload,
        // tokenBValue: action.payload * 2,
      };
    }
    case B_INPUT: {
      return {
        ...state,
        tokenBValue: action.payload,
        // tokenAValue: action.payload * 2,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const SwapProvider = ({ children }) => {
  const { account } = useMetaMask();
  const [state, dispatch] = useReducer(reducer, intialState);
  const walletProvider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = walletProvider.getSigner();

  const swappingContractInsatnce = new ethers.Contract(
    swappingContractAddress,
    swapContractAbi,
    signer
  );

  const tokenA_AddressInsatnce = new ethers.Contract(
    state.tokenA.address,
    commonTokenAbi,
    signer
  );

  const tokenBAddressInsatnce = new ethers.Contract(
    state.tokenA.address,
    commonTokenAbi,
    signer
  );

  console.log(swappingContractInsatnce, ">>>>> swappingContractInsatnce");

  const getSwapQuote = async (value) => {
    dispatch({ type: A_INPUT, payload: value });
    const EtherToWei = ethers.utils.parseUnits(
      value,
      state.tokenA.decimals + ""
    );
    // const amountA = EtherToWei;
    const tokenA = state.tokenA.address;
    const tokenB = state.tokenB.address;

    const quotedValue = await swappingContractInsatnce.quote(
      EtherToWei,
      tokenA,
      tokenB
    );
    // debugger

    console.log(quotedValue.toString());
    const WeiToEther = ethers.utils.formatUnits(
      quotedValue.toString(),
      state.tokenB.decimals + ""
    );
    dispatch({ type: B_INPUT, payload: WeiToEther });
    console.log("WeiToEther: ", WeiToEther);
  };

  const swapExactEthToTokens = async (actualAmount, amountAfterFee) => {
    const functionCallerAddress = account;

    // BNB to BTC
    const swapResponse1 = await swappingContractInsatnce.swapExactETHForTokens(
      actualAmount,
      functionCallerAddress,
      state.tokenB.address,
      { value: amountAfterFee }
    );
    console.log("swapResponse1: ", swapResponse1);
  };

  const swapExactTokenToEth = async (actualtokenAmount) => {
    const functionCallerAddress = account;

    // BTC to BNB
    const swapResponse3 = await swappingContractInsatnce.swapExactTokensForETH(
      actualtokenAmount,
      state.tokenA.address,
      functionCallerAddress
    );
    console.log("swapResponse3: ", swapResponse3);
  };

  const swapExactTokenToToken = async (
    // USDT to BTC
    actualtokenAmount
  ) => {
    const functionCallerAddress = account;

    // here actualtokenAmount is token A
    const swapResponse5 =
      await swappingContractInsatnce.swapExactTokensForTokens(
        actualtokenAmount,
        state.tokenA.address,
        state.tokenB.address,
        functionCallerAddress
      );
    console.log("swapResponse5: ", swapResponse5);
  };

  const doApproval = async (ApprovalTokenInstance) => {
    const EtherToWei = ethers.utils.parseUnits("1000000000000000", "18");
    const approvalForRouter = await ApprovalTokenInstance.approve(
      swappingContractAddress,
      EtherToWei
    );
    const ApprovalData = await approvalForRouter.wait();
    console.log("ApprovalData: ", ApprovalData);
  };

  const calculateAllowance = async (tokenInstaknce) => {
    const functionCallerAddress = account;
    const currentAllowance = await tokenInstaknce.allowance(
      functionCallerAddress,
      swappingContractAddress
    );

    return currentAllowance;
  };

  const handleSwapToken = async () => {
    const actualAmount = ethers.utils.parseUnits(
      state.tokenAValue,
      state.tokenA.decimals + ""
    ).toString();
    const fee = await swappingContractInsatnce.chanrgedFee(actualAmount);
    const amountAfterFee = Number(actualAmount) + Number(fee);
    const currentAllowance = await calculateAllowance(tokenA_AddressInsatnce);
    debugger

    if (Number(currentAllowance.toString()) >= amountAfterFee) {
      // swapExactEthToTokens(actualAmount, amountAfterFee.toString())
      // swapEthToExactTokens(amountOut, amountAfterFee.toString());
      if (state.tokenA.isCoin) {
        swapExactEthToTokens(actualAmount, amountAfterFee);
      } else if (state.tokenB.isCoin) {
        swapExactTokenToEth(actualAmount);
      } else {
        // both are token
        swapExactTokenToToken(actualAmount);
      }
    } else {
      const approveData = await doApproval(tokenA_AddressInsatnce);
      // swapExactEthToTokens(actualAmount, amountAfterFee.toString())
      // swapEthToExactTokens(amountOut, amountAfterFee.toString());

      if (state.tokenA.isCoin) {
        swapExactEthToTokens(actualAmount, amountAfterFee);
      } else if (state.tokenB.isCoin) {
        swapExactTokenToEth(actualAmount);
      } else {
        // both are token
        swapExactTokenToToken(actualAmount);
      }
    }
  };

  return (
    <SwapContext.Provider value={{ dispatch, state, getSwapQuote, handleSwapToken }}>
      {children}
    </SwapContext.Provider>
  );
};

export default SwapContext;
//ek  min phone dead hogya