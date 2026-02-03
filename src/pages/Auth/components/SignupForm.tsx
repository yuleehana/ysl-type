import React, { useState } from 'react';
import { useAuthStore } from '../../../store/useAuthStore';
import { FirebaseError } from 'firebase/app';
import './scss/SignupForm.scss';
import { useNavigate } from 'react-router-dom';

interface SignupFormProps {
  onGoToLogin: () => void;
}

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
}

const SignupForm = ({ onGoToLogin }: SignupFormProps) => {
  const { onMember } = useAuthStore();
  const navigate = useNavigate();

  const [form, setForm] = useState<SignupForm>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    form.email.trim() !== '' &&
    form.password.trim() !== '' &&
    form.confirmPassword.trim() !== '' &&
    form.name.trim() !== '' &&
    form.password === form.confirmPassword;

  const validateForm = () => {
    if (!form.email) {
      alert('이메일을 입력해주세요');
      return false;
    }
    if (!form.password) {
      alert('이메일을 입력해주세요');
      return false;
    }
    return true;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onMember(form.email, form.password, form.name, form.phone);

      navigate('/');
      // onGoToLogin();
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
        <span className="signupBackBtn" onClick={onGoToLogin}></span>
        <div className="signupTitle">
          <span>SIGN UP</span>
        </div>
      </div>

      <form className="signupForm" id="signupForm" onSubmit={handleSignUp}>
        <div className="signupInputWrap">
          <label className="idWrap">
            <span className="inputLabel">아이디</span>
            <div className="idInput">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
              />
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
                required
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <span style={{ fontSize: '1.2rem', color: '#686868' }}>
              6~20자/영문 대문자,소문자,숫자,특수문자 중 2가지 이상 조합
            </span>
          </label>

          <label className="emailWrap">
            <span className="inputLabel">이메일</span>
            <div className="emailInput">
              <input
                name="email"
                id="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </label>

          <label className="phoneWrap">
            <span className="inputLabel">전화번호</span>
            <div className="phoneInput">
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <button>인증번호받기</button>
            </div>
          </label>
        </div>

        <button
          className="signupBtn"
          // form="signupForm"
          type="submit"
          // onClick={onLogin}
          disabled={!isFormValid}>
          가입하기
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
