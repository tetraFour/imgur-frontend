import styled from "styled-components";

export const PostPageWrapper = styled.div`
  background: #27292d;
  position: relative;
  width: 100%;
  height: 10000px; /*remove this line after all */
`;

export const PostPageContainer = styled.div`
  max-width: 1236px;
  margin: 0 auto;
  display: flex;
  padding-top: 96px;
  position: relative;
`;

export const PostPageGradient = styled.div`
  width: 100%;
  height: 370px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(37, 38, 41, 0.24) 26.22%, #27292d),
    linear-gradient(0deg, #171544, #171544);
`;
