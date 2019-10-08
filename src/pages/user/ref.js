// learning refs

import React, { useRef } from 'react';

const Ref = () => {
  const refText = useRef('');

  const submit = () => {
    console.log(refText.current.value);
  };

  return (
    <div>
      <h3> Testing Refs </h3>

      <div>
        <input
          ref={refText}
          placeholder="Add text"
          onChange={(e) => {
            e.preventDefault();
          }}
        />
      </div>

      {!refText.current.value ? (
        <p> test </p>
      ) : (
        <h5> {refText.current.value} </h5>
      )}

      <br />
      <button onClick={() => submit()} style={{ textAlign: 'center' }}>
        Submit{' '}
      </button>
    </div>
  );
};

export default Ref;
