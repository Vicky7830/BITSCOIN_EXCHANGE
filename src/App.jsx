import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Swap from "./Pages/Swap";
import Pool from "./Pages/Pool";
import { MetaMaskProvider } from "./context/MetamaskContext";
import AddLiquidity from "./Pages/AddLiquidity";
import { SwapProvider } from "./context/SwapContext";
import { SwapCode } from "./SwapScripts/SwapCode";
import { LiquidityCode} from "./SwapScripts/LiquidityCode";

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
    <MetaMaskProvider>
      <SwapProvider>
        <RouterProvider router={router} />
        <LiquidityCode/>
       </SwapProvider>
    </MetaMaskProvider>
  );
}

export default App;
