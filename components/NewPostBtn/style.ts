import Link from "next/link";
import styled from "styled-components";

import AddNewPostImage from "../../assets/images/add-new-post-button.svg";

export const addNewPostLink = styled(Link)``;
export const addNewPostImage = styled(AddNewPostImage)`
  margin-right: 13px;
  position: relative;
  top: 2px;
`;
export const addNewPostBaseLink = styled.a`
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  background-color: #1bb76e;
  padding: 7px 14px 10px 9px;
  height: 35px;
  border-radius: 3px;
  //margin-right: auto;
  display: flex;
  align-items: center;
`;
