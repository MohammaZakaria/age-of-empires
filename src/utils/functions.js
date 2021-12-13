export const filter = (units, filteringItems) => {
  const [final] = Object.keys(filteringItems).map((item) => {
    const { isFiltering, value } = filteringItems[item];
    let arr = [];
    if (isFiltering && value > 0) {
      units.forEach((unit) => {
        const unitsValue = unit.cost[item];
        if (unitsValue && unitsValue >= value) {
          arr = [...arr, unit];
          console.log("unit :", unit);
        }
      });
    }
    return arr;
  });
  return final;
};

//   // const t = Object.keys(filteringItems).filter((item) => {
//     const { isFiltering, value } = filteringItems[item];
//     if (isFiltering && value > 0) {
//       const test = newArray.find((unit) => {
//         const unitsValue = unit.cost[item];
//         if (unitsValue && value && unitsValue <= value) {
//           console.log("unitsValue :", unitsValue);
//           console.log("value :", value);
//           console.log("unit :", unit);
//           return unit;
//         }
//       });
//       return test;
//     }
//   // });
