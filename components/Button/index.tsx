import React from "react";

import * as IMGUR from "./style";

interface IButton {
  href?: string;
  salad?: boolean;
  emerald?: boolean;
}

const Button: React.FC<IButton> = ({ href, salad, emerald, children }) => {
  return (
    <IMGUR.button href={href} passHref>
      <IMGUR.baseButton salad={salad} emerald={emerald}>
        {children}
      </IMGUR.baseButton>
    </IMGUR.button>
  );
};

export default Button;
