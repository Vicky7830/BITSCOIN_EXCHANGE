import React from "react";
import ethLogo from "../../assets/images/eth_logo.png"
import { Link } from "react-router-dom";
import { useMetaMask } from '../../context/MetamaskContext';


const Header = () => {

  const { account, connectWallet, networkError } = useMetaMask();


  
  return (
    <>
      <header>
        <div className="container mx-auto">
          <nav class="">
            <div class="flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex items-center gap-6">
                <Link
                  to="/"
                  class=""
                >
                  <span class="self-center text-2xl font-semibold text-gold">
                    BitsSwaps
                  </span>
                </Link>
                <ul className="flex gap-3">
                    <li><Link to="/swap" className="text-lg text-gray-400 hover:text-white">Swap</Link></li>
                    <li><Link to="/pool" className="text-lg text-gray-400 hover:text-white">Pool</Link></li>
                </ul>
              </div>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <div className="flex items-center gap-2">
                    <div className="p-2">
                        <img src={ethLogo} alt="" width={20} height={20} className="rounded-md cursor-pointer" />
                    </div>
                    <div>
            <div className="text-center">
                <button
                    className="py-2 px-5 font-medium rounded-full bg-[#cead3f2d] text-gold hover:bg-[#cead3f58]"
                    onClick={connectWallet}
                >
                    Connect
                </button>
            </div>
            {account && (
                <div className="mt-4 text-center">
                    <span className="font-medium">Connected Account:</span> {account}
                </div>
            )}
            {networkError && (
                <div className="mt-4 text-center text-red-600">
                    Network Error. Please switch to the Binance Smart Chain Testnet.
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
