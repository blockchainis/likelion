import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login() {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    logout() {
        console.log('logout');
        firebase.auth().signOut().then(() => {
            Window.location.replace("/")
          }).catch((error) => {
            console.log(error)
          });
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }
}
export default AuthService;