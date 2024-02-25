import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../config';


const useRestaurant=(resId)=>{



    const [restaurant,setRestaurant]=useState(null)

      useEffect(() => {
        detailFood();
      }, []); // Run once when component mounts

      async function detailFood() {
        try {
          const data = await fetch(
            `${FETCH_MENU_URL}${resId}`,
          );
          const dataJson = await data.json();
          console.log('JSON data:', dataJson);
          const menuData = dataJson.data;
          setRestaurant(menuData);
        } catch (error) {
          console.error('Error fetching restaurant details:', error);
        }
      }

    return restaurant;
}


export default  useRestaurant;