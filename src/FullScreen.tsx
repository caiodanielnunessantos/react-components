import * as React from 'react';

const fullscreen_style: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

interface IFullScreen {
  style: React.CSSProperties,
}

export function FullScreen({ children, style }: React.PropsWithChildren<IFullScreen>) {
  return (
    <div style={{ ...style, ...fullscreen_style }}>{children}</div>
  );
}
