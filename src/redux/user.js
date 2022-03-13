import { createSlice } from "@reduxjs/toolkit";


const initialValue = { email: "", password: "" , displayName:""};

const getLocalStorage = (key, initialValue) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: getLocalStorage("user", initialValue) },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialValue;
    },
    signup: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout, signup } = userSlice.actions;

export default userSlice.reducer;
