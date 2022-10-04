import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home'

import Footer from './component/Footer/Footer';

import About from './component/About/About';
import Product from './component/Product/Product';



function App() {
  const route = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
      {
        path: "/home", element: <Home></Home>
      },
      {
        path: "/about", element: <About></About>
      },
      {
        path: "/product",
        loader: () => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        },
        element: <Product></Product>  
      }
      ]
    },
    {path: "*", element: "Sorry!This Route Not Found"}
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
