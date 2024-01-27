import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
}

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    setWorkflow: (state, action) => {
      state.id = action.payload.id
    },
    clear: (state) =>{
      state.id = null;
    }
  },
})

export const workflowActions = workflowSlice.actions

export default workflowSlice.reducer