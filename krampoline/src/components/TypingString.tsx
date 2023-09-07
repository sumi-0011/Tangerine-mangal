import React, { PropsWithChildren } from 'react';
import Typing, { TypingMultiline } from 'react-kr-typing-anim';

function TypingString({ children }: { children: string }) {
  return (
    <Typing
      Tag="div"
      preDelay={1000}
      postDelay={1000}
      cursor
      fixedWidth
      // onDone={() => console.log('done')}
    >
      {children}
    </Typing>
  );
}

export default TypingString;
