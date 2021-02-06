import React, { useState } from "react";

import * as IMGUR from "./style";

const HeaderSearchControl = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <IMGUR.formWrapper>
      <form className="Searchbar-form">
        <IMGUR.input
          placeholder="Images, #tags, @users oh my!"
          type="text"
          className="Searchbar-textInput"
          value={inputValue}
          onChange={changeHandler}
          style={{ height: "36px" }}
        />
        <IMGUR.button type="submit" className="Searchbar-submitInput">
          <img
            className="search"
            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.8d0f9b564a4659d48d8eca38b968a7f2.svg"
            alt="search icon"
          />
        </IMGUR.button>
      </form>
    </IMGUR.formWrapper>
  );
};

export default HeaderSearchControl;
