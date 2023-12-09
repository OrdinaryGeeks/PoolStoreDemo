import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../structure/Client";
import { Item } from "../Models/Item";

interface ItemState {
  items: Item[] | null;
}

const initialState: ItemState = {
  items: [],
};

export const getItems = createAsyncThunk<Item[]>(
  "items/getItems",
  async (_, thunkAPI) => {
    try {
      return await agent.Item.listItems();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.rejected, (state) => {
      state.items = null;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      if (state && state.items) {
        state.items = action.payload;
      }
    });
  },
});
