import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, className, type = 'button' }: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors',
        className
      )}
    >
      {children}
    </button>
  );
}
