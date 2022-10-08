import firebase from 'firebase';
import firebaseAppx from './firebase';
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider)

export default AuthService;