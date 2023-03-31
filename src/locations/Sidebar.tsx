import React from 'react';
import { Paragraph, Flex, Box } from '@contentful/f36-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Sidebar = () => {
  const sdk = useSDK<SidebarExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return (
    <Flex >
      <Paragraph>SIDEBAR TAKEOVER!!!!</Paragraph>
      <Box>Inputs for configuring rewards????</Box>
    </Flex>
  );
};

export default Sidebar;
