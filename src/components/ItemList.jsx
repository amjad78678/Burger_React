import { useDispatch } from 'react-redux';
import {IMG_CDN_URL} from '../config.jsx'
import { addItem } from '../redux/cartSlice.jsx';


const ItemList=({items})=>{


const dispatch=useDispatch();



  const handleAddItem = (item)=>{

  //we need to dispatcn an action


  dispatch(addItem(item))


}


    return (
        <div>
            {items.map((item) => {
              return (
                <div
                  key={item.card.info.id}
                  className=" m-2 p-2 border-gray-200 border-b-2 flex justify-between"
                >
                  <div className="w-10/12 mb-4">
                    <span className="font-semibold">{item.card.info.name}</span>
                    <div className="text-gray-600 mb-4">
                      ₹
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </div>

                    <div className="text-xs mb-4 ">
                      {item.card.info.description}
                    </div>
                  </div>

                  <div className="w-2/12 p-2 relative">
                    <img
                      className="rounded-xl"
                      src={IMG_CDN_URL + item.card.info.imageId}
                      alt=""
                    />
                    <button onClick={()=>handleAddItem(item)} className="absolute bottom-2 left-2 ms-2 py-2 px-6 text-green-600 bg-white font-semibold rounded-lg shadow-lg">
                      ADD
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
    );
}

export default ItemList;