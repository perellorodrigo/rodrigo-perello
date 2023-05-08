import Heading from '@/components/Text/Heading';
import Paragraph from '@/components/Text/Paragraph';
import RichText, { RichTextRoot } from '@/components/Text/RichText';
import { classNames } from '@/utils';

type TimelineContent = {
  title: string;
  date: string;
  location: string;
  description: RichTextRoot;
};

const timelineContent: Array<TimelineContent> = [
  {
    title: 'Bachelor in IT (Focus mobile app development)',
    date: 'Oct 2017 to Oct 2019',
    location: 'Academy of Information Technology',
    description: {
      content: [
        {
          nodeType: 'p',
          value:
            "I've completed my Bachelor in IT with a focus on mobile app development. During my studies I've learned about the following topics:",
        },
      ],
    },
  },
  {
    title: 'Web Development Intern',
    date: 'Mar 2019 - Jun 2019',
    location: 'The Studio Incubator - Sydney, Australia',
    description: {
      content: [
        {
          nodeType: 'ul',
          value: [
            {
              nodeType: 'li',
              value:
                'Development of page templates with PHP, HTML5/CSS3 and Foundation',
            },
            {
              nodeType: 'li',
              value:
                'Add website interactivity with JavaScript and CSS transitions and animations',
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Front End Developer',
    date: 'Jan 2020 - Sep 2020',
    location: 'How Too Pty Ltd - Sydney, Australia',
    description: {
      content: [
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
  },
  {
    title: 'Full Stack Software Engineer',
    date: 'Feb 2021 - Current',
    location: 'Koala Sleep Pty Ltd - Sydney',
    description: {
      content: [
        {
          nodeType: 'p',
          value: `
          Integrate Single-page storefront application with headless e-commerce backend and proprietary order fulfilment software.

          Design and integrate unit and end-to-end testing.
          
          Front-end development of UI components using ReactJS.
            `,
        },
      ],
    },
  },
];

const Dot = () => (
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-4 bg-sky-200 rounded-full"></div>
);

const Line = () => (
  <div className="w-[4px] h-full bg-sky-100 relative">
    <Dot />
  </div>
);

export default function Home() {
  return (
    <div {...classNames('container', 'mx-auto py-10')}>
      <div {...classNames('grid grid-cols-12')}>
        <div
          {...classNames('col-start-2 col-span-10', 'p-6 space-y-4', 'shadow')}
        >
          <Heading level="h1">Timeline</Heading>
          <div className="grid grid-cols-[1fr_4px_1fr]">
            {timelineContent.map(
              ({ title, date, description, location }, index) => {
                const ContentNode = (
                  <div className="flex flex-col items-center m-4 p-4 bg-white shadow-md rounded">
                    <Heading level="h3">{title}</Heading>
                    <Paragraph size="md">{date}</Paragraph>
                    {description && <RichText {...description} />}
                  </div>
                );

                return (
                  <>
                    {index % 2 === 0 ? ContentNode : <div />}
                    <Line />
                    {index % 2 !== 0 ? ContentNode : <div />}
                  </>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
