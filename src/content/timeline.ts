import { RichTextRoot } from '@/components/Text/RichText';

import type { StaticImageData } from 'next/image';
// import ait from '@public/ait.png';
// import the_studio from '@public/the_studio.png';
// import how_too from '@public/how_too.svg';
// import koala from '@public/koala.png';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export type TimelineContent = {
  description: RichTextRoot;
  icon?: typeof AcademicCapIcon | typeof BriefcaseIcon;
  image?: StaticImageData;
  tags?: Array<string>;
};

const AIT: TimelineContent = {
  icon: AcademicCapIcon,
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
        value: `I completed my Bachelor in Information Technology with a focus on mobile app development and web development at the Academy of Information Technology. This course taught me the fundamentals of coding and how to develop real world applications using various tools and technologies. I learned how to design, implement, test, and deploy mobile apps for iOS and Android using Cross Platform App framework and also Native. 
                I also learned how to create dynamic and responsive web pages using HTML, CSS, React, and SQL. I gained valuable skills and knowledge that prepared me for a career in the IT industry as a software developer.`,
      },
    ],
  },
  tags: ['React Native', 'PHP', 'HTML', 'C#', 'Objective-C', 'Java', 'Ionic'],
};

const TheStudio: TimelineContent = {
  icon: BriefcaseIcon,
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
  // image: how_too,
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
  // image: koala,
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
