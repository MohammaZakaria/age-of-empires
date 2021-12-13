import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../store/slices/pageSlice";

const usePageTitle = (title) => {
  console.log("title :", title);
  const [currentTitle, setCurrentTitle] = useState(title);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(setPageTitle(currentTitle));
      document.title = currentTitle
        ? `${currentTitle} | Age of empires`
        : "Age of empires";
    } catch (error) {
      console.log("error :", error);
    }
  }, [currentTitle]);
  return [setCurrentTitle];
};

export { usePageTitle };
