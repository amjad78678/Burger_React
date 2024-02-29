import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../redux/cartSlice";

const Cart=()=>{


    const cartItems=useSelector((store)=>store.cart.items)


    const dispatch=useDispatch();

    const handleClearCart=()=>{

       dispatch(clearCart())

    }
    const handleRemoveItem=(index)=>{

        dispatch(removeItem(index))
    }

return (
  <div className="container mx-auto">
    <div className="w-6/12 mx-auto">
      <div className="bg-pink-50 p-5 my-5 shadow-lg">
        <div className="flex justify-between">
          <h1 className="text-center font-bold text-3xl p-5">Cart</h1>

          <button className="px-3 my-3 bg-black text-white rounded-xl" onClick={handleClearCart}>Clear Cart</button>
        </div>
        <div>
          {cartItems.map((item, index) => (
            <div className="flex justify-between my-5 border-b-2">
              <div className="w-2/12 px-4">
                <img
                  className="rounded-xl"
                  src={IMG_CDN_URL + item.card.info.imageId}
                />
              </div>
              <div className="w-8/12">
                <h2 className="font-bold text-lg">{item.card.info.name}</h2>
                <h3 className="truncate">
                  {item?.card?.info?.cuisines?.join(',')}
                </h3>
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
              <div className="w-2/12">
                <button onClick={()=>handleRemoveItem(index)} className="bg-red-200 mb-2 rounded-lg px-5 py-2">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


}

export default Cart;