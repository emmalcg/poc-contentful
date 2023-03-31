import React from 'react';
import { Paragraph, Asset, Box } from '@contentful/f36-components';
import { HomeExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Home = () => {
  const sdk = useSDK<HomeExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return (
    <Box>
      <Paragraph>
        Could provide an about or even over-view on how to configure Good
        activities/ programs defintions for each kind etc this is could be
        anything{" "}
      </Paragraph>
      ;
      <Asset src="https://mms.businesswire.com/media/20220621006114/en/1493194/23/league-logo-primary.jpg" type="image"/>
    </Box>
  );
};

export default Home;
