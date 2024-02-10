import { configureStore } from '@reduxjs/toolkit'
import architectureSlice from './architectureSlice';

const store = configureStore({
    reducer: {
        architecture: architectureSlice
    },
})

export default store;