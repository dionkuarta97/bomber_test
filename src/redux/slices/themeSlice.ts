import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { darkTheme, lightTheme, Theme } from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ThemeState {
  isDark: boolean;
  theme: Theme;
}


const initialState: ThemeState = {
  isDark: false,
  theme: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      state.theme = state.isDark ? darkTheme : lightTheme;
      AsyncStorage.setItem('theme', JSON.stringify(state.theme));
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.isDark = action.payload === darkTheme;
      state.theme = state.isDark ? darkTheme : lightTheme;
      AsyncStorage.setItem('theme', JSON.stringify(state.theme));
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer

