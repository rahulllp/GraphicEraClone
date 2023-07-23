import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink,useNavigate} from 'react-router-dom'
import Logo from '../img/logo.png'
import videoBg from '../img/background.mp4'

const Gallery = () => {
  const navigate= useNavigate()
  const Aboutpage=()=>{
   navigate('/about')
  }
  const Placementpage=()=>{
   navigate('/placement')
  }
  const Alumnipage=()=>{
   navigate('/alumni')
  }
  const Gallerypage=()=>{
   navigate('/gallery')
  }
  const ContactUspage=()=>{
   navigate('/contact')
  }
  const signinpage=()=>{
    navigate('/*')
  }
  return (
    <div>
      <div>
       <div>
         <video 
      src={videoBg} autoPlay loop muted className="w-full h-screen object-cover absolute top-[12%] left-0"/>
       <div className="flex flex-col items-center justify-between bg-contain backdrop-brightness-50 w-full h-[110%] z-100 backdrop-blur-none p-4 px-4 py-[27%] gap-6">
      </div>
      <div className="absolute flex w-[100%] h-[100%] top-0 flex-col text-white">
      {/* navbar */}
      <header className="fixed z-10 w-screen bg-cardOverlay backdrop-brightness-50 px-8 py-1">
        {/*desktop and tablet*/}
        <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/mainpage'} className="flex items-center gap-3">
        <img src={Logo} className="w-80 object-cover" alt="logo"/>
        </Link>
        <ul className="flex items-center gap-8">
            <li onClick={Aboutpage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">About</li>
            <li onClick={Placementpage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Placements</li>
            <li onClick={Gallerypage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Gallery</li>
            <li onClick={ContactUspage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Contact Us</li>
            <li onClick={signinpage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Logout</li>
        </ul>
        <div className="relative flex items-center justify-center">
        </div>
        </div>
    </header>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Gallery