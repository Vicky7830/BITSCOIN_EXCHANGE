import { ethers } from "ethers";
import React, { createContext, useContext, useReducer, useState } from "react";
import swapContractAbi from "../../enviornment/swapContractAbi.json";
import commonTokenAbi from "../../enviornment/commonTokenAbi.json";
import routerAbi from "../../enviornment/routerAbi.json";
import bitscoin from "./../../assets/icon_new/Bitscoin.png.png";

const swappingContractAddress = "0x4c48775301a53dBD8BF6c361EA3Eb8beF95849c2";

const SwapContext = createContext();

export const useSwapContext = () => {
  return useContext(SwapContext);
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
  const [state, dispatch] = useReducer(reducer, intialState);
  const walletProvider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = walletProvider.getSigner();

  const swappingContractInsatnce = new ethers.Contract(
    swappingContractAddress,
    swapContractAbi,
    signer
  );

  console.log(swappingContractInsatnce, ">>>>> swappingContractInsatnce")

  const getSwapQuote = async (value) => {
    dispatch({ type: A_INPUT, payload: value });
    const EtherToWei = ethers.utils.parseUnits(
      value,
      // state.tokenA.decimals + ""
      "18"
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

  return (
    <SwapContext.Provider value={{ dispatch, state, getSwapQuote }}>
      {children}
    </SwapContext.Provider>
  );
};

export default SwapContext;
