import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

const getInitialState = (): ThemeState => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    return { isDarkMode: savedTheme === 'dark' };
  }
  return { isDarkMode: false };
};

const initialState: ThemeState = getInitialState();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { setDarkMode, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;