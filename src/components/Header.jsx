import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

    const Title = () => (
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
      </a>
    );






const Header = () => {

  const [isLogged,setIsLogged]=useState(false)
 
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>{' '}
          </li>
          <li>
            <Link to="/aboutUs">About</Link>{' '}
          </li>
          <li>
            <Link to="contactUs">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>{' '}
          </li>
        </ul>
      </div>

      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;