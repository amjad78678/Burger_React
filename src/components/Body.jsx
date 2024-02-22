
import React, { useState, useEffect } from 'react';
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";




const Body = () => {

  console.log('render()')


    function filterData(searchText, restaurants) {
      let filterData = allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()),
      );

      return filterData;
    }


  
  // let searchText='KFC'
  const [allRestaurants,setAllRestaurants]=useState([])
  const [searchText,setSearchText]=useState()
  const [filteredRestaurants,setFilteredRestaurants] = useState([])



  async function getRestaurantList() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    );
   
    const jsonData = await data.json();
    console.log('iam json data', jsonData);

//Optional chaining for good practice
    setAllRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }


useEffect(() => { 
  getRestaurantList();
}, []);


//avoid rendering undefined component

if(!allRestaurants) return null;


//Conditional rendering

  return allRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : ( 
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-button"
          onClick={() => {
            //need to filter data

            const data = filterData(searchText, setAllRestaurants);

            //update the state restaurants

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {filteredRestaurants?.length == 0 ? (
        <>
          <h1>No restaurant match your filter!!</h1>
        </>
      ) : (
        <div className="restaurant-list">
          {/* <RestaurantCard {...restaurantList[0].info} /> */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })}
        </div>
      )}
    </>
  );
};


export default Body;