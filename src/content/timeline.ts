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
        value: `Developed e-learning authoring, transitioning it from a pilot phase to a commercially viable product using ReactJS and Node, enhancing digital learning capabilities.`,
      },
      {
        nodeType: 'p',
        value: `Designed and deployed custom JavaScript applications with integrated gamification elements, which included complex animations, serving as comprehensive learning and induction tools for employees, which increased engagement and facilitated knowledge retention.`,
      },
      {
        nodeType: 'p',
        value: `Integrating proprietary software with external API's and services, such as Stripe, Hubspot and Prismic.`,
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
        nodeType: 'ul',
        value: [
          {
            nodeType: 'li',
            value:
              'Developed a storefront application from scratch using NextJS, seamlessly integrating with a headless Commercetools e-commerce backend and proprietary order fulfillment software, enhancing customer experience.',
          },
          {
            nodeType: 'li',
            value:
              'Designed and maintained a comprehensive React and Tailwind component library, leveraging Storybook for component testing and documentation, ensuring consistency and reliability across projects.',
          },
          {
            nodeType: 'li',
            value:
              'Led the development of key features, including; a Server Side AB Testing framework, an advanced product search functionality, and user accounts, significantly improving user engagement and conversion rates.',
          },
          {
            nodeType: 'li',
            value:
              'Developed and maintained Serverless AWS Lambdas for bespoke operational and logistical business logic, optimizing processes and reducing operational costs.',
          },
          {
            nodeType: 'li',
            value:
              'Worked on the design of a GraphQL service, adopting a code-first approach with Nexus, to serve both the storefront application and other services, enhancing data integration and retrieval.',
          },
          {
            nodeType: 'li',
            value:
              'Assumed responsibility for the creation of technical documentation, covering both proof of concepts and the final implementations, ensuring clarity and accessibility for technical teams and stakeholders.',
          },
          {
            nodeType: 'li',
            value:
              'Constructed and managed CI/CD pipelines within GitHub for end-to-end testing, serverless functions, and dockerized builds, optimizing deployment processes.',
          },
          {
            nodeType: 'li',
            value:
              'Reviewed over 800 Pull Requests, providing constructive feedback and mentoring to junior developers, fostering a culture of continuous learning within the team.',
          },
          {
            nodeType: 'li',
            value:
              'Performed continuous optimization of the platform, including bundle size reduction and JavaScript profiling to rectify memory leaks, elevating the user experience.',
          },
          {
            nodeType: 'li',
            value:
              'Optimized architecture for server-side A/B Testing, implementing effective caching and standardization strategies to maintain site speed.',
          },
          {
            nodeType: 'li',
            value:
              'Created scripts to assist content producers by automating data integration into Commercetools and Contentful, significantly easing content management tasks.',
          },
        ],
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
