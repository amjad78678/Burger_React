import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
      name:'cart',
      initialState:{
        items:[]
      },
      reducers:{

        //the addItem is the dispatching action 

        addItem:(state,action)=>{

//it modify this initialstate based on the action

state.items.push(action.payload)

        },
        removeItem:(state,action)=>{

            state.items.splice(action.payload,1)
        },
        clearCart:(state,action)=>{

            state.items.length=0
        }
      }
})


export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;