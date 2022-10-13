import firebase from 'firebase';
import firebaseApp from './firebase';
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[GoogleAuthProvider]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider)

export default AuthService;