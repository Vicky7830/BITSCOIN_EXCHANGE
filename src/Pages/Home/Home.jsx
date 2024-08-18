import React from "react";
import as from "./Home.module.css";
import gif from "../../assets/icon.gif";
import { useNavigate } from "react-router-dom";
import CurrencyList from "./CurrencyList";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={as.LandingCont}>
        <div className={as.IntroContainer}>
          {/* 1 sub contaier*/}
          <div
            className={`${as.Intro_SubContainer1} d-flex align-items-center justify-content-end flex-column `}
          >
            <h2 className="text-uppercase letter-spacing-2 d-flex justify-content-center ">
              Bits-swap{" "}
              <span className="fw-bolder d-flex align-items-center">
                {" "}
                <hr></hr>
              </span>
            </h2>
            <h5 className=" mt-0 pt-0">
              Boost capital efficiency with flexible trading & earning features
            </h5>

            {/* heres buttons  */}
            <div className={`${as.Intro_SubContainer1_btn_container}  `}>
              <button
                className={as.Intro_SubContainer1_btn}
                onClick={() => navigate("/Exchange")}
              >
                Trade Now
              </button>
              <button className={as.Intro_SubContainer1_btn}>Know more</button>
            </div>

            {/* features  */}
            <div className={`${as.Intro_SubContainer1_btn_container}  `}>
              {/* 1 */}
              <div className={`${as.feautute1}  `}>
                <div className={`${as.feature1_a}  `}>
                  {/* <img      ></img> */}
                </div>

                <div className={`${as.feature1_b}  `}></div>
              </div>

              {/* 2 */}
            </div>
          </div>

          {/* 2sub contauiner */}
          <div className={as.Intro_SubContainer2}>
            <img src={gif} alt="icon" loading="lazy"></img>
          </div>
        </div>
        <CurrencyList />
        <div className={`${as.Landing3Fetaures}`}>
          <h1 className={`${as.ourSwap} text-uppercase`}>Our Swap</h1>

          <div className={`${as.Landing3FetauresCont}`}>
            {/* 1 */}
            <div className={`${as.featurebox1} ${as.featurebox}   `}>
              <div className={`${as.imagecont} bg-red `}>
                <img
                  alt="fetaure_1"
                  loading="lazy"
                  src={require("../../assets/money_pot.png")}
                ></img>
              </div>
              <h6 className="fw-bold">Total Volume</h6>
              <h4 className="fw-bold">$45.51B</h4>
            </div>

            {/* 2 */}
            <div className={`${as.featurebox1} ${as.featurebox}   `}>
              <div className={`${as.imagecont} bg-parrot `}>
                <img
                  alt="fetaure_1"
                  loading="lazy"
                  src={require("../../assets/volume.png")}
                ></img>
              </div>
              <h6 className="fw-bold">24H Volume</h6>
              <h4 className="fw-bold">$15.51M</h4>
            </div>

            {/* 3 */}
            <div className={`${as.featurebox1} ${as.featurebox}   `}>
              <div className={`${as.imagecont} bg-purple `}>
                <img
                  alt="fetaure_1"
                  loading="lazy"
                  src={require("../../assets/user.png")}
                ></img>
              </div>
              <h6 className="fw-bold">Monthly Active users</h6>
              <h4 className="fw-bold">59.00k</h4>
            </div>

            {/* 4 */}
            <div className={`${as.featurebox1} ${as.featurebox}   `}>
              <div className={`${as.imagecont} bg-yellow `}>
                <img
                  alt="fetaure_1"
                  loading="lazy"
                  src={require("../../assets/discount.png")}
                ></img>
              </div>
              <h6 className="fw-bold">Trade Fee Saved</h6>
              <h4 className="fw-bold">$112.25M</h4>
            </div>

            {/* 5 */}
            <div className={`${as.featurebox5} ${as.featurebox} border-none  `}>
              <div className={`${as.imagecont} bg-blue `}>
                <img
                  alt="fetaure_1"
                  loading="lazy"
                  src={require("../../assets/lp.png")}
                ></img>
              </div>
              <h6 className="fw-bold">LP Earned</h6>
              <h4 className="fw-bold">$23.10M</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
