import { TextInput, Textarea, Select } from "@contentful/f36-components";

export const COMPONENT_FIELDS = {
  ALT: 'alt',
  CAPTION: 'caption',
  ICON_URL: 'iconUrl',
  IMAGE_URL: 'imageUrl',
  RICH_TEXT: 'richText',
  SUBTITLE: 'subtitle',
  TEXT: 'text',
  TITLE: 'title',
  URL: 'url',
  TYPE: 'type',
  BANNER_TITLE: 'title',
};

export const mapComponentTypeProps = {
  [COMPONENT_FIELDS.ALT]: {
    label: 'Image description (alt text)',
    input: TextInput,
    defaultValue: '',
  },
  [COMPONENT_FIELDS.CAPTION]: {
    label: 'Image caption',
    input: TextInput,
    defaultValue: 'Example image caption',
  },
  [COMPONENT_FIELDS.ICON_URL]: {
    label: 'Icon URL',
    input: Select,
    options: [
      { label: 'None', value: '' },
      {
        label: 'Star',
        value: 'https://cdn-icons-png.flaticon.com/512/616/616493.png',
      },
    ],
    defaultValue: '',
  },
  [COMPONENT_FIELDS.IMAGE_URL]: {
    label: 'Image URL',
    input: Select,
    options: [
      {
        label: 'Meditation',
        value:
          'https://images.ctfassets.net/ii2mrg7wcwxq/5MhaE9Zi1V2Du1hsWhrP8e/741f47372a8ce1e3147700a65d91cb55/exercise-mindfulness.jpg?h=250',
      },
    ],
    defaultValue:
      'https://images.ctfassets.net/ii2mrg7wcwxq/5MhaE9Zi1V2Du1hsWhrP8e/741f47372a8ce1e3147700a65d91cb55/exercise-mindfulness.jpg?h=250',
  },
  [COMPONENT_FIELDS.RICH_TEXT]: {
    label: 'Rich text content',
    input: Textarea,
    defaultValue: ``,
  },
  [COMPONENT_FIELDS.SUBTITLE]: {
    label: 'Subtitle',
    input: TextInput,
    defaultValue: 'Example subtitle',
  },
  [COMPONENT_FIELDS.TEXT]: {
    label: 'Text content',
    input: TextInput,
    defaultValue: 'Example text',
  },
  [COMPONENT_FIELDS.TITLE]: {
    label: 'Title',
    input: TextInput,
    defaultValue: 'Example title',
  },
  [COMPONENT_FIELDS.URL]: {
    label: 'Link URL',
    input: TextInput,
    defaultValue:
      'https://app.local.league.dev:4000/content-authoring/create-activity',
  },
  [COMPONENT_FIELDS.TYPE]: {
    label: 'Banner type',
    input: Select,
    options: [
      {
        label: 'Disclaimer',
        value: 'subtle',
      },
      { label: 'Emphasis', value: 'primary' },
    ],
    defaultValue: 'subtle',
    toolTip:
      'Use Subtle for legal information. Use Emphasis to highlight something like a "tip".',
  },
  [COMPONENT_FIELDS.BANNER_TITLE]: {
    label: 'Title',
    input: TextInput,
    defaultValue: 'Example title',
    toolTip: 'Suggested titles are "Tips", "What to do", or "Next Steps"',
  },
};
