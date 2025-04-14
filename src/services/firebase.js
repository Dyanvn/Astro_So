import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBurwH2CDERiOeP6fanikqAjh0FCcTFVoo",
    authDomain: "astro-so.firebaseapp.com",
    projectId: "astro-so",
    storageBucket: "astro-so.firebasestorage.app",
    messagingSenderId: "7782299994",
    appId: "1:7782299994:web:f3384c4cc4130402e5db63",
    measurementId: "G-NE721KVK8B"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };