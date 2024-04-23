import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { musicApi } from '../services/MusicApi'
import dataReducer from '../services/dataSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, musicApi.reducer)

const rootReducer = combineReducers({
  musicAPI: persistedReducer,
  musicData: dataReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
})

export const persistor = persistStore(store)
