import React from 'react';
import './PreviousPrompts.css';

const PreviousPrompts: React.FC = () => {
  return (
    <div className="previous-prompts">
      <h2>Previous Prompts</h2>
      <div className="prompt-list">
        <div className="prompt-item">
          <span className="prompt-emoji">📝</span>
          <p>Prompt 1</p>
          <p className="prompt-time">Generated 5 mins ago</p>
        </div>
        <div className="prompt-item">
          <span className="prompt-emoji">🔥</span>
          <p>Hot Prompt</p>
          <p className="prompt-status">Trending</p>
        </div>
      </div>
    </div>
  );
};

export default PreviousPrompts;
