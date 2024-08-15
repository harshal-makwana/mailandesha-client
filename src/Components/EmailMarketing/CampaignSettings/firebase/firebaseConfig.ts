// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSbWDEM9wOeSuHkttEGDc6s_M9JvcF5bw",
    authDomain: "mailandesha.firebaseapp.com",
    projectId: "mailandesha",
    storageBucket: "mailandesha.appspot.com",
    messagingSenderId: "332380584939",
    appId: "1:332380584939:web:1775323d99068783b2f7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
