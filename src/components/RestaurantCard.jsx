
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


export default RestaurantCard;