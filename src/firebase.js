// import firebase from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import 'firebase/firestore';
import {cityDb} from './temp/m-city-export'

import {} from './'

const firebaseConfig = {
  apiKey: "AIzaSyD-EJsEk7FW96QRO18MMhaI-URfeIesOcY",
  authDomain: "mcity-a2dad.firebaseapp.com",
  projectId: "mcity-a2dad",
  storageBucket: "mcity-a2dad.appspot.com",
  messagingSenderId: "615982903158",
  appId: "1:615982903158:web:793b508f1bbab1f9f15457",
  measurementId: "G-5YYKYZTHLR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB=firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection= DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection =DB.collection('promotions');
const teamsCollection =DB.collection('teams');


// cityDb.matches.forEach(item=>{
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item =>{
//   playersCollection.add(item)
// })

// cityDb.positions.forEach(item=>{
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item =>{
//   promotionsCollection.add(item)
// })
// cityDb.teams.forEach(item=>{
//   teamsCollection.add(item)
// })

export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
}
