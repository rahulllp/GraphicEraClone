import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink,useNavigate} from 'react-router-dom'
import Logo from '../img/logo.png'
import Background from '../img/aboutbackground.jpeg'
const About = () => {
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
         <img 
      src={Background} className="w-full h-[90%] object-cover absolute top-0 left-0"/>
       <div className="flex flex-col items-center justify-between bg-contain w-full h-[110%] z-100 backdrop-blur-none p-4 px-4 py-[27%] gap-6">
      </div>
      
      <div className="absolute flex w-[100%] h-[100%] top-0 flex-col text-white">
      {/* navbar */}
      <header className="fixed z-10 w-screen bg-cardOverlay px-8 py-1">
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
    <div  className="hidden md:flex w-full h-full items-center z-10 justify-center text-white gap-10">
     <p className="text-7xl font-semibold mr-[65%] z-10 mt-[-29%] ">
      ABOUT US
      </p>
      </div>
      <div className="mt-[-10%]">
        <p className="text-4xl font-semibold p-5 m-5">
        At the forefront of Quality Higher Education and Academic Excellence Graphic Era Deemed to be University
        </p>
      </div>
      <div>
        <p className="p-5 m-5 text-lg font-medium">Graphic Era Deemed to be University is the culmination of the hard work of its visionary founder, Prof. (Dr.) Kamal Ghanshala, who had the dream to change the destiny of thousands of youths through quality and holistic education. In 1993, he embarked on the mission to transform the higher education landscape of the Doon Valley with twenty-nine thousand rupees in his pocket and loads of determination and tenacity in his heart, and started off with Graphic Era Computer Centre, developing software and delivering trainings on Computer Graphics. His vision gained concrete shape in 1997 in the form of Graphic Era Institute of Technology (GEIT).

Nestled in the central part of the scenic and modern city of Dehradun, bordered by Rajaji National Park and the Clement Town Cantonment on either sides, the University Campus is a sight to behold. The serene and picturesque campus with the energy of the students studying and staying at the campus is almost infectious and provides an unforgettable experience for all the students who’re a part of the Graphic Era fraternity. The Campus is well equipped with facilities of all kinds, including but not limited to Sports, World Class Accommodation for its students, Gymnasiums, Recreational Areas, State of the Art Libraries and Computer Centres, High Speed Wi-Fi Enabled Campus, State of the Art Lecture Theatres equipped with Smart Boards, Auditoriums (Both Indoor and Outdoor), Multiple Cafeterias and Food Trucks and so much more.

In 2008 after successfully establishing itself as a Premier Higher Educational Institution with an outstanding placement record, the Institute was accorded the status of Deemed University under Section 3 of the UGC Act, 1956 vide Notification F.9-48/2007-U.3 (A) dated 14 August 2008 and approved by the Ministry of Human Resource Development, Government of India.

 In August 2022, GEU was granted the coveted ‘A+’ grade by the National Assessment and Accreditation Council (NAAC), after the University had enjoyed NAAC ‘A’ grade since 2015. In Oct 2022, it cemented its position as a University of National & International repute by securing a position in the Rank Band 601-800 worldwide in the University category & Rank Band 301-400 in the Engineering category of Times Higher Education World Ranking 2023.

In Dec 2022, GEU became the only university in the region to have 7 NBA accredited programs namely Computer Science & Engineering, Electrical Engineering, Civil Engineering, Electronics & Communication Engineering, Mechanical Engineering, Biotechnology, and Master of Business Administration. The NBA Accreditations bear testimony to the High Standards of Academics at the University and allow students from the University to study in Top Universities across the globe without any hindrances.

 In 2022, GEU also launched Online Degree Programs at both UG and PG Levels and achieved the distinction of being the first university in Uttarakhand to offer UGC/AICTE entitled Online education. The University boasts of a state of the art online content delivery and assessment system to facilitate seamless online learning in these courses, benefitting professionals from the corporate world.

In June 2023, Graphic Era (Deemed to be University) was conferred All-India Rank 62 in the Engineering Category, All India Rank 65 in Management Category, All India Rank 55 in the University Category, and All India Rank 89 in the Overall Category in the MHRD’s National Institutional Ranking Framework (NIRF) and retained its position consecutively for the fourth year amongst top 100 Universities of India. 

Graphic Era offers more than 85 undergraduates, postgraduate, and doctoral programs with more than 50,000 Alumni and a huge number of High Quality Faculty from the leading institutions and Universities of the world.

Graphic Era university regards industry-academia partnership as an integral part of teaching methodology and curriculum. It has acquired transnational dimensions through student exchange and knowledge-sharing programs with many foreign universities and has been acclaimed and honoured at International forums for its brilliance in upholding the highest standards of education. The University has ensured inclusion of cutting-edge tech in its curriculum for all engineering programs by getting into partnerships with OEMs from various domains, such as Tata Technologies, TCS, Adobe, Bentley Software, Sapient and many more, resulting in the creation of next age engineering professionals.

Graphic Era University had realised the potential in the student world and embarked on the mission of facilitating entrepreneurship at a very early stage, and as the Start-Up Sector in India has risen to new heights under the vision of the Government of India, the University already had a robust structure in place to further provide Entrepreneurial Opportunities to its students. A DST Sponsored Technology Business Incubator has been operational in Graphic Era University for years and has successfully churned out Ventures of the highest grade that have also been appreciated by the Hon’ble Prime Minister of India, Shri Narendra Modi.

At present, Graphic Era Deemed to be University has thousands of full time students studying on its campus, pursuing education in different disciplines, ranging from engineering, science, business, management, commerce, hospitality to humanities and social sciences. More than 50,000 Alumni of Graphic Era University can be encountered worldwide in marquee brands like Apple, Google, Microsoft, HSBC, to name a few, and in the service of the nation in all wings of the Armed Forces. </p>
      </div>
      <div>
        <p className="p-5 m-5 text-lg font-semibold text-green-600">
        GEU stands tall as a leading university in India, ranked amongst the top 55 Universities of the country and as an abode of learning and excellence, setting new benchmarks in all parameters of assessment like teaching, learning, research, graduation outcome, outreach, industrial presence and more, for Indian Institutions of higher education.
        </p>
      </div>
      <div className="mt-[5%]">
      <div>
        <p className="text-2xl font-medium flex flex-col items-center justify-between text-slate-500">GRAPHIC ERA</p>
        <h1 className="text-5xl font-bold flex flex-col items-center justify-between mt-[2%] text-green-500">The History and the Legacy</h1>
        <h1 className="text-5xl font-bold flex flex-col items-center justify-between mt-[2%] text-green-500">Celebrating 30 Years of Brand Graphic Era</h1>
        <p className="p-[4%] m-[0.8%] ml-[20%] mr-[18%] flex flex-col items-center justify-center ">The Graphic Era Educational Society (GEES) is a non-profit organization established in 1993 with the goal of providing world-class education and generating resources for quality education. It recognizes the right of every individual to lead a dignified life in a just and equitable manner. GEES began its operations as Graphic Era Institute of Technology, the first self-financed institute in North India offering engineering courses. Its founder, Prof. Kamal Ghanshala, dreamed of providing holistic professional education to thousands of youth, and his vision became a reality with Graphic Era Group Of Institutions.</p>
       </div>
      </div>
      <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-10">
      <div className="bg-slate-600 w-full h-full p-8"> 
       <p className="text-4xl font-bold text-white">OUR MISSION</p>
       <p className="mt-[10%] flex flex-col items-center justify-center text-white font-md text-lg">
       The mission of the university is to promote learning in true spirit and offering 
        knowledge and skills in order to succeed as professionals. The university aims to 
        distinguish itself as a diverse, socially responsible learning community with a high 
        quality scholarship and academic rigor.
        </p>
      </div>
       <div className="bg-slate-800 w-full h-full p-8"> 
       <p className="text-4xl font-bold text-white">OUR VISION </p>
       <p className="mt-[10%] flex flex-col items-center justify-center text-white font-md text-lg"> 
       We visualize Graphic Era (Deemed to be University) as an internationally recognized, 
       enquiry driven, ethically engaged diverse community, whose members work collaboratively 
       for positive transformation in the world, through leadership in teaching, research and 
       social action.
       </p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About