import { COMPONENT_FIELDS } from './component-fields';

export const COMPONENT_TYPE = {
  BANNER: 'banner',
  BLOCK_QUOTE: 'block-quote',
  FULL_PAGE_HIGHLIGHT: 'full-page-highlight',
  HEADER: 'header',
  IMAGE: 'image',
  LINK: 'link',
  LIST: 'list',
  RICH_TEXT: 'rich-text',
};

export const COMPONENTS = {
  BANNER: {
    componentType: COMPONENT_TYPE.BANNER,
    componentHint:
      'Used to emphasize information or to show legal information with linked references.',
    componentAttributes: {
      [COMPONENT_FIELDS.TYPE]: 'subtle',
      [COMPONENT_FIELDS.BANNER_TITLE]: 'Example title',
      [COMPONENT_FIELDS.RICH_TEXT]: `This is an example text with <a href="/">link</a>`,
    },
  },
  BLOCK_QUOTE: {
    componentType: COMPONENT_TYPE.BLOCK_QUOTE,
    componentAttributes: {
      [COMPONENT_FIELDS.TEXT]: 'Example text',
    },
  },
  FULL_PAGE_HIGHLIGHT: {
    componentType: COMPONENT_TYPE.FULL_PAGE_HIGHLIGHT,
    componentAttributes: {
      [COMPONENT_FIELDS.TITLE]: 'Example title',
      [COMPONENT_FIELDS.SUBTITLE]: 'Example image',
      highlightImage: '',
      highlightText: '',
      backgroundColor: '',
    },
  },
  HEADER: {
    componentType: COMPONENT_TYPE.HEADER,
    componentAttributes: {
      [COMPONENT_FIELDS.IMAGE_URL]: '',
      [COMPONENT_FIELDS.ALT]: '',
    },
  },
  IMAGE: {
    componentType: COMPONENT_TYPE.IMAGE,
    componentAttributes: {
      [COMPONENT_FIELDS.IMAGE_URL]:
        'https://images.ctfassets.net/ii2mrg7wcwxq/5MhaE9Zi1V2Du1hsWhrP8e/741f47372a8ce1e3147700a65d91cb55/exercise-mindfulness.jpg?h=250',
      [COMPONENT_FIELDS.CAPTION]: 'Example image caption',
      [COMPONENT_FIELDS.ALT]: '',
    },
  },
  LINK: {
    componentType: COMPONENT_TYPE.LINK,
    componentAttributes: {
      [COMPONENT_FIELDS.ICON_URL]: '',
      [COMPONENT_FIELDS.URL]: 'https://www.somewebsite.com',
      [COMPONENT_FIELDS.TITLE]: 'Example link title',
    },
  },
  LIST: {
    componentType: COMPONENT_TYPE.LIST,
    componentAttributes: {
      list: [],
    },
  },
  RICH_TEXT: {
    componentType: COMPONENT_TYPE.RICH_TEXT,
    componentAttributes: {
      [COMPONENT_FIELDS.RICH_TEXT]:
        'Here is an example of rich text.<b>The is wrapped in a bold tag</b>.<i>This wrapped in an italic tag</i> <mark>This is wrapped in a mark tag</mark>.<blockquote>This is wrapped in a blockquote.</blockquote>',
    },
  },
};
