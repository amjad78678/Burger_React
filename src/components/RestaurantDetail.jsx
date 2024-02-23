
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { IMG_CDN_URL } from "../config";
import ShimmerUi from './ShimmerUi.jsx';






const RestaurantDetail=()=>{

    const params = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    detailFood();
  }, []); // Run once when component mounts

  async function detailFood() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`,
      );
      const dataJson = await data.json();
      console.log('JSON data:', dataJson);
      const menuData =  
        dataJson.data.cards[2].card.card.info
      setRestaurant(menuData);
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  }

  console.log('Restaurant:', restaurant);
    console.log('Restaurant:', typeof(restaurant));



  // //avoid rendering undefined component
  // if (!restaurant) return null;

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="details">
      <h1 className="title">Title : {restaurant.name}</h1>
      <br />
      <br />
      <h3>Recommended 👇</h3>
    
      <div key={restaurant.id} className="restaurant-detail">
        <div className="restaurant-image">
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
        </div>
        <div className="restaurant-name">
          <h1>{restaurant.name}</h1>
        </div>
        <div className="restaurant-description">
          <p>{restaurant.city}</p>
        </div>
      </div>

    </div>
  );
}

export default RestaurantDetail;