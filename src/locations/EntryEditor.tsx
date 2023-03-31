import React, { useState } from "react";
import { Stack, TextInput, FormControl } from "@contentful/f36-components";
import { EditorExtensionSDK } from "@contentful/app-sdk";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";
import { ActivityContents } from "../components/activity-contents.component";
import { ProgramContents } from "../components/program-contents.component";


const Entry = () => {
  const sdk = useSDK<EditorExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

 console.log({sdk})
  const contentType = sdk.contentType.name

  return (
    <>
      Whole entry editor takeover
      {/*if contentType === activity*/}
      {contentType === "Activity" && <ActivityContents />}
      {contentType === "Program" && <ProgramContents />}
      {/*if contentType === challenge*/}
    </>
  );
};

export default Entry;
