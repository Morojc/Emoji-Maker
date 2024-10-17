import { useState } from 'react';
import { generateImage } from '../utils/replicateApi';

export const useImageGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);

  const generateImageFromPrompt = async (prompt: string) => {
    setIsLoading(true);
    try {
      const imageUrl = await generateImage(prompt);
      setIsLoading(false);
      return imageUrl;
    } catch (error) {
      console.error('Error generating image:', error);
      setIsLoading(false);
      return '';
    }
  };

  return { generateImage: generateImageFromPrompt, isLoading };
};
