import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { logoGoogle, arrowForward } from 'ionicons/icons';
import './SignUpPage.css';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up with', name, email, password);
    // Handle sign up logic here
  };

  return (
    <IonPage className="signup-page">
      <IonContent fullscreen>
        <div className="signup-content">
          <div className="ai-logo">
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffc107" />
                  <stop offset="100%" stopColor="#ff9800" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64ffda" />
                  <stop offset="100%" stopColor="#48b8d0" />
                </linearGradient>
              </defs>
              <circle cx="25" cy="25" r="24" fill="url(#grad1)" opacity="0.2" />
              <circle cx="25" cy="25" r="19" fill="url(#grad1)" opacity="0.4" />
              <circle cx="25" cy="25" r="5" fill="#ffffff" />
              <circle cx="25" cy="25" r="2.5" fill="url(#grad2)" />
              <g id="orbits">
                <circle cx="25" cy="25" r="15" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
                <circle cx="25" cy="25" r="11" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
              </g>
              <g id="dots">
                <circle cx="40" cy="25" r="1.5" fill="#64ffda" />
                <circle cx="36" cy="36" r="1.5" fill="#ffc107" />
                <circle cx="25" cy="40" r="1.5" fill="#ff9800" />
                <circle cx="14" cy="36" r="1.5" fill="#48b8d0" />
                <circle cx="10" cy="25" r="1.5" fill="#64ffda" />
              </g>
            </svg>
          </div>
          <h1 className="signup-title">Join the AI Revolution</h1>
          <form onSubmit={handleSignUp} className="signup-form">
            <IonInput
              type="text"
              placeholder="Name"
              value={name}
              onIonChange={e => setName(e.detail.value!)}
              required
            />
            <IonInput
              type="email"
              placeholder="Email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
              required
            />
            <IonInput
              type="password"
              placeholder="Create Password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              required
            />
            <button type="submit" className="creative-button">
              <span>Sign Up</span>
              <IonIcon icon={arrowForward} />
            </button>
          </form>
          <button className="gmail-button">
            <IonIcon icon={logoGoogle} />
            <span>Sign up with Gmail</span>
          </button>
          <p className="terms">
            By signing up, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>
          </p>
        </div>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
