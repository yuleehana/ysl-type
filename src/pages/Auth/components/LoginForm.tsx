import React from 'react';
import './scss/LoginForm.scss';

interface LoginProps {
  onSignup: () => void;
}

const LoginForm = ({ onSignup }: LoginProps) => {
  return (
    <section className="loginSection">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <div className="loginFormTop">
          <div className="loginInputWrap">
            <input type="email" required placeholder="Name" />
            <input type="password" required placeholder="Password" />
            <button onClick={onSignup}>로그인</button>
          </div>
          <div className="findIdPw">
            {/* Link로 바꾸기 */}
            <span>아이디찾기</span>
            <span>|</span>
            <span>비밀번호 찾기</span>
            <span>|</span>
            <span>회원가입</span>
          </div>
        </div>
        <div className="loginFormBottom">
          <div className="loginLine">
            <span className="line"></span>
            <span className='loginLineTitle'>SNS 로그인</span>
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
