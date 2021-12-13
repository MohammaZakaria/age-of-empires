import { createSlice } from "@reduxjs/toolkit";
import { units } from "./../../data.json";

// Slice
const slice = createSlice({
  name: "unitDetails",
  initialState: {
    unit: null,
  },
  reducers: {
    setUnitSuccess: (state, action) => {
      const [singleUnit] = units.filter(
        (unit) => Number(action.payload) === unit.id
      );
      state.unit = singleUnit;
    },
  },
});
export default slice.reducer;
// Actions
const { setUnitSuccess } = slice.actions;
export const setUnit = (id) => async (dispatch) => {
  try {
    dispatch(setUnitSuccess(id));
  } catch (e) {
    return console.error(e.message);
  }
};
