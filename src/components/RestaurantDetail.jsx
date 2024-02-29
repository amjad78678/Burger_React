import { useParams } from 'react-router-dom';
import { useEffect, useState,Suspense } from 'react';
import React from 'react';

import { IMG_CDN_URL } from '../config';
import ShimmerUi from './ShimmerUi.jsx';
import useRestaurant from '../utils/useRestaurant.jsx';
import RestaurantCategory from './RestaurantCategory.jsx';

const RestaurantDetail = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);


  const restaurant = useRestaurant(resId);


  // //avoid rendering undefined component
  // if (!restaurant) return null;



  console.log('cant desturutctur',restaurant)

    if (restaurant === null) {
      return <ShimmerUi />;
    }



  const { name, cuisines, city, id } = restaurant?.cards[0].card.card.info;

  const categories =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
    );

  console.log('category,', categories);

  return restaurant===null?(<ShimmerUi/>):(
    <div className="container mx-auto">
      <div className="w-6/12  mx-auto">
        <div>
          <h2 className="font-bold text-2xl py-12 mb-2">{name}</h2>
          <p className="text-lg font-bold text-gray-600">{name}</p>
          <p className="text-sm text-gray-500 pt-2">{city}</p>
          <p className="text-sm text-gray-500 ">{cuisines.join(',')}</p>
        </div>

        <div className="border-dotted border-t-gray-900 mt-2 mb-5">
          {categories?.map((category, index) => (
            //Controlled component is this because it is saying isVisible or not

            <RestaurantCategory
              key={index}
              data={category.card.card}
              isVisible={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex((prevShowIndex) =>
                  prevShowIndex === index ? null : index,
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetail;
