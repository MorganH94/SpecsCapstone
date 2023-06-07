import React from 'react';

const MoodEmoji = ({ mood }) => {
  let emoji;
  switch (mood) {
    case 'happy':
      emoji = '😄';
      break;
    case 'neutral':
      emoji = '😐';
      break;
    case 'sad':
      emoji = '😢';
      break;
    default:
      emoji = '😐';
  }

  return (
    <div>
      <span>Mood: {emoji}</span>
    </div>
  );
};

export default MoodEmoji;

