import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  empires: [],
};

// Slice
const empiresSlice = createSlice({
  name: "empires",
  initialState,
  reducers: {
    setEmpiresSuccess: (state, action) => {
      state.empires = action.payload;
    },
    filterEmpiresSuccess: (state, action) => {
      const { toggle, contractedFilteringItems, units } = action.payload;

      let newArray = [...units];

      if (toggle !== "All") {
        const toggledTemp = units.filter((item) => item.age === toggle);
        newArray = [...toggledTemp];
      }

      const filteredItems = newArray.filter((unit) => {
        // check how many filters the items should pass
        let target = Object.keys(contractedFilteringItems).length;
        // counter to keep how many filters the items passed
        let numOfTargetPassed = 0;
        // if cost is null the item already passed
        if (!unit.cost) return true;
        Object.keys(contractedFilteringItems).forEach((key) => {
          // if cost less than the value the item already passed
          if (
            unit.cost[key] <= contractedFilteringItems[key] ||
            !unit.cost[key]
          ) {
            numOfTargetPassed++;
          }
        });
        return target === numOfTargetPassed;
      });

      state.empires = filteredItems;
    },
  },
});
export default empiresSlice.reducer;
// Actions
const { setEmpiresSuccess, filterEmpiresSuccess } = empiresSlice.actions;
export const setEmpires = (list) => async (dispatch) => {
  try {
    dispatch(setEmpiresSuccess(list));
  } catch (e) {
    return console.error(e.message);
  }
};

export const filterEmpires = (values) => async (dispatch) => {
  try {
    dispatch(filterEmpiresSuccess(values));
  } catch (e) {
    return console.error(e.message);
  }
};
