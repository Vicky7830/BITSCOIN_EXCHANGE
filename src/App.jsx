import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Swap from './Pages/Swap'
import Pool from './Pages/Pool'
import { MetaMaskProvider } from './context/MetamaskContext'
import AddLiquidity from './Pages/AddLiquidity'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children: [
        {
          path: '/swap',
          element: <Swap/>
        },
        {
          path: '/pool',
          element: <Pool/>
        },
        {
          path: '/add/v2',
          element: <AddLiquidity/>
        }
      ]
    }
  ])

  return (
  <MetaMaskProvider>
   <RouterProvider router={router} />
  </MetaMaskProvider>
    
      
    
  )
}

export default App