import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { downloadOutline, heartOutline, heart } from 'ionicons/icons';
import './EmojiItem.css';

interface EmojiItemProps {
  emoji: string;
}

const EmojiItem: React.FC<EmojiItemProps> = ({ emoji }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleDownload = () => {
    // Implement download functionality
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="emoji-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={emoji} alt="Generated Emoji" />
      {isHovered && (
        <div className="emoji-actions">
          <IonIcon icon={downloadOutline} onClick={handleDownload} />
          <IonIcon icon={isLiked ? heart : heartOutline} onClick={handleLike} />
        </div>
      )}
    </div>
  );
};

export default EmojiItem;
