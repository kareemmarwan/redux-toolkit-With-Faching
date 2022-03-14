import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'getUser',

  initialState: {
    data: [],
  },

  reducers: {
    getUsers: (state, action) => {
      state.data = [action.payload]
    },
  },
})
const store = configureStore({
  reducer: {
    getUser: userSlice.reducer,
  },
})

export { store }
