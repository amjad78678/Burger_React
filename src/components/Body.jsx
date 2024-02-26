
import React, { useState, useEffect } from 'react';
import { restaurantList } from "../config";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from 'react-router-dom';
import useIsOnline from '../utils/useIsOnline';



const Body = () => {


const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


  console.log('render()')


    function filterData(searchText,allRestaurants) {
  
      console.log('iam search tesxt',searchText)
      if(searchText==''){
        return allRestaurants;
      }else{
  console.log('in filterdata block');
  let filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()),
  );

  return filterData;
      }
    }


  
  // let searchText='KFC'
  const [allRestaurants,setAllRestaurants]=useState([])
  const [searchText,setSearchText]=useState('')
  const [filteredRestaurants,setFilteredRestaurants] = useState([])



  async function getRestaurantList() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    );
   
    const jsonData = await data.json();

//Optional chaining for good practice
    setAllRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
   

  console.log('restuarants',filteredRestaurants)
  

useEffect(() => { 
  getRestaurantList();
}, []);

const isOnline=useIsOnline()
if(!isOnline){
  return <h1 style={{textAlign:'center',color:'red',fontSize:'3rem'}}>🤕Please check your internet connection !!!</h1>
}


//avoid rendering undefined component

if(!allRestaurants) return null;


//Conditional rendering

  return allRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : ( 
    <>
      <div className="search-container p-5 bg-pink-50 my-2 ">
        <input
          type="text"
          className="focus:bg-neutral-50 m-2 p-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="mx-3 p-2 rounded-lg bg-purple-900 hover:bg-purple-800 text-white"
          onClick={() => {
            //need to filter data
 
            const data = filterData(searchText,allRestaurants);

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
        <div className="flex flex-wrap space-x-3">
          {/* <RestaurantCard {...restaurantList[0].info} /> */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
              >
                {restaurant.info.veg ? (
                  <RestaurantCardPromoted {...restaurant.info}/>
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};


export default Body;