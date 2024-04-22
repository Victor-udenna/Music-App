import { configureStore } from '@reduxjs/toolkit'
import { musicApi } from '../redux/MusicApi'

export default configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
  },
})
