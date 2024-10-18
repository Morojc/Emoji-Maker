import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonFooter,
  IonInput,
  IonPage
} from '@ionic/react';
import { attachOutline, sendOutline } from 'ionicons/icons';
import '../App.css';
import '../styles/HomePage.css';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newUserMessage: ChatMessage = {
      role: 'user',
      content: inputText,
    };

    setChatHistory(prevHistory => [...prevHistory, newUserMessage]);

    // Simulate AI response (replace this with actual AI integration later)
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        role: 'ai',
        content: `AI response to: "${inputText}"`,
      };
      setChatHistory(prevHistory => [...prevHistory, aiResponse]);
    }, 1000);

    setInputText('');
  };

  const handleReset = () => {
    setChatHistory([]);
  };

  const suggestionButtons = [
    { icon: '🎨', text: 'Créer une peinture de style Renaissance' },
    { icon: '🍳', text: 'Cuisiner sans faire de courses' },
    // Add more suggestion buttons as needed
  ];

  return (
    <IonPage className="home-page">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton className="custom-menu-button creative-menu-button">
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </IonMenuButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={handleReset} className="reset-button">
              <div className="reset-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
              </div>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div className="chat-container">
          {chatHistory.length === 0 ? (
            <div className="suggestion-container">
              {suggestionButtons.map((button, index) => (
                <button key={index} className="suggestion-button" onClick={() => setInputText(button.text)}>
                  <span className="suggestion-icon">{button.icon}</span>
                  <span className="suggestion-text">{button.text}</span>
                </button>
              ))}
            </div>
          ) : (
            chatHistory.map((message, index) => (
              <div key={index} className={`chat-message ${message.role}`}>
                <div className="message-content">{message.content}</div>
              </div>
            ))
          )}
        </div>
      </IonContent>
      
      <IonFooter>
        <div className="input-container">
          <IonButton fill="clear" className="attach-button">
            <IonIcon icon={attachOutline} />
          </IonButton>
          <IonInput
            value={inputText}
            placeholder="Type your message..."
            onIonChange={e => setInputText(e.detail.value!)}
            onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
            className="message-input"
          ></IonInput>
          <IonButton fill="clear" className="send-button" onClick={handleSendMessage}>
            <IonIcon icon={sendOutline} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default HomePage;
