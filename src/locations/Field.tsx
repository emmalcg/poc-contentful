import React, { useState } from 'react';
import { Stack, TextInput, FormControl  } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import {  useCMA, useSDK } from '@contentful/react-apps-toolkit';
import { ActivityContents } from '../components/activity-contents.component';

const emptyActivityBody = {
  name: "",
  description: "",
  content: {
    pages: [
      { 
        components: [
          {
            componentType: "block-quote",
            componentAttributes: {
              text: "Example Text"
            }
          },
          {
            componentType: "link",
            componentAttributes: {
              iconUrl: "",
              title: "Example link title",
              url: "https://www.somewebsite.com"
            }
          }
      ]
    }
    ],
  },
};

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  /*
  To use the cma, inject it as follows.
  If it is not needed, you can remove the next line.
  */
 const cma = useCMA();


 const [activityBody, setActivityBody] = useState(emptyActivityBody)

 console.log({activityBody})

 //grab the template 
// const template = sdk.contentType.fields.template.

 //grab the form from the template 
 console.log({cma})
 console.log({sdk})
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return (
    <Stack>
      {/*this would display form based on template*/}
      <ActivityContents />
    </Stack>
  );
};

export default Field;
