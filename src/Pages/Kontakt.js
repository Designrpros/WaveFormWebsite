import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const IframeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 65px;
`;

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>PRIMA Kontakter</title>
        <meta name="description" content="Kontakt oss gjerne" />
      </Helmet>
      <IframeWrapper>
        <iframe title="Alcatelz" src="https://Alcatelz.com" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
      </IframeWrapper>
    </>
  );
};

export default Kontakt;