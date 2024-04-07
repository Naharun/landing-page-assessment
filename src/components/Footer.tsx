'use client'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <div className="min-h-screen bg-blue-950 ">
             <svg className="wave14 mt-[-598px] lg:mt-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4169E1" fill-opacity="1" d="M0,224L30,208C60,192,120,160,180,170.7C240,181,300,235,360,256C420,277,480,267,540,234.7C600,203,660,149,720,149.3C780,149,840,203,900,234.7C960,267,1020,277,1080,256C1140,235,1200,181,1260,165.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            <div className="flex justify-evenly  mt-[-790px] lg:-mt-5 pt-32">
                <div className="bg-white px-5 pt-2 rounded-md divide-y-4 divide-indigo-950 h-16 mt-12">
                    <h1>ASSESSMENT</h1>
                    <p>Learn it, do it</p>
                </div>
                <div className='text-white space-y-6'>
                    <h1>About</h1>
                    <p>We have designed our courses with the<br /> most demanding professional skills. The<br />
                        knowledge, experience, From the list<br /> below you can enroll to any online or<br />
                        offline courses at any time</p>
                    <p>More Info</p>
                </div>
                <div className='text-white space-y-6'>
                    <h1>Discover</h1>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>COURSES</p>
                    <p>SHOP</p>
                    <p>EVENTS</p>
                    <p>CONTACT</p>
                </div>
                <div className='text-white space-y-6'>
                    <h1>About</h1>
                    <p>Call-centre: (+880) 01*********</p>
                    <p>Email: assessmentuser@gmail.com</p>
                    <p>House-**, Road-*, Block-*, Taqbir, Turkiye.<br />(Next to City Park, Opposite Road of<br /> Alhamdulillah High School)</p>
                    <p>Office open daily from 9 am to 7 pm.</p>
                </div>
            </div>
            <div className="space-x-8 flex w-96 mx-auto mt-14">
                <p className="bg-white w-7 p-1 rounded-md"><FaTwitter /></p>
                <p className="bg-white w-7 p-1 rounded-md"><FaFacebookF /></p>
                <p className="bg-white w-7 p-1 rounded-md"><FaInstagram /></p>
                <p className="bg-white w-7 p-1 rounded-md"><FaTiktok /></p>
                <p className="bg-white w-7 p-1 rounded-md"><FaWhatsapp /></p>
                <p className="bg-white w-7 p-1 rounded-md"><FaYoutube /></p>
            </div>
            <h1 className="text-white mt-14 text-center">© Copyright 2024, Anonymous Tech Ltd, Designed and Developed by <span className="text-amber-500">Assessment User</span></h1>
        </div>
    )
}

export default Footer