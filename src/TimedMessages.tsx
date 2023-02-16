import React from 'react';

interface ITimedMessages {
  messages: [number, React.ReactElement][],
  repeat: boolean,
}

export function TimedMessages({ messages, repeat }: ITimedMessages) {
  const [message, set_message] = React.useState<React.ReactElement | null>(null);
  const [index, set_index] = React.useState(0);
  React.useEffect(() => {
    if (index >= messages.length) {
      if (repeat) {
        set_index(0);
      } else {
        set_message(null);
      }
    } else {
      set_message(messages[index][1]);
      setTimeout(() => {
        set_index(index + 1);
      }, messages[index][0]);
    }
  }, [index]);
  return (<>{message}</>);
}
