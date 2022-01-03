import { initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAyftL25sJK_WwgXxYdy1k6XxM6esKmHxw',
  authDomain: 'mygarage-a2642.firebaseapp.com',
  projectId: 'mygarage-a2642',
  storageBucket: 'mygarage-a2642.appspot.com',
  messagingSenderId: '223125195733',
  appId: '1:223125195733:web:1a5c8f2897d6618fb34b5c',
  measurementId: 'G-FH01PKTB1F',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
