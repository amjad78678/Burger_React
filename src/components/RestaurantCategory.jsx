import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,isVisible,setShowIndex}) => {



  console.log('restauCat,', data);


  return (
    <div className="w-full p-5 rounded-lg shadow-lg my-2 mt-4">
      <div className=" flex justify-between">
        <h2 className="font-bold">
          {data.title} ({data.itemCards.length})
        </h2>
        <svg
             onClick={()=>setShowIndex()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {isVisible ? <ItemList items={data.itemCards} /> : null}
    </div>
  );
}

export default RestaurantCategory