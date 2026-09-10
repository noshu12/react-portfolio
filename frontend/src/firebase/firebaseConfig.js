import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// NOTE: Firebase web API keys are PUBLIC by design — they are included in every
// client bundle that ships to visitors. Data security is enforced by Firestore
// security rules, not by hiding the key. Values below are the same ones that
// would be shipped via VITE_FIREBASE_* env vars; env vars take precedence.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDu23d5Pv-wROSBBGx1DO38CLm4OEcJfB4',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'noushad-portfolio-5dd6b.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'noushad-portfolio-5dd6b',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'noushad-portfolio-5dd6b.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '345704010094',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:345704010094:web:438480578ae2b8a9c9717f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);