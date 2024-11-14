import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


interface HomeState {
  category: string
}

const initialState: HomeState = {
  category: "beauty"
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    }
  }
})

export const { setCategory } = homeSlice.actions
export default homeSlice.reducer


