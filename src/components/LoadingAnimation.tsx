import React from 'react';
import { IonSpinner } from '@ionic/react';
import './LoadingAnimation.css';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container">
      <IonSpinner name="crescent" />
      <p>Generating Emoji...</p>
    </div>
  );
};

export default LoadingAnimation;
