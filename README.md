# @caiodanielnunessantos/react-components

Tradução para o português no final

Hi, everyone. This is the repository to what I put all the
React components I have designed that has some amount of general
usefullness. I usually design them elsewhere and then paste
their source here whenever I have a feeling that I would like
to use them again in another project. I really hope that you
use them and hope that they'll be useful to you too.

These components can be freely used and modified, but if you
enhance one of them somehow, I would like to ask you to
publish them as free software as well so that everyone will be
able to benefit from our work.

## How to use

First, create a React app if you didn't already. You can use
this very handy and performant 
[minimal template initializer](https://github.com/caiodanielnunessantos/create-react-app), if you want.

Then add this package as one of its dependencies.

```bash
$ npm install --save-dev @caiodanielnunessantos/react-components
```

Then, in your code, import the ones you intend to use:

```typescript
import React from 'react';
import {
  FullScreen,
  ScreenSlice,
  TimedMessages
} from '@caiodanielnunessantos/react-components';
```

See below how to use each one of them

## ```<FullScreen />```

This component is intended to be used along with the next one,
though it can be used along as well. It renders itself and its
children in a square that occupies exactly the entire viewport.

It's very simple and can be implemented otherwise, but I have
to put things in full-screen so often that this component saves
me a lot of time.

```typescript
//LoginPage.tsx
import React from 'react';
import {
  FullScreen,
} from '@caiodanielnunessantos/react-components';

export default function LoginPage() {
  return (
  <FullScreen style={{backgroundColor: 'blue'}}>
    <form>
      { /* [...] */ }
    </form>
  </FullScreen>
  );
}
```

## ```<ScreenSlice />```

This components is intended to save you time when you want to
design a layout that always has the same widths and heights
relative to their parent. It works better with 'fixed' parent
elements, since their overal size stays consistent with the
viewport's size. For example, you can use the ```<FullScreen />```.

## ```<TimedMessages />```

This component schedules the conditional rendering of elements,
using expiration times passed as props. Any valid element (or
collection of elements) can be used. Their duration time should
be specified in millisseconds.

This is the interface that abstracts its prop types:

```typescript
interface ITimedMessages {
  // The prop "messages" must be an array with zero or more
  // tuples that specify the element (or collection of elements)
  // that will be rendered for a scheduled amount of time
  messages: [number, React.ReactNode][],
  // The prop "repeat" should be set whenever one wants the
  // first message to be displayed again after the last one
  repeat: boolean,
}
```

Now let's see how to use the component

```typescript
import React from 'react';
import {
  TimedMessages,
} from '@caiodanielnunessantos/react-components';

export default function Footer() {
  return (
  <TimedMessages repeat={true} messages={[
    [<p>Our organization needs your help</p>, 3000],
    [<p>Please donate</p>, 2000],
  ]} />
  );
}
```
