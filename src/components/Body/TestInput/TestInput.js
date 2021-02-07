import React from 'react';

const TestInput = () => {
  const [text, setText] = useAtom(textAtom);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};

export default TestInput;
