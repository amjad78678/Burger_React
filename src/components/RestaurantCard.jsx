
import { IMG_CDN_URL } from '../config';


const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card w-60 p-2 m-2 shadow-lg bg-pink-50">
      <img className='h-72 w-auto'    src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className='font-bold text-lg'>{name}</h2>
      <h3 className='truncate'>{cuisines.join(',')}</h3>
      <h4>{avgRating} stars</h4> 
    </div> 
  );
};


//need an higher order function to whether restaurant is veg or not

//input restaurantCard ==> restaurantCard+vegan Label

export const withPromotedLabel=(RestaurantCard)=>{

  return (props)=>{ 

    console.log("withPromotedLabel", props);

    return (
  <div>
    <label className='absolute bg-black text-white rounded-2xl px-4 py-2 ms-3 mt-1' htmlFor="">Vegan🥗</label>
      <RestaurantCard {...props}/>
  </div>

    )
  }
}


export default RestaurantCard;