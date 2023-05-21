import { RichTextRoot } from '@/components/Text/RichText';

import type { StaticImageData } from 'next/image';
import ait from '@public/ait.png';
import the_studio from '@public/the_studio.png';
import how_too from '@public/how_too.png';
import koala from '@public/koala.png';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

type ColorTones =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';
type ColorTypes = 'cyan' | 'gray' | 'sky';

export type TimelineContent = {
  icon: typeof AcademicCapIcon | typeof BriefcaseIcon;
  image: StaticImageData;
  description: RichTextRoot;
  tags?: Array<string>;
  colors?: {
    from: `from-${ColorTypes}-${ColorTones}`;
    to?: `to-${ColorTypes}-${ColorTones}`;
    text: `text-${ColorTypes}-${ColorTones}`;
  };
};

const AIT: TimelineContent = {
  image: ait,
  icon: AcademicCapIcon,
  colors: {
    from: 'from-cyan-600',
    to: 'to-gray-400',
    text: 'text-cyan-600',
  },
  description: {
    content: [
      {
        nodeType: 'h4',
        value: 'Bachelor in IT (Focus mobile app development)',
      },
      {
        nodeType: 'h6',
        value: 'Academy of Information Technology',
      },
      {
        nodeType: 'h6',
        value: 'Oct 2017 to Oct 2019',
      },
      {
        nodeType: 'p',
        value: `I've completed my Bachelor in IT with a focus on mobile app development. 
          
          
          During my studies I've learned about the following topics`,
      },
      {
        nodeType: 'ul',
        value: [
          {
            nodeType: 'li',
            value: 'Software Engineering',
          },
          {
            nodeType: 'li',
            value: 'Discrete Maths',
          },
          {
            nodeType: 'li',
            value: 'Lorem Ipsum',
          },
        ],
      },
    ],
  },
  tags: ['React Native', 'PHP', 'HTML', 'C#', 'Objective-C', 'Java', 'Ionic'],
};

const TheStudio: TimelineContent = {
  icon: BriefcaseIcon,
  image: the_studio,
  colors: { from: 'from-gray-900', to: 'to-sky-100', text: 'text-gray-900' },
  description: {
    content: [
      {
        nodeType: 'h4',
        value: 'Web Development Intern',
      },
      {
        nodeType: 'h6',
        value: 'The Studio Incubator - Sydney, Australia',
      },
      {
        nodeType: 'h6',
        value: 'Mar 2019 to Jun 2019',
      },
      {
        nodeType: 'p',
        value: `Development of page templates with PHP, HTML5/CSS3 and Foundation
          
          
          Add website interactivity with JavaScript and CSS transitions and animations`,
      },
    ],
  },
  tags: ['Vanila JS', 'PHP', 'Wordpress', 'CSS'],
};

const HowToo: TimelineContent = {
  icon: BriefcaseIcon,
  image: how_too,
  colors: {
    from: 'from-sky-600',
    text: 'text-sky-500',
    to: 'to-cyan-100',
  },
  description: {
    content: [
      {
        nodeType: 'h4',
        value: 'Front End Developer',
      },
      {
        nodeType: 'h6',
        value: 'How Too Pty Ltd - Sydney, Australia',
      },
      {
        nodeType: 'h6',
        value: 'Jan 2020 to Sep 2020',
      },

      {
        nodeType: 'p',
        value: `Developed e-learning authoring tool from pilot phase to finished commercial product using ReactJS and Node.`,
      },
      {
        nodeType: 'p',
        value: `Integrated proprietary software with external API's and services, such as Stripe, Hubspot and Prismic.`,
      },
    ],
  },
  tags: ['React', 'NextJS', 'Node', 'MySQL', 'TypeScript', 'Prismic', 'Stripe'],
};

const Koala: TimelineContent = {
  icon: BriefcaseIcon,
  image: koala,
  colors: {
    from: 'from-cyan-600',
    text: 'text-cyan-600',
  },
  description: {
    content: [
      {
        nodeType: 'h4',
        value: 'Full Stack Software Engineer',
      },
      {
        nodeType: 'h6',
        value: 'Koala Sleep Pty Ltd - Sydney',
      },
      {
        nodeType: 'h6',
        value: 'Feb 2021 - Current',
      },

      {
        nodeType: 'p',
        value: `
            Integrate Single-page storefront application with headless e-commerce backend and proprietary order fulfilment software.
  
            Lead development of new features and improvements to existing features, including Full Stack AB Testing
            
            Design and integrate unit and end-to-end testing.
            
            Front-end development of UI components using ReactJS.
              `,
      },
    ],
  },
  tags: [
    'Next JS',
    'TypeScript',
    'Tailwind CSS',
    'Apollo',
    'GraphQL',
    'Cypress',
    'AWS',
    'Serverless',
    'Commercetools',
    'Contentful',
    'Adyen',
  ],
};
export const timelineContent: Array<TimelineContent> = [
  Koala,
  HowToo,
  TheStudio,
  AIT,
];
