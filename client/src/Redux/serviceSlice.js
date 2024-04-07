import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    services: [{
        id: nanoid(),
        servicetype: 'hotel',
        sellingprice: '1200',
        discounttype: 'percentage',
        discountvalue: '100',
        taxamount: '10',
        totalamount: '1400',
    }]
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addServices: (state, action) => {
            const { servicetype, sellingprice, discounttype, 
                discountvalue, taxamount, totalamount } = action.payload;
            state.services.push({
                id: nanoid(),
                servicetype,
                sellingprice,
                discounttype,
                discountvalue,
                taxamount,
                totalamount
            });
        }
    }
});

export const { addServices } = serviceSlice.actions;
export default serviceSlice.reducer;
