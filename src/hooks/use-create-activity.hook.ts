// @ts-nocheck
import { useState } from 'react';

export const useCreateActivity = () => {

  const emptyActivityBody = {
    name: "",
    description: "",
    content: {
      pages: [],
    },
  };

  const [activityBody, setActivityBody] = useState({ ...emptyActivityBody });

  return {
    activityBody,
    setActivityBody,
  };
};
