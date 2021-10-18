import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initiazeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initiazeAuthentication;
