import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { FieldValues } from "react-hook-form";
import agent from "../../app/api/agent";
interface AccountState {
  user: User | null;
}

const initialState: AccountState = {
  user: null,
};

export const signInUser = createAsyncThunk<User, FieldValues>(
  "account/signInUser",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const userDto = await agent.Account.login(data);

      localStorage.setItem("user", JSON.stringify(userDto));
      return userDto;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const claims = JSON.parse(atob(action.payload.token.split(".")[1]));
      const roles =
        claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      state.user = {
        ...action.payload,
        roles: typeof roles === "string" ? [roles] : roles,
      };
    },
  },
});
export const { setUser } = accountSlice.actions;
