import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    services: [{
        id: nanoid(),
        servicetype: '',
        sellingprice: '',
        discounttype: '',
        discountvalue: '',
        taxamount: '',
        totalamount: '',
        quantity : '',
    }]
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addServices: (state, action) => {
            const { servicetype, sellingprice, discounttype, discountvalue, taxamount, totalamount , quantity} = action.payload;
            state.services.push({
                id: nanoid(),
                servicetype,
                sellingprice,
                discounttype,
                discountvalue,
                taxamount,
                totalamount ,
                quantity
            });
        }
    }
});

export const { addServices } = serviceSlice.actions;
export default serviceSlice.reducer;
