import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    taxes : [{
        taxname : 'GST demo',
        taxpercentage : '18',
        taxtype : 'percentage',
        status : 'active',
    }] ,
  
}

export const taxSlice = createSlice({
    name : 'tax' ,
    initialState ,
    reducers : {
        addTax : (state , action) => {
            const tax = {
                id : nanoid(),
                taxname : action.payload.taxname,
                taxpercentage : action.payload.taxpercentage ,
                taxtype : action.payload.taxtype ,
                status : action.payload.status
            }
            state.taxes.push(tax);
        } ,
        removeTax : (state , action) => {
                state.taxes = state.taxes.filter((todo) => todo.id !== action.payload)
        }
    
    }
})

export const { addTax, removeTax } = taxSlice.actions;
export  default taxSlice.reducer;