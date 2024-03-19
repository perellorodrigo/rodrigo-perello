import classNames from 'classnames';

const ArrowDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={classNames('w-8 h-8', className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
);

const Arrow = ({
  visible,
  handleArrowClick,
  direction,
}: {
  visible: boolean;
  direction: 'up' | 'down';
  handleArrowClick: () => void;
}) => (
  <div
    className={classNames(
      'absolute bottom-8 left-1/2 transform -translate-x-1/2',
      'text-neutral-300 hover:text-neutral-100',
      'transition-opacity duration-700',
      direction === 'up' && 'rotate-180',
      visible ? 'opacity-100' : 'opacity-0'
    )}
  >
    <button className="animate-bounce" onClick={handleArrowClick}>
      <ArrowDown />
    </button>
  </div>
);

export default Arrow;
