import React, { useState } from 'react';
import AuthLayout from './components/AuthLayout';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './scss/Auth.scss';

export type AuthMode = 'login' | 'signup';

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>('login');

  return (
    <div className="pullInner authpage">
      <div className="inner authInner">
        <AuthLayout mode={mode}>
          {mode === 'login' ? (
            <LoginForm onGoToSignup={() => setMode('signup')} />
          ) : (
            <SignupForm onGoToLogin={() => setMode('login')} />
          )}
        </AuthLayout>
      </div>
    </div>
  );
};

export default Auth;
