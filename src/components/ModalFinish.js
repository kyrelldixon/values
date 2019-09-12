import React from 'react';
import Button from './Button';

const ModalFinish = () => (
  <div className="flex flex-col items-center justify-center max-w-full p-4">
    <h2 className="text-2xl mb-4">
      <span role="img" aria-label="party popper">🎉</span> Congratulations!
    </h2>
    <p className="text-center my-4">You just took a set towards living a life that's aligned with your core values.</p>
    <p className="font-bold mt-8 mb-12">That's a big deal.</p>
    <p className="mb-12">Know people who would enjoy this exercise?</p>
    <div className="h-32 flex flex-col justify-around">
      <Button primary>Share on Facebook</Button>
      <Button secondary>Share on Twitter</Button>
    </div>
  </div>
);

export default ModalFinish;