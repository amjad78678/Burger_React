import { useState } from "react";


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


  const isLoggedIn=()=>{

  //some api call to get the if logged In user

     return true
  }

  const [isLogged,setIsLogged]=useState(false)

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

      {isLogged ? (
        <button onClick={()=>setIsLogged(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;