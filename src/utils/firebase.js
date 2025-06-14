// Firebase 초기화 및 인증 모듈 export
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { doc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Auth 초기화 및 설정
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Firestore 초기화
const db = getFirestore(app);

// Storage 초기화
const storage = getStorage(app);

// Firestore 오프라인 지속성 활성화
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support persistence.');
  }
});

// Firestore 연결 상태 모니터링
let isConnected = false;

const monitorFirestoreConnection = async () => {
  try {
    const connectedRef = doc(db, '.info/connected');
    onSnapshot(connectedRef, (snap) => {
      isConnected = snap.data()?.connected ?? false;
      console.log('Firestore connection state:', isConnected ? 'connected' : 'disconnected');
    });
  } catch (err) {
    console.error('Error monitoring Firestore connection:', err);
  }
};

monitorFirestoreConnection();

export { auth, googleProvider, db, storage, isConnected }; 