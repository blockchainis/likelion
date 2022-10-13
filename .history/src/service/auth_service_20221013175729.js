import firebase from 'firebase';
import firebaseApp from './firebase';
class AuthService {
    login() {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    logout() {
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged){
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
}
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider)

export default AuthService;