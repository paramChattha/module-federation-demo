import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {KycResult} from "../types/kyc";

interface kycState {
  status: ""|"processing"| "complete" |"failed";
  result: KycResult |null;
}

const initialState: kycState = {
  status: "",
  result:null
}

const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    startKyc: (state)=> {
      state.status = "processing";
    },
    completeKyc: (state, action: PayloadAction<KycResult>) => {
      state.status = "complete";
      state.result = action.payload;
    },
    failKyc: (state) => {
      state.status= "failed";
    }

  }

})

export const {startKyc, completeKyc, failKyc} = kycSlice.actions;

export const store = configureStore({
  reducer: {kyc: kycSlice.reducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;