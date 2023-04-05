import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SingleProductPage from "./pages/product";
import ProductList from "./pages/ProductList";
import RegisterPage from "./pages/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products/:category",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <SingleProductPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

