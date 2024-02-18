import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBjX50GUz0EQiwZZnAZ8eqxplLXD51VR18",
  authDomain: "image-upload-43fe5.firebaseapp.com",
  projectId: "image-upload-43fe5",
  storageBucket: "image-upload-43fe5.appspot.com",
  messagingSenderId: "328300409566",
  appId: "1:328300409566:web:1f74413bef8fddcd4b084f"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

