import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

import { IMG_CDN_URL } from '../config';
import ShimmerUi from './ShimmerUi.jsx';
import useRestaurant from '../utils/useRestaurant.jsx';

const RestaurantDetail = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  console.log('restaurant', restaurant);
  // //avoid rendering undefined component
  // if (!restaurant) return null;

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <br />
        <br />

        <div
          key={restaurant.cards[2].card.card.info.id}
          className="restaurant-detail"
        >
          <div className="p-10 mt-10 shadow-lg mb-12 text-center bg-pink-50 rounded-lg">
            <img
              className="w-1/2 mx-auto rounded-lg"
              src={
                IMG_CDN_URL +
                restaurant.cards[2].card.card.info.cloudinaryImageId
              }
              alt=""
            />
          </div>
          <div className="font-bold text-3xl ms-10">
            <h1>{restaurant.cards[2].card.card.info.name}</h1>
          </div>
          <div className="mx-10 mt-5">
            <h2>
              Price : {restaurant.cards[2].card.card.info.costForTwoMessage}
            </h2>
            <h2>Place : {restaurant.cards[2].card.card.info.city}</h2>
            <h2>Locality : {restaurant.cards[2].card.card.info.locality}</h2>
            <h2> Rating : {restaurant.cards[2].card.card.info.avgRating}</h2>
          </div>
        </div>

        <div className="p-10">
          <h2 className='mb-1'>Recommended 👇</h2>
          {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (rest, index) => {
              return (
                <React.Fragment key={rest.card.info.id}>
                  <li>{rest.card.info.name}</li>
                  <br />
                </React.Fragment>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
