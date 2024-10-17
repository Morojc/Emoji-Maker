import React from 'react';
import EmojiItem from './EmojiItem';
import './EmojiGrid.css';

interface EmojiGridProps {
  emojis: string[];
}

const EmojiGrid: React.FC<EmojiGridProps> = ({ emojis }) => {
  return (
    <div className="emoji-grid">
      {emojis.map((emoji, index) => (
        <EmojiItem key={index} emoji={emoji} />
      ))}
    </div>
  );
};

export default EmojiGrid;
