'use client';
import { PropsWithChildren, forwardRef, memo, useRef } from 'react';
import classNames from 'classnames';

import Card from '@/components/Card';
import Text from '@/components/Text';
import Heading from '@/components/Text/Heading';
import { timelineContent } from '@/content/timeline';

const _StarsAnimation = () => {
  const stars = Array.from({ length: 50 }, (_, i) => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2,
      delay: Math.random() * 5,
    };
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {stars.map((star, i) => {
        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-stars"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              animationDelay: `-${star.delay}s`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        );
      })}
    </div>
  );
};

const StarsAnimation = memo(_StarsAnimation);

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );
};

const ContentSection = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div className="container mx-auto space-y-4 px-6 sm:px-10 py-6" ref={ref}>
        {children}
      </div>
    );
  }
);

ContentSection.displayName = 'ContentSection';

const Banner = ({ handleArrowClick }: { handleArrowClick: () => void }) => (
  <div className="w-full h-screen relative flex justify-center items-center text-center">
    <StarsAnimation />
    <div className="relative">
      <div className={classNames('container', 'mx-auto relative z-20')}>
        <div className={classNames('p-6 space-y-4')}>
          <Text.Heading level="h1">Hi 👋🏻, I’m Rod.</Text.Heading>
          <Text.Heading level="h3">
            Full Stack Software Engineer @ Koala.
          </Text.Heading>
          <div className="relative flex flex-col items-center justify-evenly p-8 space-y-4 md:flex-row md:space-y-0">
            <div className="inline-flex space-x-2">
              <a href="https://www.linkedin.com/in/rodrigo-perello-4a392b11b/">
                <Text.Paragraph asSpan>Linkedin</Text.Paragraph>
              </a>
            </div>
            <div className="inline-flex space-x-2">
              <a href="mailto:hello@rodrigoperello.com">
                <Text.Paragraph asSpan>Email</Text.Paragraph>
              </a>
            </div>
            <div className="inline-flex space-x-2">
              <a href="https://github.com/perellorodrigo">
                <Text.Paragraph asSpan>Github</Text.Paragraph>
              </a>
            </div>
            <div className="inline-flex space-x-2">
              <a
                href={'/Rodrigo_Perello_Resume_2024-03.pdf'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text.Paragraph asSpan>Resume</Text.Paragraph>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-neutral-300">
      <button className="animate-bounce" onClick={handleArrowClick}>
        <ArrowDown />
      </button>
    </div>
  </div>
);

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Banner handleArrowClick={handleArrowClick} />
      <ContentSection ref={contentRef}>
        <Heading level="h2" className="text-center">
          About Me
        </Heading>
        <Text.Paragraph>
          Senior Full Stack Software Engineer with an easy going personality and
          creative approach to problem-solving. Demonstrated expertise in
          ReactJS, Node, NextJS, GraphQL, and AWS services, with strong
          experience in e-commerce solutions and operational system
          integrations.
        </Text.Paragraph>
        <Text.Paragraph>
          Adept at leading feature development and implementing robust testing
          and documentation practices. Seeking to leverage technical expertise
          and collaborative skills in a dynamic software engineering role.
          Always enthusiastic to play around with new tech while working on
          projects.
        </Text.Paragraph>
        <Text.Paragraph>
          A self proclaimed typescript wizard and an over-thinker when it comes
          to variable naming.
        </Text.Paragraph>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" className="text-center">
          Work
        </Heading>
        <div className="space-y-8 mt-8 overflow-hidden">
          {timelineContent.map(
            ({ icon: IconComponent, ...restContent }, index) => {
              return <Card key={`${index}-card`} content={restContent} />;
            }
          )}
        </div>
      </ContentSection>
    </>
  );
}
