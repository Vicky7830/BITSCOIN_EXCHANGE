import { CloseOutlined, SearchOutlined } from "@mui/icons-material";
import { Modal } from "flowbite-react";
import React from "react";
// import { tokenList } from "../../tokenList";
import { tokenList } from "../../assets/tokenList";

const TokenSelect = ({
  openModal,
  setOpenModal,
  sellToken,
  buyToken,
  setSellToken,
  setBuyToken,
  active,
}) => {
  const handleTokenSelect = (selectedToken) => {
    if (active === "sell") {
      if (selectedToken.coinSymbol === buyToken.coinSymbol) {
        setBuyToken(sellToken);
      }
      setSellToken(selectedToken);
    } else if (active === "buy") {
      if (selectedToken.coinSymbol === sellToken.coinSymbol) {
        setSellToken(buyToken);
      }
      setBuyToken(selectedToken);
    }
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        size="lg"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="bg-black"
        id="modal"
      >
        <Modal.Body className="!bg-[#141414] rounded-lg p-4 border-[#b2bad626] border">
          <div className="flex justify-between">
            <h6>Select a token</h6>
            <button onClick={() => setOpenModal(false)}>
              <CloseOutlined />
            </button>
          </div>
          <div className="mt-3">
            <div className="border-[#b2bad626] border !bg-[#1f1e1e] px-2 rounded-lg flex items-center">
              <SearchOutlined />
              <input
                type="text"
                placeholder="Search name or paste address"
                className="border-none bg-transparent focus:outline-0 focus:border-0 focus:ring-0 w-full"
              />
            </div>
            <div className="topCoins mt-3">
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {tokenList.slice(0,7).map((coin, index) => (
                  <li key={index}>
                    <button
                      className={`border border-[#98a1c014] hover:bg-[#1f1f20] active:bg-[#3a3a3c] p-1 pr-2 rounded-2xl flex items-center justify-between ${
                        (active === "sell" && sellToken.coinSymbol === coin.coinSymbol) ||
                        (active === "buy" && buyToken.coinSymbol === coin.coinSymbol)
                          ? "bg-[#1f1f20]"
                          : "bg-[#141414]"
                      }`}
                      onClick={() => handleTokenSelect(coin)}
                    >
                      <div className="flex items-center">
                        <img
                          src={coin.coinImg}
                          alt=""
                          width="24px"
                          className="rounded-full"
                        />
                        <span className="text-lg font-medium ml-1.5 tracking-wide">
                          {coin.coinSymbol}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="popularCoins mt-4 pt-4 border-t border-gray-800">
              <h6 className="text-gray-400">Popular tokens</h6>
              <ul>
                {tokenList.map((coin, index) => (
                  <li className="mt-4" key={index}>
                    <button
                      className={`flex items-center gap-4 w-full hover:bg-[#1f1e1e] p-2 ${
                        (active === "sell" && sellToken.coinSymbol === coin.coinSymbol) ||
                        (active === "buy" && buyToken.coinSymbol === coin.coinSymbol)
                          ? "opacity-40"
                          : "opacity-100"
                      }`}
                      onClick={() => handleTokenSelect(coin)}
                    >
                      <img
                        src={coin.coinImg}
                        alt=""
                        width="36px"
                        className="rounded-full"
                      />
                      <span className="font-medium ml-1.5 tracking-wide flex flex-col items-start">
                        <span className="text-base">{coin.coinName}</span>
                        <span className="text-xs text-gray-400">
                          {coin.coinSymbol}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TokenSelect;
