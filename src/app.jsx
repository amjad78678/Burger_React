import React,{lazy,Suspense, useState,useEffect} from 'react';
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
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import ShimmerUi from './components/ShimmerUi';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';

// import Instamart from './components/Instamart';

//to lazy load our instamart for different js file bundle
const Instamart=lazy(()=>{
   return import('./components/Instamart');
})



const AppLayout = () => {

  const [userName,setUserName]=useState('')

    useEffect(() => {
      //some api call to get the user Info

      const data = {
        loggedInUser: 'Mohammed amjad ali',
      };

      setUserName(data.loggedInUser);

    }, []);

  


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </UserContext.Provider>
    </Provider>
  );
};

const addRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
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
        path: 'restaurant/:resId',
        element: <RestaurantDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout name={'mohammed amjad ali'} />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<ShimmerUi/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={addRouter} />);
