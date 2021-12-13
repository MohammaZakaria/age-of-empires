import { createSlice } from "@reduxjs/toolkit";
// Slice
const slice = createSlice({
  name: "page",
  initialState: {
    pageTitle: null,
  },
  reducers: {
    setPageTitleSuccess: (state, action) => {
      state.pageTitle = action.payload;
    },
  },
});
export default slice.reducer;
// Actions
const { setPageTitleSuccess } = slice.actions;
export const setPageTitle = (pageTitle) => async (dispatch) => {
  try {
    dispatch(setPageTitleSuccess(pageTitle));
  } catch (e) {
    return console.error(e.message);
  }
};
