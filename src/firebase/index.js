import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCSELy05YTTl2mmSMYYBEufSgn_uTrJJBw",
  authDomain: "project-3-6756b.firebaseapp.com",
  databaseURL: "https://project-3-6756b.firebaseio.com",
  projectId: "project-3-6756b",
  storageBucket: "project-3-6756b.appspot.com",
  messagingSenderId: "761527882173"
};

export const firebaseApp = firebase.initializeApp(config);
export const lessonsRef = firebase.database().ref('lessons');
export const categoriesRef = firebase.database().ref('categories');
export const languagesRef = firebase.database().ref('languages');

export function saveUser (user) {
  firebase.database().ref(`users/${user.uid}`)
  .set({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
      });
}
