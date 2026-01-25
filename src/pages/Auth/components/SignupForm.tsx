import React, { useState } from 'react';
import { useAuthStore } from '../../../store/useAuthStore';
import { FirebaseError } from 'firebase/app';
import './scss/SignupForm.scss';

interface SignupFormProps {
  onLogin: () => void;
}

const SignupForm = ({ onLogin }: SignupFormProps) => {
  const { onMember } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid =
    email.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    name.trim() !== '' &&
    password === confirmPassword;

  const validateForm = () => {
    if (!email) {
      alert('이메일을 입력해주세요');
      return false;
    }
    if (!password) {
      alert('이메일을 입력해주세요');
      return false;
    }
    return true;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onMember(email, password, name, phone);

      setEmail('');
      setPassword('');
      setName('');
      setPhone('');
      setConfirmPassword('');

      onLogin();
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error('회원가입 실패:', err.code, err.message);
        alert(err.message);
      } else if (err instanceof Error) {
        console.error('회원가입 실패:', err.message);
        alert(err.message);
      } else {
        console.error('회원가입 실패: 알 수 없는 에러', err);
      }
      throw err;
    }
  };

  return (
    <section className="signupSection">
      <div className="signupTitleWrap">
        <span className="signupBackBtn"></span>
        <div className="signupTitle">
          <span>SIGN UP</span>
        </div>
      </div>

      <form className="signupForm" id="signupForm" onSubmit={handleSignUp}>
        <div className="signupInputWrap">
          <label className="idWrap">
            <span className="inputLabel">아이디</span>
            <div className="idInput">
              <input type="text" name="name" id="name" placeholder="Name" required value={name} />
              <button>중복확인</button>
            </div>
            <span style={{ fontSize: '1.2rem', color: '#686868' }}>
              4~12자/영문 소문자(숫자 조합 가능)
            </span>
          </label>

          <label className="pwWrap">
            <span className="inputLabel">비밀번호</span>
            <div className="pwInput">
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
                value={password}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="Confirm Password"
                value={confirmPassword}
              />
            </div>
            <span style={{ fontSize: '1.2rem', color: '#686868' }}>
              6~20자/영문 대문자,소문자,숫자,특수문자 중 2가지 이상 조합
            </span>
          </label>

          <label className="emailWrap">
            <span className="inputLabel">이메일</span>
            <div className="emailInput">
              <input type="email" name="email" id="email" placeholder="E-mail" value={email} />
            </div>
          </label>

          <label className="phoneWrap">
            <span className="inputLabel">전화번호</span>
            <div className="phoneInput">
              <input type="tel" name="phone" id="phone" placeholder="Phone Number" value={phone} />
              <button>인증번호받기</button>
            </div>
          </label>
        </div>

        <button
          className="signupBtn"
          form="signupForm"
          type="submit"
          onClick={onLogin}
          disabled={!isFormValid}>
          가입하기
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
