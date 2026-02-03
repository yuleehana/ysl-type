import React, { useState } from 'react';
import './scss/LoginForm.scss';
import { useAuthStore } from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onGoToSignup: () => void;
}

const LoginForm = ({ onGoToSignup }: LoginProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onLogin(email, password);
      navigate('/');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="loginSection">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <div className="loginFormTop">
          <div className="loginInputWrap">
            <label>
              <input
                className="emailInput"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <input
                className="passwordInput"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={`togglePwBtn ${showPassword ? 'active' : ''}`}
                onClick={() => setShowPassword(!showPassword)}></span>
            </label>
            <button type="submit" className="loginBtn">
              로그인
            </button>
          </div>
          <div className="findIdPw">
            <span>아이디찾기</span>
            <span>|</span>
            <span>비밀번호 찾기</span>
            <span>|</span>
            <button type="button" onClick={onGoToSignup}>
              회원가입
            </button>
          </div>
        </div>
        <div className="loginFormBottom">
          <div className="loginLine">
            <span className="line"></span>
            <span className="loginLineTitle">SNS 로그인</span>
            <span className="line"></span>
          </div>
          <div className="snsLoginWrap">
            <ul>
              <li>
                <button>
                  <img src="/public/icon/snsNaver.svg" alt="네이버 로그인" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/public/icon/snsKakao.svg" alt="카카오 로그인" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/public/icon/snsGoogle.svg" alt="구글 로그인" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/public/icon/snsFacebook.svg" alt="페이스북 로그인" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/public/icon/snsApple.svg" alt="애플 로그인" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
