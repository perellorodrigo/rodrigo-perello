import cx from 'classnames';

export const classNames = (...classes: Parameters<typeof cx>) => ({
  className: cx(...classes),
});
