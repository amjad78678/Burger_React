import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>

      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>
          <Link to="/login">Login</Link>{' '}
        </button>
      ) : (
        <button onClick={() => setIsLogged(true)}>
          <Link to="/logout">Logout</Link>
        </button>
      )}
    </div>
  );
};

export default Header;