import { configureStore } from '@reduxjs/toolkit';
import taxReducer from './taxSlice' ;
import serviceReducer from './serviceSlice'

export default configureStore({
    reducer: {
        tax: taxReducer,
        service: serviceReducer
    }
})