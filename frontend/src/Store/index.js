import { configureStore } from '@reduxjs/toolkit'
import workflowSlice from './workflowSlice';

const store = configureStore({
    reducer: {
        workflow: workflowSlice
    },
})

export default store;