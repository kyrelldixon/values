import React from 'react';

const Emoji = ({ emoji, emojiName }) => (
  <span role="img" aria-label={emojiName}>{emoji}</span>
);

export default Emoji;