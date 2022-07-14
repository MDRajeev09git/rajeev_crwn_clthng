import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider
    ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDEirlZrECltD3FyDFmcoz8J44MrdcOo14",
    authDomain: "crown-clothinggg-db.firebaseapp.com",
    projectId: "crown-clothinggg-db",
    storageBucket: "crown-clothinggg-db.appspot.com",
    messagingSenderId: "185833700201",
    appId: "1:185833700201:web:cb2cf293f56349af861bf8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth =getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth,googleProvider);

 export const db = getFirestore();

 export const createUserDocumentFromAuth = async(userAuth,additionalInformation={displayName:'mike'}
 ) =>{
 if(!userAuth)return;

const userDocRef = doc (db,'users',userAuth.uid);

const userSnapshot = await getDoc(userDocRef);


if(!userSnapshot.exists()){
    const{displayName,email} = userAuth;
    const createdAt =new Date();

    try{
        await setDoc(userDocRef,{
            displayName,email,createdAt,...additionalInformation
        });
    } catch (error){
        console.log('error creating the user',error.message);
    }
}
return userDocRef;
 };

 export const createAuthUserWithEmailAndPassword= async(email,password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
 };

 export const signInAuthUserWithEmailAndPassword= async(email,password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
 };

 export const signOutUser =async () =>await signOut(auth);
 
 export const onAuthStateChangedListener =(callback)=>
  onAuthStateChanged(auth,callback);