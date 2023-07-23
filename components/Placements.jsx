import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink,useNavigate} from 'react-router-dom'
import Logo from '../img/logo.png'
import BackgroundImage from '../img/placbag.jpg'
import Place3 from '../img/place33.jpg'
import infosis from '../img/ifosis.jpeg'
import microsoft from '../img/microsoft.jpeg' 
import oppo from '../img/oppo.jpeg'
const Placements = () => {
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
      src={BackgroundImage} className="w-full h-screen object-cover absolute top-0 left-0"/>
       <div className=" bg-contain backdrop-brightness-50 w-[99%] h-[110%] z-10 backdrop-blur-none p-4 px-4 py-[27%] gap-6">
      </div>
      <div className="absolute flex w-full h-[70%] top-0 flex-col text-white">
      {/* navbar */}
      <header className="fixed z-10 w-[100%]  bg-cardOverlay backdrop-brightness-50 px-6 py-1">
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
    <div  className="hidden md:flex w-full h-full items-center justify-center text-white gap-10">
     <p className="text-7xl font-semibold z-10 mr-[59%] mt-[54%] ">
      PLACEMENTS
      </p>
      </div>
    </div>
    </div>
    </div>
    <div>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-10">
       <div>
        <img src={Place3} alt="image"/>
       </div>
       <div className="bg-slate-800 w-full h-full p-8"> 
       <p className="text-2xl font-bold text-white mt-[2%]">
        Placements are at the core of University Education, especially in a rapidly growing country 
        like India. Graphic Era University, since its inception has been hailed all over for the 
        consistently high placement record that its students have delivered.
      </p>
       <p className="mt-[4%] flex flex-col items-center justify-center text-white font-semibold text-lg"> 
       Top Placements are a result of synchronized performing of a lot many aspects of the higher 
       education ecosystem, such as student performance and skillsets, the academic rigor instilled 
       in the course structure and content delivery, specific placement preparation for specialised 
       roles and a specialized and professional Placement Team bridging the opportunities with the 
       right candidates. Graphic Era’s Placement Ecosystem excels in all of these aspects and this is 
       the recipe for our success. The Academic Rigor and the student performance and skillsets, go 
       hand in hand and this is found in the very basic structure of the University.
      The Placement Preparation part is very well taken care of by highly trained and skilled 
      Trainers for Placement who handle students’ placement specific skillsets from Day 1 of their 
      program and get them into the right frame of mind to compete with the best of the best, year on 
      year at an International Level. The Placement Committee at Graphic Era leaves no stones unturned 
      to map the best opportunities to the right candidates, resulting in the Consistently High Placements 
      of our students across Top MNCs of the World at both Domestic and International Locations
        </p>
        <p className="text-2xl font-semibold text-green-600 mt-[2%]">
        Graphic Era has been delivering the Highest Number of Tier-1 Placements in the region,
        Year on Year, for the past many years with the maximum number of selection in Global Giants 
        like Amazon, Adobe, Microsoft and Google.
      </p>
      </div>
      </div>
    </div>
    <div className=" ml-[1%]">
  <div className="flex flex-col items-start justify-start p-5">
  <p className="text-7xl font-semibold text-slate-500">Placements-2023</p>
 </div>
  </div>
  <div className="p-2 m-2 ml-[2%]">
    <p className="text-4xl text-headingColor font-semibold underline ">
    A glimpse of what the Corporate Giants have to say about us
    </p>
  </div>
    
    {/* section-3 */}
    <div className="flex mt-[5%] mb-[10%]">
  {/*1st card */}
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 mt-[-95%]"
   src={infosis} alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
      MS. SHAAN VATS
      </p>
      <p class="text-slate-500 font-medium">
      Senior Lead: Talent Acquisition, Infosys  
      </p>
    </div>
    
     <div className="text-sm text-purple-600 font-semibold">
      We are thankful to entire management of Graphic Era for helping us to conduct our Campus Drive. 
      It was being chosen primarily because of the performances of Alumni working with us, availability 
      of the quality candidates and infrastructure to support our drive college is providing a great guidance to the students 
      were gald that students are pritorizing there future a great communications skills and developements power
      among students 
     </div>
  </div>
</div>
 {/*2nd card */}
 <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 mt-[-95%]"
   src={microsoft} alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
      MR. RAJIV ARORA
      </p>
      <p class="text-slate-500 font-medium">
      Director-DPE Microsoft-India
      </p>
    </div>
    <div className="text-sm text-purple-600 font-semibold">
      
Thanks to all of you. Had a wonderful experience here since moming. Kind of research you are driving is really amazing. Seeing the
progress of this University, I can say that if I were a student and had the choice, I would pick up Computer Science at Graphic Era
rather than Aerospace in IIT Really amazing Professors here! Very passionate, Very committed and very dedicated to bring the
students to a level which at par with the Intemational level. I can say Your faculty is well up to industry standards.
     </div>
      </div>
</div>
   {/*3rd card */}
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 mt-[-95%]" 
  src={oppo} alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
      MOHD ARIF
      </p>
      <p class="text-slate-500 font-medium">
      HR- Talent Acquisition, OPPO Mobiles, India
      </p>
    </div>
    <div className="text-sm text-purple-600 font-semibold">
      It was pleasure meeting you all and we appreciate the hospitality we had from your side. The University has good mix up of students having knowledge in different areas ranging from extracurricular activities, aptitude level exams, concepts and studies. Overall we found the students good in their studies and academically prepared for their development. Look forward for a mutually rewarding and
      long lasting association with the esteemed university.
     </div>  </div>
    </div>
    </div>
    </div>
    
  )
}

export default Placements