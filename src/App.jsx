import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Swap from "./Pages/Swap";
import Pool from "./Pages/Pool";
import { MetaMaskProvider } from "./context/MetamaskContext";
import AddLiquidity from "./Pages/AddLiquidity";
import { SwapProvider } from "./context/SwapContext";
import { SwapCode } from "./SwapScripts/SwapCode";
import Loader from "./Components/Common/Loader";
import { CommonProvider } from "./context/CommonContext";
import { SearchTokenData } from "./SwapScripts/SearchTokenData";

function App() {
  console.log("... test");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/swap",
          element: <Swap />,
        },
        {
          path: "/pool",
          element: <Pool />,
        },
        {
          path: "/add/v2",
          element: <AddLiquidity />,
        },
      ],
    },
  ]);

  return (
    <CommonProvider>
      <MetaMaskProvider>
        <SwapProvider>
          <RouterProvider router={router} />
          <Loader />
          <SearchTokenData/>
        </SwapProvider>
      </MetaMaskProvider>
    </CommonProvider>
  );
}

export default App;
