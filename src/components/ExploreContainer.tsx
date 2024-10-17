import React from 'react';
import './ExploreContainer.css';
import EmojiForm from './EmojiForm';
import FeaturedEmojis from './FeaturedEmojis';
import PreviousPrompts from './PreviousPrompts';
import EmojiIdeas from './EmojiIdeas';
import PopularCategories from './PopularCategories';

const ExploreContainer: React.FC = () => {
  return (
    <div className="container">
      <h1>Emoji Generator</h1>
      <EmojiForm onSubmit={() => {}} />
      <FeaturedEmojis />
      <PreviousPrompts />
      <EmojiIdeas />
      <PopularCategories />
    </div>
  );
};

export default ExploreContainer;
