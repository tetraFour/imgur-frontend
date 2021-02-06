import React, { useEffect, useState } from "react";

import * as IMGUR from "./style";

const links = [
  { name: "About" },
  { name: "Emerald" },
  { name: "Press" },
  { name: "Blog" },
  { name: "Privacy" },
  { name: "CCPA" },
  { name: "Terms" },
  { name: "Advertise" },
  { name: "Ad Choices" },
  { name: "Rules" },
  { name: "Help" },
  { name: "Careers" },
  { name: "Store" },
  { name: "API" },
];

const Footer = (): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleFooterVisible = () => {
    if (pageYOffset >= 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    toggleFooterVisible();
    window.addEventListener("scroll", toggleFooterVisible);
    return () => window.removeEventListener("scroll", toggleFooterVisible);
  }, []);

  return (
    <IMGUR.footer isVisible={isVisible}>
      <IMGUR.footerNav>
        <IMGUR.footerNavList>
          <IMGUR.footerNavListItem>
            &copy; 2021 Imgur, Inc
          </IMGUR.footerNavListItem>
          {links.map((link) => (
            <IMGUR.footerNavListItem key={link.name}>
              <IMGUR.footerNavListItemLink href="/" passHref>
                <IMGUR.footerNavListItemBaseLink>
                  {link.name}
                </IMGUR.footerNavListItemBaseLink>
              </IMGUR.footerNavListItemLink>
            </IMGUR.footerNavListItem>
          ))}
        </IMGUR.footerNavList>
      </IMGUR.footerNav>
    </IMGUR.footer>
  );
};

export default Footer;
