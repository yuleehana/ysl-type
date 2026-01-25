import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { create } from 'zustand';
import { auth, db } from '../firebase/firebase';
import type { AuthState, UserData } from '../types/authType';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  userData: null,
  isLogin: false,
  loading: false,
  error: null,

  onMember: async (email, password, name, phone) => {
    try {
      const useCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = useCredential.user;

      const userData = {
        uid: user.uid,
        name,
        email,
        phone,
      };

      console.log('데이터 베이스에 저장된 정보', userData);

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, userData);

      set({
        user,
        userData,
      });

      console.log('회원가입 완료');
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error('로그인 실패:', err.code, err.message);
        alert(err.message);
      } else if (err instanceof Error) {
        console.error('로그인 실패:', err.message);
        alert(err.message);
      } else {
        console.error('로그인 실패: 알 수 없는 에러', err);
      }
      throw err;
    }
  },

  onLogin: async (email, password) => {
    try {
      const useCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = useCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));

      set({
        user,
        userData: userDoc.data() as UserData,
        isLogin: true,
      });
    } catch (err) {
      console.log('로그인 실패', err);
    }
  },

  onLogout: async () => {
    await signOut(auth);

    set({
      user: null,
      userData: null,
    });
  },
}));
