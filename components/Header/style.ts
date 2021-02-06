import styled from "styled-components";

export const header = styled.header`
  position: relative;
  min-height: 350px;
  height: 350px;
  width: 100%;
  z-index: 2;
  transition: box-shadow 0.2s;
`;

export const HeaderControlWrapper = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 10px;
  display: flex;
  align-items: center;
`;
