import { COMPONENTS } from './components';

export const TEMPLATES = [
  {
    id: '123',
    name: 'Short (3 pages)',
    pages: [
      {
        components: [COMPONENTS.HEADER, COMPONENTS.RICH_TEXT],
      },
      {
        components: [COMPONENTS.BLOCK_QUOTE, COMPONENTS.IMAGE, COMPONENTS.LINK],
      },
      {
        components: [COMPONENTS.BANNER],
      },
    ],
  },
  {
    id: '456',
    name: 'Standard (5 pages)',
    pages: [
      {
        components: [COMPONENTS.HEADER, COMPONENTS.RICH_TEXT],
      },
      {
        components: [
          COMPONENTS.RICH_TEXT,
          COMPONENTS.IMAGE,
          COMPONENTS.RICH_TEXT,
          COMPONENTS.LINK,
          COMPONENTS.RICH_TEXT,
        ],
      },
      {
        components: [COMPONENTS.RICH_TEXT],
      },
      {
        components: [
          COMPONENTS.RICH_TEXT,
          COMPONENTS.IMAGE,
          COMPONENTS.RICH_TEXT,
        ],
      },
      {
        components: [COMPONENTS.IMAGE, COMPONENTS.RICH_TEXT],
      },
    ],
  },
  {
    id: '789',
    name: 'Long (7 Pages)',
    pages: [
      {
        components: [COMPONENTS.HEADER, COMPONENTS.RICH_TEXT, COMPONENTS.IMAGE],
      },
      {
        components: [COMPONENTS.RICH_TEXT, COMPONENTS.IMAGE],
      },
      {
        components: [COMPONENTS.RICH_TEXT, COMPONENTS.RICH_TEXT],
      },
      {
        components: [
          COMPONENTS.RICH_TEXT,
          COMPONENTS.IMAGE,
          COMPONENTS.RICH_TEXT,
        ],
      },
      {
        components: [COMPONENTS.RICH_TEXT],
      },
      {
        components: [COMPONENTS.IMAGE, COMPONENTS.RICH_TEXT],
      },
      {
        components: [COMPONENTS.IMAGE, COMPONENTS.RICH_TEXT],
      },
    ],
  },
];
