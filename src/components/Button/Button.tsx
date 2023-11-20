"use client";

import "./Button.styles.css";

import { AppDispatch } from "../../store/store";
import { fetchWikiDetailsThunk } from "../../store/wiki/thunks/fetchWikiDetailsThunk";
import { useDispatch } from "react-redux";

const Button = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchClick = () => {
    dispatch(fetchWikiDetailsThunk());
  };

  return (
    <button onClick={(e) => handleFetchClick()} data-testid="fetch-button">
      Click Me!
    </button>
  );
};

export default Button;
