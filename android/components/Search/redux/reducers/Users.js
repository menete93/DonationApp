import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Kiko',
  lastName: 'Menete',
  userId: 1,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },

    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { updateFirstName, resetToInitialState } = User.actions;
export default User.reducer;
