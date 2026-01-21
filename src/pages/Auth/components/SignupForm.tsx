import React from 'react';

interface SignupFormProps {
  onLogin: () => void;
}

const SignupForm = ({ onLogin }: SignupFormProps) => {
  return (
    <section className="signupSection">
      <div className="signupTitleWrap">
        <span className="signupBackBtn"></span>
        <div className="signupTitle">
          <span>SIGN UP</span>
        </div>
      </div>

      <form className="sinupForm">
        <div className="signupInputWrap">
          <label className="idWrap">
            <span className="inputLabel">아이디</span>
            <div className="idInput">
              <input type="text" name="id" id="id" placeholder="Name" required />
              <button>중복확인</button>
            </div>
          </label>
          {/* <span>4~12자/영문 소문자(숫자 조합 가능)</span> */}

          <label className="pwWrap">
            <span className="inputLabel">비밀번호</span>
            <div className="pwInput">
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="Confirm Password"
              />
            </div>
          </label>
          {/* <span>6~20자/영문 대문자,소문자,숫자,특수문자 중 2가지 이상 조합</span> */}

          <label className="emailWrap">
            <span className="inputLabel">이메일</span>
            <div className="emailInput">
              <input type="email" name="email" id="email" placeholder="E-mail" />
            </div>
            <input type="text" />
          </label>

          <label className="phoneWrap">
            <span className="inputLabel">전화번호</span>
            <div className="phoneInput">
              <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
              <button>인증번호받기</button>
            </div>
          </label>
        </div>

        <button className="signupBtn" form="signupForm" type="submit" disabled onClick={onLogin}>
          가입하기
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
