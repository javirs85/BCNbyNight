import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';


import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js';
import { getPerformance } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-performance.js';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3EobtWgtzNrOL2Qde3nM-JCfsPdAqRGg",
    authDomain: "vikingarena-5fb20.firebaseapp.com",
    projectId: "vikingarena-5fb20",
    storageBucket: "vikingarena-5fb20.appspot.com",
    messagingSenderId: "127848345256",
    appId: "1:127848345256:web:d31f8969ea0806d04a1c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GetFactionsFromDB() {
    try {
        const querySnapshot = await getDocs(collection(db, "Factions"));
        const ToReturn = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            ToReturn.push(doc.data());
        });
        return ToReturn;
    } catch (e) {
        console.error("Error retrieving Faction: ", e);
    }
}

export async function GetCharactersFromDB() {
    try {
        const querySnapshot = await getDocs(collection(db, "Characters"));
        const ToReturn = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            ToReturn.push(doc.data());
        });
        return ToReturn;
    } catch (e) {
        console.error("Error retrieving Character: ", e);
    }
}

export async function GetDebtsFromDB() {
    try {
        const querySnapshot = await getDocs(collection(db, "Debts"));
        const ToReturn = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            ToReturn.push(doc.data());
        });
        return ToReturn;
    } catch (e) {
        console.error("Error retrieving Debts: ", e);
    }
}

export async function GetRumorsFromDB() {
    try {
        const querySnapshot = await getDocs(collection(db, "Rumors"));
        let allrumors;
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            allrumors = doc.data();
        });
        return allrumors;
    } catch (e) {
        console.error("Error retrieving Rumors: ", e);
    }
}



export async function StoreCharacter(characterToSave) {
    try {
        const result = await setDoc(doc(db, "Characters", characterToSave.id), characterToSave);
        return true;
    } catch (e) {
        console.error("Error storing character: ", e);
        return false;
    }
}

export async function StoreFaction(FactionToSave) {
    try {
        const result = await setDoc(doc(db, "Factions", FactionToSave.id), FactionToSave);
        return true;
    } catch (e) {
        console.error("Error storing faction: ", e);
        return false;
    }
}

export async function StoreDebt(Debt) {
    try {
        const result = await setDoc(doc(db, "Debts", Debt.id), Debt);
        return true;
    } catch (e) {
        console.error("Error storing debt: ", e);
        return false;
    }
}

export async function DeleteDebt(Debt) {
    try {
        const result = await deleteDoc(doc(db, "Debts", Debt.id));
        return true;
    } catch (e) {
        console.error("Error storing debt: ", e);
        return false;
    }
}

export async function StoreRumors(Rumors) {
    try {
        const result = await setDoc(doc(db, "Rumors", "allRumors"), Rumors);
        return true;
    } catch (e) {
        console.error("Error storing all Rumors: ", e);
        return false;
    }
}




