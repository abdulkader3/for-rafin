import { configureStore } from '@reduxjs/toolkit'
import Redux from './Slices/Redux'

export default configureStore({
  reducer: {
    my:Redux,
  },
})
