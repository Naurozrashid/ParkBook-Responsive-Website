import { useState, useEffect } from 'react';
import { useHistory ,useLocation } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider , onAuthStateChanged, signOut,createUserWithEmailAndPassword,updateProfile,sendEmailVerification,signInWithEmailAndPassword ,updateEmail,updatePassword,sendPasswordResetEmail} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import swal from 'sweetalert';

initializeAuthentication();

const useFirebase = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const handleFacebookSignIn = ()=>{
      signInWithPopup(auth, facebookProvider)
  .then((result) => {
    const user = result.user;
             swal("Login", "Successful", "success");
          history.push(redirect_uri);
  }) 
  .catch(error => {
        console.log(error.message);
         swal("Login", "Error", "Error");
      })
    }

    const handleNameChange = e => {
      
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePhotoChange = e => {
        setPhoto(e.target.value);
        console.log(photo)
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value);
      }
      const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          setError('');
          verifyEmail();
          setUserName();
          swal("Successfully", "Registered", "success");
          logOut();
          history.push('/login');
        })
        .catch(error => {
          setError(error.message);
          swal("Registration Unsuccessful", `${error}`, "warning");
        })
      }
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            
          })
      }

      const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
         if(!user.emailVerified){
             setError('Email is not verified');
             logOut();
             swal("Login Unsuccessful", `${error}`, "warning");
             return
         }
         
         swal("Login", "Successful", "success");
          history.push(redirect_uri);
          setError('');
        })
        .catch(error => {
          setError(error.message);
          swal("Login Unsuccessful", `${error}`, "warning");
        })
      }


    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }


    // update user profile
    const handleUserProfile = e => {
      console.log(photo);
      if(name)
      {
         updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
     
      if(photo)
      {
        console.log(photo);
         updateProfile(auth.currentUser, { photoURL: photo })
          .then(result => { 
            console.log("done");
          })
      }
      if(email)
      {
         updateEmail(auth.currentUser,  email)
          .then(result => { })
      }
      if(password)
      {
         if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
         updatePassword(user, password).then(() => {
            logOut();
         history.push('./login')
         swal("PassWord", "Changed", "success");
        
        }).catch((error) => {
       console.log(error);
  
        });
      }
     
    }
    // change password
     const handleResetPassword = () => {
       console.log('done'); 
    sendPasswordResetEmail(auth, email)
      .then(result => {
        console.log('done'); 
        swal("Successfully", "Mail sent to your email", "success");
      })
  }


    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    },[])

    return {
        user,
        loading,
        setError,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        handleFacebookSignIn,
        handleUserProfile,
        handlePhotoChange,
        handleResetPassword,
         error,
        logOut
    }
}

export default useFirebase;