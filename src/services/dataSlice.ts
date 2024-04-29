import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  activeSongTitle: ''
}

const dataSlice = createSlice({
  name: 'musicData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    clearData: (state) => {
      state.data = []
    },
    activeSong: (state, action)=>{
      state.activeSongTitle = action.payload
    }
  },
})

export const { setData, clearData, activeSong } = dataSlice.actions

export default dataSlice.reducer
