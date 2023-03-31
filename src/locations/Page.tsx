import React, { useState } from 'react';
import { Stack, TextInput, FormControl } from "@contentful/f36-components";
import { PageExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Page = () => {
  const sdk = useSDK<PageExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  

  return (
    <Stack>
      {/*this would display form based on template*/}
      This could also be anything here on the whole page
    </Stack>
  );
};

export default Page;
