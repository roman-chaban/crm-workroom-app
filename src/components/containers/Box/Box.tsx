import React, { type FC, ReactNode, TransitionEventHandler } from 'react';

interface BoxProps {
  children: ReactNode;
  className?: string;
  onTransitionEnd?: TransitionEventHandler<HTMLDivElement>;
}

export const Box: FC<BoxProps> = ({ children, className, onTransitionEnd }) => {
  const boxCSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
  };
  return (
    <div
      style={boxCSSProperties}
      className={className}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </div>
  );
};
