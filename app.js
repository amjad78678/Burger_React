import React from "react";
import ReactDOM from "react-dom/client";


    const Title = () => (
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
      </a>
    );

    const HeaderComponent=()=>{
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
          </div>
        );
    }

    const Body=()=>{
      
      return (

        <div className="body">

          <RestaurantCard />
        </div>

      )
    }

  

    const Footer=()=>{

      return (
       
          <h4>Footer</h4>
        
      );
    }

    const burgerKing={
      title:"Burger King",
      ratings:4.2,
      image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mbldqkrpztivwwgymlsn",
      description:["Burgers","American"]
    }

 const RestaurantCard = () => {
   return (
     <div className="card">
       <img
         src={burgerKing.image}
       />
       <h2>{burgerKing.title}</h2>
       <h3>{burgerKing.description}</h3>
       <h4>{burgerKing.ratings} stars</h4>
     </div>
   );
 };

    const AppLayout =()=>{
    
      return (
       <>
          <HeaderComponent />
          <Body />
          <Footer />

        </>
      );

    }


    const root=ReactDOM.createRoot(document.getElementById('root'))
    
    root.render(<AppLayout/>);
