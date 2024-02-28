import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux";



    const Title = () => (
      <a href="/">
        <img
          className="h-28 ml-2 p-2"
          alt="logo"
          src="https://imgs.search.brave.com/ZmCJL_9pAJ-VidC97bna2eCKC8vcLELRm5fT9_ooXbk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9CdXJn/ZXItUmVzdGF1cmFu/dC1UcmFuc3BhcmVu/dC5wbmc"
        />
      </a>
    );






const Header = () => {

  const [isLogged,setIsLogged]=useState(false)
  const data = useContext(UserContext);

  //subscribing to the store using selector hook from react-redux
  const cartItems = useSelector((store)=> store.cart.items); 

  console.log('subscribed critems',cartItems)

 
  return (
    <div className="flex justify-between bg-pink-50 shadow-xl">
      <Title />

      <div className="">
        <ul className="flex py-10">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/aboutUs">About</Link>
          </li>
          <li className="px-3">
            <Link to="contactUs">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3">
            <div className="flex">
              <Link to="/cart">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span>( {cartItems.length} )</span>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {isLogged ? (
        <button className="p-5" onClick={() => setIsLogged(false)}>
          {data.loggedInUser}
        </button>
      ) : (
        <button className="p-5" onClick={() => setIsLogged(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;