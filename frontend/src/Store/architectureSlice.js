import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
}

export const architectureSlice = createSlice({
  name: 'architecture',
  initialState,
  reducers: {
    setArchitecture: (state, action) => {
      state.id = action.payload.id
    },
    clear: (state) =>{
      state.id = null;
    }
  },
})

export const architectureActions = architectureSlice.actions

export default architectureSlice.reducer