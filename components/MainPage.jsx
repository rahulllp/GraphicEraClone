import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {NavLink,useNavigate} from 'react-router-dom'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import {motion} from 'framer-motion'
import videoBg from '../img/background.mp4'
import About from './About'
import Director from '../img/image-24.jpeg'
import Chancellor from '../img/fa1.webp'
import ViceChancellor from '../img/fa2.jpg'
import DirectorGeneral from '../img/fa3.webp'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import p1 from '../img/p1.jpeg'
import p2 from '../img/p2.jpeg'
import p3 from '../img/p3.jpeg'
import p4 from '../img/p4.jpeg'
import p5 from '../img/p5.jpeg'
import p6 from '../img/p6.jpeg'
import p7 from '../img/p7.jpeg'
import p8 from '../img/p8.jpeg'
import p9 from '../img/p9.jpeg'
import p10 from '../img/p10.jpeg'
import p11 from '../img/p11.jpeg'
import p12 from '../img/p12.jpeg'
import p13 from '../img/p13.jpeg'
import p14 from '../img/p14.jpeg'
import images from '../images'
const MainPage = () => {
  
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
 const slides =[
  {
    url:'https://geu.ac.in/wp-content/uploads/2023/03/1_Mobile-1.jpg'
  },
  {
    url :'https://geu.ac.in/wp-content/uploads/2023/03/7_Mobile.jpg'
  },
  {
    url :'https://geu.ac.in/wp-content/uploads/2023/03/8_Mobile.jpg'
  },
  {
    url :'https://geu.ac.in/wp-content/uploads/2023/03/3_Mobile-2.jpg'
  },
  {
    url:'https://geu.ac.in/wp-content/uploads/2023/03/3_Mobile-1.jpg'
  },
  {
    url:'https://geu.ac.in/wp-content/uploads/2023/03/6_Mobile.jpg'
  },
  {
    url:'https://geu.ac.in/wp-content/uploads/2023/03/10_Mobile.jpg'
  },
  {
    url:'https://geu.ac.in/wp-content/uploads/2023/03/Mobile-4.jpg'
  },
 ]
 const [currentIndex,setCurrentIndex]=useState(0)
 const prevSlide=()=>{
  const isFirstSlide=currentIndex===0
  const newIndex= isFirstSlide? slides.length-1:currentIndex-1
  setCurrentIndex(newIndex)
 }
 const nextSlide=()=>{
  const isLastSlide=currentIndex===slides.length-1
  const newIndex=isLastSlide?0:currentIndex+1
  setCurrentIndex(newIndex)
 }
  return (
    
  <div>
    <video 
      src={videoBg} autoPlay loop muted className="w-screen h-screen object-cover absolute top-[12%] left-0"/>
       <div className="flex flex-col items-center justify-between bg-contain backdrop-brightness-50 w-screen h-[110%] z-100 backdrop-blur-none p-4 px-4 py-[27%] gap-6">
      </div>
      <div className="absolute flex w-screen h-[100%] top-0 flex-col text-white">
      {/* navbar */}
      <header className="fixed z-10 w-screen bg-cardOverlay backdrop-brightness-50 px-8 py-1">
        {/*desktop and tablet*/}
        <div className="hidden md:flex w-screen h-full items-center justify-between">
        <Link to={'/mainpage'} className="flex items-center gap-3">
        <img src={Logo} className="w-80 object-cover" alt="logo"/>
        </Link>
        <ul className="flex items-center gap-8">
            <li onClick={Aboutpage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">About</li>
            <li onClick={Placementpage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Placements</li>
            <li onClick={Gallerypage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Gallery</li>
            <li onClick={ContactUspage} className="text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Contact Us</li>
            <li onClick={signinpage} className=" text-base cursor-pointer text-black font-extrabold hover:text-red-700 duration-100 transition-all">Logout</li>
        </ul>
        <div className="relative flex items-center justify-center">
        </div>
        </div>
    </header>
     <div  className="hidden md:flex w-full h-full items-center justify-center text-white gap-10">
     <p>
    
    <h1 className="p-1 font-bold text-white text-9xl">GRAPHIC ERA</h1>
    <h3 className="text-4xl text-white ml-[10%] p-1 font-semibold">TRANSFORMING DREAMS INTO REALITY</h3>
    <h2 className=" text-4xl text-white ml-[22%] p-1 font-bold">WE'RE GLAD, YOU ASKED!</h2>
    <button onClick={ContactUspage} className="bg-green-700 font-semibold p-3 hover:bg-red-500 cursor-pointer rounded-full flex flex-col items-center justify-center ml-[40%] mt-10 w-[20%] ">Apply Now</button>
    </p>
     </div>
      </div>
      {/*section-2*/}
      <div>
      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 p-10 gap-20 m-20 space-x-7 tracking-wide">
        <div>
        <p className="text-4xl flex flex-col subpixel-antialiased">
        At the forefront of Quality Higher Education and Academic Excellence 
        <span className="text-5xl font-bold flex flex-col text-red-600 mt-[10%]">Graphic Era Hill University</span>
        </p>
        <button onClick={Aboutpage} className="text-xl hover:bg-red-600 bg-green-600 rounded-full p-2 mt-[10%] text-white cursor-pointer font-semibold flex flex-col" >Learn More</button>
        </div>
        <div>
        <p className="text-lg font-medium flex flex-col items-center justify-between">Graphic Era Hill University was in existence as Graphic Era Institute 
          of Technology since 1997, with the goal of providing world class-education with 
          a clear focus on cutting-edge technologies, professional development of students, 
          critical thinking and quality research. The University has achieved numerous 
          milestones in its glorious past on the basis of its academic rigor, consistently
           Top Performing Students and Alumni and an immensely strong and qualified teaching 
           fraternity.</p>
        </div>
        <div>
        <p className="text-lg font-medium flex flex-col items-center justify-between">
        The Universityhas featured in the Top 100 Universities of India, in the coveted
        National Institutional Ranking Framework established by the Government of India, for 
        the past four years consecutively, with the rankings growing each year across varied 
        domains. <br/><br/>Graphic Era Hill University is based in the magnificent and serene 
        city of Haldwani, nestled in the valley surrounded by Rajaji National Park on one end 
        and Clement Town Cantonment on the other. The University prides itself in its 
        University regime that warrants the holistic development of all the students part of 
        the Graphic Era Fraternity.</p>
        </div>
      </div>
      </div>
      <div>
        <p className="text-2xl font-medium flex flex-col items-center justify-between text-slate-500">GRAPHIC ERA'S</p>
        <h1 className="text-5xl font-bold flex flex-col items-center justify-between mt-[2%] text-green-500">30 Years of Academic Excellence</h1>
        <p className="p-[4%] m-[0.8%] ml-[20%] mr-[18%] flex flex-col items-center justify-center ">The Graphic Era Educational Society (GEES) is a non-profit organization established in 
        1993 with the goal of providing world-class education and generating resources for quality
        education. It recognizes the right of every individual to lead a dignified life in a 
        just and equitable manner. GEES began its operations as Graphic Era Institute of 
        Technology, the first self-financed institute in North India offering engineering 
        courses. Its founder, Prof. Kamal Ghanshala, dreamed of providing holistic professional
        education to thousands of youth, and his vision became a reality with Graphic Era Group
        Of Institutions.</p>
        <button onClick={Aboutpage} className="ml-[45%] mb-[4%] hover:bg-red-600 text-xl bg-green-600 rounded-full p-2 mt-[0.4%] text-white cursor-pointer font-semibold flex flex-col" >Learn More</button>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-10">
       <div>
        <img src={Director} alt="image"/>
       </div>
       <div className="bg-slate-800 w-full h-full p-8"> 
       <p className="text-4xl font-bold text-white">Prof. (Dr.) Kamal Ghanshala</p>
       <p className="text-lg font-semibold text-green-600 mt-[2%]">President, Graphic Era Group of Institutions</p>
       <p className="mt-[10%] flex flex-col items-center justify-center text-white font-semibold text-lg">The Founder-President of the prestigious Graphic Era Group of Institutions is a 
        renowned academician and edupreneur. Prof. Ghanshala still continues to take classes 
        of every student of Computer Science that passesout of Graphic Era Group of Institutions, 
        ensuring a high level of competence in the core subjects of Data Structures and Algorithms. 
        His contribution in the field of research can be felt globally in USA, Canada, London, Paris, 
        Germany, Denmark, Johannesburg, Turkey, Croatia and Thailand. Amongst many laurels, he has 
        been conferred the ‘Uttarakhand Ratna, 2007’ for outstanding contribution to quality Technical 
        and Higher education and the ‘Visionary Edupreneur of India Award, 2017’ by Hon’ble Former 
        President of India, Mr. Pranab Mukherjee.</p>
      </div>
      </div>
     <div className="flex mt-[5%]">
      
     <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={Chancellor} alt="Woman's Face" />
    <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
    <p class="text-lg text-black font-semibold">
    Prof. (Dr.) S.R. Khanduja
    </p>
    <p class="text-slate-500 font-medium">
    Chancellor
    </p>
    </div>
     </div>
    </div>

    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={ViceChancellor} alt="Woman's Face" />
    <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
    <p class="text-lg text-black font-semibold">
    Prof. (Dr.) Narpinder Singh
    </p>
    <p class="text-slate-500 font-medium">
        Vice Chancellor
    </p>
    </div>
     </div>
    </div>

    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={DirectorGeneral} alt="Woman's Face" />
    <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
    <p class="text-lg text-black font-semibold">
    Prof.(Dr.) Rakesh Kumar Sharma
    </p>
    <p class="text-slate-500 font-medium">
    Director General
    </p>
    </div>
    </div>
    </div>

     </div>
  <div className="mt-[5%]">
  <div className="flex flex-col items-center justify-center p-5">
  <p className="text-7xl font-semibold text-slate-500">Placements-2023</p>
 
 </div>
  </div>
  {/*carousel framer motion */}
      <div className="max-w-[1400px] background:cover h-[780px] w-screen m-auto py-5 px-0 relative group">
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-[1400px] h-[780px] 
      rounded-2xl bg-center bg-cover duration-500" >
      </div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
      <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
      <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className="flex flex-col items-center justify-center p-5 m-5">
     </div>
      </div>
  </div>
  )
}

export default MainPage