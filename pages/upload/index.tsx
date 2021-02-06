import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DNDPopup from "../../components/DNDPopup";

const Upload = () => {
  const [scale, setScale] = useState(0);

  const scaleOnLoadPage = () => {
    setScale(1);
  };

  useEffect(() => {
    scaleOnLoadPage();
  }, []);

  return (
    <PageWrapper>
      <DNDPopup scale={scale} />
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Upload;
