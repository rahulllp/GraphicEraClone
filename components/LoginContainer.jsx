import React from 'react'
import {useState} from 'react'
import Background from '../img/backgroundlogin.jpeg'
import Logo from '../img/logo.png'
import {FcGoogle} from 'react-icons/fc'
import {motion} from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import {NavLink,useNavigate} from 'react-router-dom'
import Signin from './Signin'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginContainer = () => {
  const [error,setError]=useState('')
  const [changeState,setChangeState]=useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const showToast =(message)=>{
    toast.success(message,{
      position:"top-center",
      autoClose:3000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:false,
      draggable:true,
      progress:undefined,
      icon:<i className="fas fa-check-circle"></i>
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/mainpage")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(error)
          showToast(error)
          console.log(errorCode, errorMessage);
          // ..
      });
     
    }
  function handleClick()
  {
    navigate("/MainPage")
  }
  const firebaseAuth= getAuth(app)
  const provider=new GoogleAuthProvider()
  const [{user},dispatch]=useStateValue()
  const login =async()=>{
       const {user: {refreshToken,providerData}} =await signInWithPopup(firebaseAuth,provider)
       dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
        
       })
       navigate("/MainPage")
  }
  return (
   <div>
    
 {changeState === false ?
      <div className="md:w-screen md:h-screen relative overflow:hidden flex ">
      {/*background image*/}
      <img 
      src={Background}
      className="w-full h-full object-cover absolute top-0 left-0"
      />
      {/*cotent box */}
      <div className="flex flex-col items-center justify-between bg-cardOverlay 
      w-[80%] md:w-[35%] h-[89%] mt-10 ml-[32.5%] z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
       {/*logo */}
      <img src={Logo} className="flex flex-center justify-between w-full gap-4"/>
       {/*welcome text*/}
       <p className="text-4xl font-bold text-headingColor">Welcome Back</p>
       <p className="text-lg text-textColor -mt-6">Sign Up with following</p>
         {/*input section*/}
         <div className="w-full flex flex-col justify-center gap-6 px-4 md:px-12 py-4">
          <input type="email" autoComplete='none' placeholder="Email Here"
           className="rounded-md p-2 text-md text-textColor font-semibold"
           onChange={(e) => setEmail(e.target.value)}  />
          <div> </div>
          <input type="email" autoComplete='none' placeholder="Password Here" 
          className="rounded-md p-2 text-md text-textColor font-semibold"  
          onChange={(e) => setPassword(e.target.value)} />
          
       </div>
       <div>
        <p>Already Have an Account  <span className="text-red-500 font-bold underline 
        cursor-pointer" onClick={()=>setChangeState(true)}>  Sign-In here</span></p> 
        <button className=" flex flex-col items-center justify-center rounded-xl p-1
         gap-1 text-md text-white font-bold m-[3%] -ml-[11%] cursor-pointer bg-red-500
          mt-3 w-[120%]"  onClick={onSubmit} >Sign Up</button>
      
      </div>
       <motion.button whileTap={{scale:0.8}} className=" flex rounded-xl p-1 gap-1 text-md
        text-textColor font-semibold m-[0%] ml-[-1%]
         cursor-pointer  bg-slate-200 w-[70%]" onClick={login}><FcGoogle className=" m-1
          ml-[27%]"/>
       Sign In With Google</motion.button>
      </div>
    </div> : <Signin/>
    }

   </div>
    
  )
  
  }


export default LoginContainer