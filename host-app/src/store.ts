import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { KycResult } from "./types/kyc";

interface UserState {
  profile:Record<string, unknown>
  kyc: KycResult |null;
}

const initialState: UserState = {
  profile: {name:""},
  kyc: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
      updateProfile: (state : {profile: unknown}, action : PayloadAction<Record<string, unknown>>) => {
        state.profile = action.payload
      },
      setKycResult:  (state:  {profile: unknown}, action : PayloadAction<Record<string, unknown>>) => {
        state.profile = action.payload
      },
  },
});

export const {updateProfile, setKycResult} = userSlice.actions;

export const store = configureStore({
  reducer: {user: userSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
