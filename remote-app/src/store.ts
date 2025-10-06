import { configureStore, createSlice } from "@reduxjs/toolkit";


interface UserState {
  profile:Record<string, unknown>
  kyc: Record<string, unknown> |null;
}

const initialState: UserState = {
  profile: {name:""},
  kyc: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    setKycResult: (state, action) => {
      state.profile = action.payload
    },
  },
});

export const { setKycResult } = userSlice.actions;

export const store = configureStore({
  reducer: {user: userSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;