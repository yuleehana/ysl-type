import React from 'react';
import './scss/AuthLayout.scss';

interface AuthLayoutProps {
  mode: 'login' | 'signup';
  children: React.ReactNode;
}

const AuthLayout = ({ mode, children }: AuthLayoutProps) => {
  return (
    <div className={`authLayout ${mode}`}>
      <div className="authLeft">
        <section className="authVisual">
          <img src="/public/images/mainLogo.svg" alt="로고 세로" />
        </section>
      </div>
      <div className="authRight">{children}</div>
    </div>
  );
};

export default AuthLayout;
