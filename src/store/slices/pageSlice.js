import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
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
export default pageSlice.reducer;
// Actions
const { setPageTitleSuccess } = pageSlice.actions;
export const setPageTitle = (pageTitle) => async (dispatch) => {
  try {
    dispatch(setPageTitleSuccess(pageTitle));
  } catch (e) {
    return console.error(e.message);
  }
};
