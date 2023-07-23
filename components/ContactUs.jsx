import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink,useNavigate} from 'react-router-dom'
import Logo from '../img/logo.png'
import bgCon from '../img/contactbg.webp'

const ContactUs = () => {
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
         <img 
      src={bgCon} className="w-full h-[90%] object-cover absolute top-0 left-0"/>
       <div className="flex flex-col items-center justify-between bg-contain backdrop-brightness-50 w-full h-[90%] z-100 backdrop-blur-none gap-6">
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
    <div  className="hidden md:flex mt-[-19%] w-full h-full items-center justify-center text-white gap-10">
     <p className="text-7xl font-semibold z-10 ml-[64%] mt-[56%] ">
      CONTACT US
      </p>
      </div>
    </div>
    </div>
    <div className="bg-textColor p-10 m-10">
    <div className="flex flex-col  items-center justify-between bg-cardOverlay 
      w-[80%] md:w-[35%] h-[89%]  ml-[32.5%] z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
       {/*logo */}
      <img src={Logo} className="flex flex-center justify-between w-full gap-4 m-2 p-2"/>
       {/*welcome text*/}
       
       <p className=" text-textColor -mt-6 font-bold text-3xl">ENQUIRY FORM </p>
         {/*input section*/}
         <div className="w-full flex flex-col justify-center gap-6 px-4 md:px-12 py-4">
          <input type="text" autoComplete='none' placeholder="Name Here"
           className="rounded-md p-2 text-md text-textColor font-semibold"
            />
          <div> </div>
          <input type="number" autoComplete='none' placeholder="Phone Number Here" 
          className="rounded-md p-2 text-md text-textColor font-semibold"  
          />
           <button className=" flex flex-col items-center justify-center rounded-xl p-1
         gap-1 text-md text-white font-bold ml-[11%] cursor-pointer bg-red-500
          mt-5 w-[80%]" >Submit</button>
       </div>
       <p className="flex flex-col items-center justify-center text-lg font-semibold text-red">Enter the required details and press 'submit' to submit your entries our team will contact you within 24 hours </p>
       <p className="flex flex-col items-center justify-center text-lg font-medium ">
       You can also call us on our Toll Free Numbers at 1800 890 6027, 1800 270 1280 available from 8 AM to 6 PM on all days (Including Sundays and public holidays)
      Connect to us via WhatsApp on 7617770113
      For more, email us at admissions@geu.ac.in or enquiry@geu.ac.in
       </p>
       </div>

    </div>
    </div>
  )
}

export default ContactUs