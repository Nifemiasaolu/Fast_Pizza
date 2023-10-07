import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, {loader as menuLoader} from "./Features/Menu/Menu";
import Cart from "./Features/Cart/Cart";
import Order from "./Features/Order/Order";
import CreateOrder from "./Features/Order/CreateOrder";
import AppLayout from "./UI/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      errorElement: <Error/>,
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error/>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
        },
      ]
    }


    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
