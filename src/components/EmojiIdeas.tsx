import React from 'react';
import './EmojiIdeas.css';

const EmojiIdeas: React.FC = () => {
  return (
    <div className="emoji-ideas">
      <h2>Emoji Ideas</h2>
      <div className="idea-item">
        <h3>Emoji Inspiration</h3>
        <p>Browse through creative prompts to spark your emoji making journey</p>
        <span className="idea-icon">🔍</span>
      </div>
    </div>
  );
};

export default EmojiIdeas;
