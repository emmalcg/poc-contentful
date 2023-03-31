import { useState } from 'react';
import { TEMPLATES } from '../activity-templates/templates';

export const useActivityTemplate = () => {
  const activityTemplates = TEMPLATES;
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0].id);

  const templateSelectOptions = TEMPLATES.map((template) => ({
    label: template.name,
    value: template.id,
  }));

  const selectedTemplateObject = activityTemplates.find(
    (template) => template.id === selectedTemplate,
  );

  return {
    activityTemplates,
    selectedTemplate,
    selectedTemplateObject,
    setSelectedTemplate,
    templateSelectOptions,
  };
};
