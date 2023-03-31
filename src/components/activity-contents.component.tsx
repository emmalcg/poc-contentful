// @ts-nocheck
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';

import { TextInput, Select, Form, FormControl, Accordion, SectionHeading, Subheading, Stack, Box, Textarea, Flex } from "@contentful/f36-components";

import { useCreateActivity } from '../hooks/use-create-activity.hook';
import { useActivityTemplate } from '../hooks/use-activity-template.hook';
import { mapComponentTypeProps } from '../activity-templates/component-fields';

const getFieldId = (pageKey, componentKey, fieldKey) =>
  `${pageKey}-${componentKey}-${fieldKey}`;
const getFieldName = (pageKey, componentKey, fieldKey, fieldType) =>
  `${getFieldId(pageKey, componentKey, fieldKey)}_${fieldType}`;

export const ActivityContents = () => {
  const { activityBody, setActivityBody} =
    useCreateActivity()
  

  const {
    templateSelectOptions,
    selectedTemplate,
    selectedTemplateObject,
    setSelectedTemplate,
  } = useActivityTemplate()

  useEffect(() => {
    setActivityBody({
      ...activityBody,
      content: {
        pages: JSON.parse(JSON.stringify(selectedTemplateObject.pages)),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTemplateObject]);

  // This solution relies heavily on array index keys (0, 1, 2, etc.) and
  // feels very brittle for future rollout.
  // It may be helpful for templates, pages, components, and fields to
  // have IDs when set from our end. These don't need to be passed to the
  // API, but will help us accurately track form values on the front end.

  const setActivityBodyValue = (
    pageKey,
    componentKey,
    componentType,
    fieldType,
    value,
  ) => {
    const activityContent = { ...activityBody.content };

    // Does the page (by array key) exists on activityBody?
    if (!activityContent.pages[pageKey]) {
      activityContent.pages[pageKey] = {
        components: [],
      };
    }

    // spread the contents of componentAttributes because
    activityContent.pages[pageKey].components[componentKey] = {
      componentType,
      componentAttributes: {
        ...activityContent.pages[pageKey].components[componentKey]
          .componentAttributes,
      },
    };

    // Set the page's component's componentAttribute field with the value
    activityContent.pages[pageKey].components[componentKey].componentAttributes[
      fieldType
    ] = value;

    setActivityBody({
      ...activityBody,
      content: activityContent,
    });

    console.log({ activityBody });
  };

  return (
    <Flex margin="spacingM" alignItems="center">
      <Form
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {/*<Stack flexDirection="column" fullWidth>
          <SectionHeading marginBottom="none">
            Activity Information
          </SectionHeading>
          <FormControl isRequired>
            <FormControl.Label>Activity name</FormControl.Label>
            <TextInput
              value={activityBody.name}
              onChange={(e) =>
                setActivityBody({ ...activityBody, name: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Activity description</FormControl.Label>
            <Textarea
              value={activityBody.description}
              onChange={(e) =>
                setActivityBody({
                  ...activityBody,
                  description: e.target.value,
                })
              }
            />
          </FormControl>
        </Stack>*/}
        <Stack flexDirection="column" fullWidth alignItems="stretch">
          <FormControl required>
            <FormControl.Label>Activity Template</FormControl.Label>
            <Select
              name="activity-template"
              id="activity-template"
              value={selectedTemplate}
              onChange={(event) => {
                setSelectedTemplate(event.value);
              }}
            >
              {templateSelectOptions.map((option) => (
                <Select.Option value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </FormControl>

          <Stack
            key={selectedTemplate}
            flexDirection="column"
            fullWidth
            alignItems="stretch"
          >
            {selectedTemplateObject?.pages?.map(({ components }, pageKey) => (
              <Stack
                key={pageKey}
                flexDirection="column"
                fullWidth
                alignItems="stretch"
              >
                <Subheading marginBottom="none">
                  {`Page ${pageKey + 1}`}
                </Subheading>
                {components?.map((component, componentKey) => {
                  const {
                    componentType: type,
                    componentAttributes: fields,
                    componentHint,
                  } = component;

                  return (
                    <Accordion>
                      <Accordion.Item
                        title={
                          <FormControl.Label as="legend">
                            <SectionHeading marginBottom="spacing2Xs">
                              {type.replace("-", " ")}
                            </SectionHeading>
                          </FormControl.Label>
                        }
                      >
                        <FormControl
                          as="fieldset"
                          key={`${pageKey}-${componentKey}`}
                        >
                          <Stack
                            flexDirection="column"
                            fullWidth
                            alignItems="left"
                          >
                            {Object.entries(fields).map((entry, fieldKey) => {
                              const fieldType = entry[0];

                              const id = getFieldId(
                                pageKey,
                                componentKey,
                                fieldKey
                              );
                              const name = getFieldName(
                                pageKey,
                                componentKey,
                                fieldKey,
                                fieldType
                              );
                              const field = mapComponentTypeProps[fieldType];
                              const FieldComponent = field.input;
                              const { toolTip } = field;

                              return (
                                <Box key={id}>
                                  <FormControl>
                                    <FormControl.Label>
                                      {field.label}
                                    </FormControl.Label>
                                    <FieldComponent
                                      id={id}
                                      name={name}
                                      defaultValue={entry[1]}
                                      options={field.options || []}
                                      onChange={(event) =>
                                        setActivityBodyValue(
                                          pageKey,
                                          componentKey,
                                          type,
                                          fieldType,
                                          field.options
                                            ? event.value
                                            : event.currentTarget.value
                                        )
                                      }
                                    />
                                  </FormControl>
                                </Box>
                              );
                            })}
                          </Stack>
                        </FormControl>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Form>
    </Flex>
  );
};
