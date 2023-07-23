import React from 'react'
import {useState} from 'react'
import Background from '../img/backgroundlogin.jpeg'
import Logo from '../img/logo.png'
import {FcGoogle} from 'react-icons/fc'
import {motion} from 'framer-motion'
import LoginContainer from './LoginContainer'
import {NavLink,useNavigate} from 'react-router-dom'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase.config';

const Signin = ({inputState ,inputStateFunc,isSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const onLogin = (e) => {
  
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/mainpage")
        
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}
  const navigate = useNavigate()
  
  function handleClick()
  {
    navigate("/MainPage")
  }

  const [changeState2,setChangeState2]=useState(false)
  return (
   <div>
    {changeState2===false?
   <div className="w-screen h-screen relative overflow:hidden flex">
   {/*background image*/}
   <img 
   src={Background}
   className="w-full h-full object-cover absolute top-0 left-0"
   />
   {/*cotent box */}
   <div className="flex flex-col items-center justify-between bg-cardOverlay h-[89%] mt-10 ml-[32.5%] w-[80%] md:w-[35%] z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
    {/*logo */}
   <img src={Logo} className="flex flex-center justify-between w-full gap-4"/>
    {/*welcome text*/}
    <p className="text-4xl font-bold text-headingColor">Welcome Back</p>
    <p className="text-lg text-textColor -mt-6">Sign In with following</p>
      {/*input section*/}
     <div className="w-full flex flex-col justify-center gap-6 px-4 md:px-12 py-4">
       <input type="email" autoComplete='none' placeholder="Email Here" className="rounded-md p-2 text-md text-textColor font-semibold"  onChange={(e)=>setEmail(e.target.value)}/>
       <input type="email" autoComplete='none' placeholder="Password Here" className="rounded-md p-2 text-md text-textColor font-semibold"   onChange={(e)=>setPassword(e.target.value)}/>
     </div>
     <div>
     <p>Does'nt Have an Account  <span className="text-red-500 font-bold underline cursor-pointer" onClick={()=>{setChangeState2(true)}}> Click here</span></p> 
     <button className=" flex flex-col items-center justify-center rounded-xl p-1 gap-1 text-md text-white font-bold m-[3%] -ml-[11%] cursor-pointer bg-red-500 mt-5 w-[120%]" onClick={onLogin}>Sign In</button>
   
   </div>
    <motion.button whileTap={{scale:0.8}} className=" flex rounded-xl p-1 gap-1 text-md text-textColor font-semibold m-[5%] -ml-[-4%] cursor-pointer  bg-slate-200 w-[75%]"><FcGoogle className=" m-1 ml-[27%]"/>Sign In With Google</motion.button>
   </div>
 </div>:<LoginContainer/>  
  }
   </div>
  )
}

export default Signin


