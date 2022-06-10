import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ITheme } from '@src/interfaces';
import { lightTheme } from '@src/themes';
import { Storage } from '@src/lib';

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    setTheme(state, action: PayloadAction<ITheme>): void {
      state.theme = action.payload;

      const storage = new Storage('@theme');
      storage.set(action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;