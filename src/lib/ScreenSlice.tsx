import * as React from 'react';

interface IScreenSlice {
  direction: 'h' | 'v',
  elements: [React.ReactNode, number, React.CSSProperties][],
  reverse?: boolean,
}

export function ScreenSlice({ direction, elements, reverse }: IScreenSlice) {
  if (direction === 'h') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: reverse ? 'column-reverse' : 'column',
          alignItems: 'stretch',
          alignContent: 'stretch',
        }}
      >
        {
          elements.map(([element, size, style], index, array) => (
            <div
              key={index}
              style={{
                ...style,
                width: '100%',
                height: `${size * 100 / array.reduce((prev, cur) => prev + cur[1], 0)}%`,
              }}
            >{element}</div>
          ))
        }
      </div>
    );
  } else if (direction === 'v') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: reverse ? 'row-reverse' : 'row',
          alignItems: 'stretch',
          alignContent: 'stretch',
        }}
      >
        {
          elements.map(([element, size, style], index, array) => (
            <div
              key={index}
              style={{
                ...style,
                height: '100%',
                width: `${size * 100 / array.reduce((prev, cur) => prev + cur[1], 0)}%`,
              }}
            >{element}</div>
          ))
        }
      </div>
    );
  } else return null;
}
