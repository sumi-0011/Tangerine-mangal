import React, { PropsWithChildren } from 'react';
import Typing, { TypingMultiline } from 'react-kr-typing-anim';

function TypingString({ children, isFirst }: { children: string; isFirst?: boolean }) {
  return (
    <Typing
      Tag="div"
      preDelay={isFirst ? 2500 : 0}
      postDelay={50000}
      speed={20}
      cursor
      fixedWidth
      onDone={() => console.log('done')}
    >
      {children}
    </Typing>
  );
}

export default TypingString;
