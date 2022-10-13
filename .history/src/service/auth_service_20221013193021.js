import firebase from 'firebase';
import firebaseApp from './firebase';
import { useNavigate } from 'react-router-dom';
class AuthService {
    const history = useNavigate();
    login() {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    logout() {
        console.log('logout');
        firebase.auth().signOut().then(() => {
            
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