export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableSortBy: true,
  },
  {
    Header: "Name",
    Footer: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Cost",
    Footer: "Cost",
    accessor: "cost",
    disableSortBy: true,
    Cell: ({ value }) => {
      let final = "";
      if (value) {
        //   extract keys and return key: value
        final = Object.keys(value).map(
          (key, index) =>
            `${key}: ${value[key]}${
              // add , according in the appropriate place according to the count of the keys and index
              index < Object.keys(value).length - 1 ? ", " : ""
            }`
        );
      }
      return final;
    },
  },
];
