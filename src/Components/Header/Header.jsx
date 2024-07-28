import React, { useRef } from "react";
import ethLogo from "../../assets/images/eth_logo.png";
import { Link, NavLink } from "react-router-dom";
import { useMetaMask } from "../../context/MetamaskContext";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const Header = () => {
  const { account, connectWallet, networkError } = useMetaMask();
  const copyRef = useRef();

  const shortenHex = (hex) => {
    const start = hex.slice(0, 6);
    const end = hex.slice(-4);
    return `${start}...${end}`;
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(account);
    copyRef.current.innerHTML = "Address copied!";
    setTimeout(() => {
      copyRef.current.innerHTML = shortenHex(account);
    }, 1000);
  };

  return (
    <>
      <header>
        <div className="container mx-auto">
          <nav class="">
            <div class="flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex items-center gap-6">
                <Link to="/">
                  <span class="self-center text-2xl font-semibold text-gold">
                    BitsSwaps
                  </span>
                </Link>
                <ul className="flex gap-3">
                  <li>
                    <NavLink
                      to="/swap"
                      className={({ isActive, isPending }) =>
                        `text-lg ${
                          !isActive && "text-gray-400"
                        } hover:text-white `
                      }
                    >
                      Swap
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pool"
                      className={({ isActive, isPending }) =>
                      `text-lg ${ !isActive && "text-gray-400"} hover:text-white `
                    }
                    >
                      Pool
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <div className="flex items-center gap-2 items-center">
                  <div className="p-2">
                    <img
                      src={ethLogo}
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className={`text-center relative copyAdd`}>
                      {account ? (
                        <div>
                          <div
                            className="cursor-pointer gap-2 flex bg-[#cead3f2d] py-2 px-5 rounded-full text-gold hover:bg-[#cead3f58] "
                            onClick={() => handleCopyAddress()}
                          >
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png"
                              alt=""
                              width="24px"
                            />
                            <span className="" ref={copyRef}>
                              {shortenHex(account)}
                            </span>
                          </div>
                          <span className="absolute -right-6 bottom-2 copyIcon">
                            <ContentCopyOutlinedIcon className="!text-base opacity-60" />
                          </span>
                        </div>
                      ) : (
                        <button
                          className="py-2 px-5 font-medium rounded-full bg-[#cead3f2d] text-gold hover:bg-[#cead3f58]"
                          onClick={connectWallet}
                        >
                          Connect
                        </button>
                      )}
                    </div>
                    {networkError && (
                      <div className="mt-4 text-center text-red-600">
                        Network Error. Please switch to the Binance Smart Chain
                        Testnet.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
