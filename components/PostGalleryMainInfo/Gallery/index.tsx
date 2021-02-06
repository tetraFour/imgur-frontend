import React from "react";

import { GlobalVendorLink } from "../../../styles/global.style";
import * as IMGUR from "./style";

const Gallery = () => {
  return (
    <IMGUR.GalleryContentWrapper>
      <IMGUR.GalleryImageList>
        <IMGUR.GalleryImageWrapper>
          <IMGUR.Image
            src="https://i.imgur.com/Mfv50QH_d.webp?maxwidth=1520&amp;fidelity=grand"
            width={"1638"}
            height={"1158"}
            loading="lazy"
          />
        </IMGUR.GalleryImageWrapper>

        <IMGUR.GalleryImageWrapper>
          <IMGUR.Image
            className="image-placeholder"
            src="https://i.imgur.com/TQAhFCw_d.webp?maxwidth=760&amp;fidelity=grand"
          />
        </IMGUR.GalleryImageWrapper>
      </IMGUR.GalleryImageList>
      <IMGUR.GalleryDescriptionWrapper>
        <IMGUR.GalleryDescription>
          Tweet link :{" "}
          <GlobalVendorLink
            href="https://twitter.com/DerenicByrd/status/1352559036915310594?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="Linkify-element"
          >
            https://twitter.com/DerenicByrd/status/1352559036915310594?s=20
          </GlobalVendorLink>
        </IMGUR.GalleryDescription>
      </IMGUR.GalleryDescriptionWrapper>
    </IMGUR.GalleryContentWrapper>
  );
};

export default Gallery;
