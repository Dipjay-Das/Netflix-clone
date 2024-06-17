import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBfVtEThSHeDDtdc5YOMEhuv-Mcg5bLBMw",
  authDomain: "movie-app-c6ebc.firebaseapp.com",
  projectId: "movie-app-c6ebc",
  storageBucket: "movie-app-c6ebc.appspot.com",
  messagingSenderId: "492926163667",
  appId: "1:492926163667:web:b0ff17264bfe7407d09226"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout }