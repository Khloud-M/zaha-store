export default {
    decrementQty(state, payload) {
        payload.qty -=1; 
        if(payload.qty <= 1)
        {
          payload.qty =  1;
        }
       },
       increaseQty(state, payload) {
        payload.qty+=1; 
       },
}