import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  
    service : [{
        servicetype : 'hotel' ,
        sellingprice : '1200',
        discounttype : 'percentage',
        discountvalue : '10',
    }]
}

export const serviceSlice = createSlice({
    name : 'service' ,
    initialState ,
    reducers : {
    addServices : (state , action) => {
            const services = {
                id : nanoid(),
                servicetype : action.payload.servicetype,
                sellingprice : action.payload.sellingprice ,
                discounttype : action.payload.discounttype ,
                discountvalue : action.payload.discountvalue
            }
            state.service.push(services);
        } ,
       
    
    }
})

export const { addServices } = serviceSlice.actions;
export  default serviceSlice.reducer;