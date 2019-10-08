// learning refs

import React, { useRef } from 'react';

const Ref = () => {
  const refText = useRef('something');

  const submit = () => {
    console.log(refText.current.value);
  };

  return (
    <div>
      <h3> Testing Refs </h3>

      <div>
        <input ref={refText} placeholder="Add text" />
      </div>

      <br />
      <button onClick={() => submit()} style={{ textAlign: 'center' }}>
        Submit{' '}
      </button>
    </div>
  );
};

export default Ref;
