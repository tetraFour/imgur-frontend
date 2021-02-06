import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    background-color: #2e3035;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    font-family: Proxima Nova Regular,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  
  
  #__next {
    position: relative;
  }
  
  a {
    text-decoration: none;
    
  }
  
  ul, ol {
    li {
      list-style: none;
    }
  }
  
  h1 {
    margin: 0;
  }
  
  button {
    border: none;
    box-shadow: none;
    background: none;
    cursor: pointer;
  }
  
  
  
  .my-masonry-grid {
    width: 1280px;
    margin: 0 auto;
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    //margin-left: -30px; /* gutter size offset */
    //width: auto;
  }
  
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
 
/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

export const GlobalVendorLink = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 160%;
  border-bottom: 1px solid #01b96b;
  font-family: Proxima Nova Semibold, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  color: hsla(0, 0%, 100%, 0.8);

  &:hover {
    background-image: url(/images/squiggle.svg);
    background-position: 0 100%;
    background-size: auto 36px;
    background-repeat: repeat;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: 3px;
    word-break: break-word;
  }
`;
