
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

import { IMG_CDN_URL } from "../config";
import ShimmerUi from './ShimmerUi.jsx';
import useRestaurant from "../utils/useRestaurant.jsx";






const RestaurantDetail=()=>{

   const {resId} = useParams();


   const restaurant = useRestaurant(resId)


console.log('restaurant',restaurant)
  // //avoid rendering undefined component
  // if (!restaurant) return null;

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="details">
      <br />
      <br />

      <div
        key={restaurant.cards[2].card.card.info.id}
        className="restaurant-detail"
      >
        <div className="restaurant-image">
          <img className="detail-image"
            src={
              IMG_CDN_URL + restaurant.cards[2].card.card.info.cloudinaryImageId
            }
            alt=""
          />
        </div>
        <div className="restaurant-name">
          <h1>{restaurant.cards[2].card.card.info.name}</h1>
        </div>
        <div className="restaurant-description">
          <h2>Price : {restaurant.cards[2].card.card.info.costForTwo} </h2>
          <h2>Place : {restaurant.cards[2].card.card.info.city}</h2>
          <h3> Rating : {restaurant.cards[2].card.card.info.avgRating}</h3>
        </div>
      </div>

      <div className="recommend">
        <h2>Recommended 👇</h2>
        {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (rest,index) => {
            return (
              <React.Fragment key={rest.card.info.id}>
                <li >{rest.card.info.name}</li>
                <br />
              </React.Fragment>
            );
          },
        )}
      </div>
    </div>
  );
}

export default RestaurantDetail;