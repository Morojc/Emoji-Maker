import { useState } from 'react';
import { generateEmoji as generateEmojiApi } from '../utils/replicateApi';

export const useEmojiGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateEmoji = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const emojiUrl = await generateEmojiApi(prompt);
      setIsLoading(false);
      return emojiUrl;
    } catch (error) {
      console.error('Error generating emoji:', error);
      setError('Failed to generate emoji. Please try again.');
      setIsLoading(false);
      return null;
    }
  };

  return { generateEmoji, isLoading, error };
};
