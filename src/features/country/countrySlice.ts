import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { SearchCountry } from "../../models/searchCountry";
import agent from "../../app/api/agent";
interface CountryState {
  countryList: Array<object>;
  searchCondition: SearchCountry | null;
}

const initialState: CountryState = {
  countryList: [],
  searchCondition: null,
};

export const getAll = createAsyncThunk("country/getAll", async () => {
  try {
    const countryList = await agent.Country.getAll();
    return countryList;
  } catch (error: any) {
    console.log(error);

    return { error: error.data };
  }
});
export const getCountryByCategory = createAsyncThunk<
  SearchCountry,
  FieldValues
>("country/getCountryByCategory", async (data, thunkAPI) => {
  try {
    const countryList = await agent.Country.getCountryByCategory(data);

    return countryList;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const countrySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCountryList: (state, action) => {
      state.countryList = action.payload;
    },
  },
});
export const { setCountryList } = countrySlice.actions;
