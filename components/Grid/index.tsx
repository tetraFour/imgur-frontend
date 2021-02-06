import React, { useState } from "react";
import Masonry from "react-masonry-css";

import { uuidGenerator } from "../../lib/helpers/uuidGen";
import CardHome from "../CardHome";
import * as IMGUR from "./style";

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  992: 3,
  700: 2,
  500: 1,
};

export interface ICard {
  title: string;
  likes: number | string;
  dislikes: number | string;
  views: number | string;
  comments: number | string;
  link: string;
  imageUrl?: string;
  height?: boolean;
}

const card: ICard = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisc ducimus eligendi eveniet ex impedit incidunt odit possimus provident, quaerat sunt!",
  likes: "5 125",
  dislikes: "130",
  comments: "307",
  views: "55k",
  link: "234",
  imageUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
};

const Grid = () => {
  const [post] = useState(Array(50).fill(""));

  const [isNormalizeHeight, setIsNormalizeHeight] = useState(false);
  return (
    <IMGUR.mainSection>
      <button
        style={{ color: "#ffffff" }}
        onClick={() => setIsNormalizeHeight(!isNormalizeHeight)}
      >
        qwe
      </button>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {post.map((_, id) => (
          <CardHome
            key={id}
            {...card}
            height={isNormalizeHeight}
            link={uuidGenerator()}
          />
        ))}
      </Masonry>
    </IMGUR.mainSection>
  );
};

export default Grid;
