export const reducer = (state, action) =>{
   if(action.type === "REMOVE_ITEM"){
     return{
        ...state,
        item : state.item.filter((currEle)=>{
            return currEle.id !== action.payload
        })
     }
      
   }

   if(action.type === 'INCREMENT'){
     const updatedCart = state.item.map((currEle)=>{
        if(currEle.id === action.payload){
           return {...currEle, quantity : currEle.quantity + 1} 
        }
        return currEle;
     })
     return { ...state, item : updatedCart}
   }

   if(action.type === 'DECREMENT'){
     const updatedCart = state.item.map((currEle)=>{
        if(currEle.id === action.payload){
            return {...currEle, quantity : currEle.quantity -1}
        }
        return currEle;
     }).filter((currEle)=>currEle.quantity !==0)

     return {...state, item : updatedCart}
   }

   if(action.type === "CLEAR"){
     return{
        ...state,
        item : []
     }
   }

   if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
  
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }

   return state;
}