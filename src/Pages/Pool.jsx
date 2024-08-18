import React from "react";
import { Link } from "react-router-dom";
import as from "./Bg.module.css"

const Pool = () => {
  return (
    <div className={`${as.ExchangeCont} py-20`}>
      <div className="container mx-auto">
        <div className="max-w-[600px] mx-auto">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-end">
                <h6 className="text-xl font-medium">Your V2 liquidity</h6>
                <span className="text-sm text-gray-400">V2</span>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/add/v2"
                  className="border border-[#d6b0342e] hover:border-[#d6b034f6] py-2 px-4 rounded-lg flex items-center justify-between"
                >
                  <span className="text-base font-medium text-gold">
                    Create a pair
                  </span>
                </Link>
                <Link
                  to="/add/v2"
                  className="border border-[#98a1c014] bg-[#d6b034df] hover:bg-[#d6b034f6] active:bg-[#d6b034] py-2 px-4 rounded-lg flex items-center justify-between"
                >
                  <span className="text-base font-medium">
                    Add V2 liquidity
                  </span>
                </Link>
              </div>
            </div>
            <div className="p-4 border border-gray-400 mt-4 rounded-xl flex justify-center">
              <p>No liquidity found.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
