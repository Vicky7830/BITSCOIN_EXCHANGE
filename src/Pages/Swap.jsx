import {
  ArrowDownwardOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import eth from "../assets/images/eth.png";
import React, { useEffect, useState } from "react";
import TokenSelect from "../Components/Modals/TokenSelect";
import { formatCurrency } from "../Utils/currencyFormat";

const Swap = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sellToken, setSellToken] = useState({
    coinName: "Wrapped Bitcoin",
    coinSymbol: "WBTC",
    price: 5375056.57,
    coinImg:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
  });
  const [buyToken, setBuyToken] = useState("");
  const [sell, setSell] = useState("0");
  const [buy, setBuy] = useState("0");
  const [active, setActive] = useState("");

  const handleSwap = () => {
    const temp = sellToken;
    setSellToken(buyToken);
    setBuyToken(temp);
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto">
        <div className="max-w-[500px] mx-auto">
          <h4 className="px-5 py-2 bg-[#1f1e1e] w-fit rounded-[20px] tracking-wide font-medium">
            Swap
          </h4>
          <div className="mt-3">
            <div className=" bg-[#1f1e1e] rounded-2xl p-4 border border-[#222223] hover:border-[#b2bad626] transition-none">
              <span className="text-sm text-gray-400 font-medium">Sell</span>
              <div className="flex items-center justify-between">
                <div className="w-[60%]">
                  <input
                    type="text"
                    placeholder="0"
                    className="h-11 border-0 bg-transparent focus:outline-0 focus:border-0 focus:ring-0 px-0 text-4xl placeholder:text-gray-400 mt-1 py-0 w-full"
                    onChange={(e) => setSell(e.target.value)}
                  />
                </div>
                <div className="inline-block">
                  {sellToken ? (
                    <button
                      className="border border-[#98a1c014] bg-[#141414] hover:bg-[#2c2c2e] active:bg-[#3a3a3c] p-1 pr-2 rounded-2xl flex items-center justify-between"
                      onClick={() => {
                        setOpenModal(true);
                        setActive("sell");
                      }}
                    >
                      <div className="flex items-center">
                        <img
                          src={sellToken.coinImg}
                          alt=""
                          width="24px"
                          className="rounded-full"
                        />
                        <span className="text-xl font-medium mx-1 tracking-wide">
                          {sellToken.coinSymbol}
                        </span>
                      </div>
                      <KeyboardArrowDownOutlined className="" />
                    </button>
                  ) : (
                    <button
                      className="border border-[#98a1c014]  bg-[#d6b034df] hover:bg-[#d6b034f6] active:bg-[#d6b034] p-1 pr-2 rounded-2xl flex items-center justify-between"
                      onClick={() => {
                        setOpenModal(true);
                        setActive("sell");
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-lg font-medium pl-2 pr-1 ">
                          Select Token
                        </span>
                      </div>
                      <KeyboardArrowDownOutlined className="" />
                    </button>
                  )}
                </div>
              </div>
              <div className="pt-2 min-h-8">
                <span
                  className={`text-gray-400`}
                  text-sm
                >
                  {sell > 0 && sellToken && formatCurrency(sell * sellToken.price)}
                </span>
              </div>
            </div>
            <div>
              <div
                className="relative z-10 flex justify-center w-10 h-10 mx-auto bg-[#252525] my-[-18px] cursor-pointer items-center rounded-xl border-[#141414] border-4 swap_btn"
                onClick={() => handleSwap()}
              >
                <ArrowDownwardOutlined />
              </div>
            </div>
            <div className=" bg-[#1f1e1e] rounded-2xl p-4 border border-[#222223] hover:border-[#b2bad626] transition-none">
              <span className="text-sm text-gray-400 font-medium">Buy</span>
              <div className="flex items-center justify-between">
                <div className="w-[60%]">
                  <input
                    type="text"
                    placeholder="0"
                    className="h-11 border-0 bg-transparent focus:outline-0 focus:border-0 focus:ring-0 px-0 text-4xl placeholder:text-gray-400 mt-1 py-0 w-full"
                    onChange={(e) => setBuy(e.target.value)}
                  />
                </div>
                <div className="inline-block">
                  {buyToken ? (
                    <button
                      className="border border-[#98a1c014] bg-[#141414] hover:bg-[#2c2c2e] active:bg-[#3a3a3c] p-1 pr-2 rounded-2xl flex items-center justify-between"
                      onClick={() => {
                        setOpenModal(true);
                        setActive("buy");
                      }}
                    >
                      <div className="flex items-center">
                        <img
                          src={buyToken.coinImg}
                          alt=""
                          width="24px"
                          className="rounded-full"
                        />
                        <span className="text-xl font-medium mx-1 tracking-wide">
                          {buyToken.coinSymbol}
                        </span>
                      </div>
                      <KeyboardArrowDownOutlined className="" />
                    </button>
                  ) : (
                    <button
                      className="border border-[#98a1c014]  bg-[#d6b034df] hover:bg-[#d6b034f6] active:bg-[#d6b034] p-1 pr-2 rounded-2xl flex items-center justify-between"
                      onClick={() => {
                        setOpenModal(true);
                        setActive("buy");
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-lg font-medium pl-2 pr-1 ">
                          Select Token
                        </span>
                      </div>
                      <KeyboardArrowDownOutlined className="" />
                    </button>
                  )}
                </div>
              </div>
              <div className="pt-2 min-h-8">
              <span
                  className={`text-gray-400`}
                  text-sm
                >
                  {buy > 0 && buyToken && formatCurrency(buy * buyToken.price)}
                </span>
              </div>
            </div>
            <div>
              <button className="w-full mt-1 py-3 px-5 text-xl font-medium rounded-2xl bg-[#cead3f2d] text-gold hover:bg-[#cead3f58]  active:bg-[#cead3f7a]">
                Connect Wallet
              </button>
            </div>
          </div>
          <TokenSelect
            openModal={openModal}
            setOpenModal={setOpenModal}
            sellToken={sellToken}
            buyToken={buyToken}
            setSellToken={setSellToken}
            setBuyToken={setBuyToken}
            active={active}
          />
        </div>
      </div>
    </div>
  );
};

export default Swap;
