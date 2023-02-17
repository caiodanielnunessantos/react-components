import React from 'react';

interface IAnimatedButton {
  base_style: React.CSSProperties,
  normal_style: React.CSSProperties,
  hover_style: React.CSSProperties,
  click_style: React.CSSProperties,
}

export function AnimatedButton({ base_style, normal_style, hover_style, click_style }: IAnimatedButton) {
  const [state, set_state] = React.useState<'hover' | 'normal' | 'click'>('normal');
  let style: React.CSSProperties;
  if (state === 'normal') {
    style = { ...base_style, ...normal_style };
  } else if (state === 'hover') {
    style = { ...base_style, ...hover_style };
  } else if (state === 'click') {
    style = { ...base_style, ...click_style };
  } else {
    style = base_style;
  }
  return (
    <button
      type="button"
      style={style}
      onMouseEnter={() => set_state('hover')}
      onMouseLeave={() => set_state('normal')}
      onMouseDown={() => set_state('click')}
      onMouseUp={() => set_state('hover')}
    >Butão</button>
  );
}
