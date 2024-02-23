import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import RestaurantDetail from './components/RestaurantDetail';
import ErrorPage from './components/ErrorPage';



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const addRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/contactUs',
        element: <ContactUs />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path:'restaurant/:id',
        element: <RestaurantDetail />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={addRouter} />);
