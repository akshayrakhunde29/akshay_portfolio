import React from "react"
import { Instagram_Link } from "./config/appConfig";
import { Facebook_Link } from "./config/appConfig";
import { Twitter_Link } from "./config/appConfig";
import { Telegram_Link } from "./config/appConfig";
import { whatsapp_Link } from "./config/appConfig";
import { Github_Link } from "./config/appConfig";
import { Link } from "react-router-dom"

export default function ResumeComponent() {
    return (
        <div id="resume" className="resume_wrapper m-0 p-0" style={{ fontSize: '1em' }}>
            <div className="d-flex justify-content-center pt-5 pb-5">
                <div className="w-50 border border-dark bg-light">
                    <div className="text-end mt-5 me-4 border-bottom ms-4">
                        <h2>AKSHAY RAKHUNDE</h2>
                        <div className="mb-2">Web Developer</div>
                    </div>
                    <div className="mt-4 ms-4 me-4">
                        <h5 style={{ backgroundColor: 'lightblue' }}>CAREER OBJECTIVE</h5>
                        <p>Looking for opportunities to incorporate my skills and training to help the company grow. I am looking forward to roles that will help me realise my potential by exploring the various aspects of this field.</p>
                    </div>
                    <div className="ms-4 me-4" style={{ lineHeight: '1em' }}>
                        <h5 style={{ backgroundColor: 'lightblue' }}>EDUCATIONAL QUALIFICATIONS</h5>
                        <dl>
                            <dt className='mb-2'>
                                <span className="bi bi-mortarboard-fill me-2" style={{ fontSize: '1em' }}></span>
                                Sardar Patel College Chandrapur
                            </dt>
                            <dd className='ms-4'> University - Gondwana University Gadchiroli</dd>
                            <dd className='ms-4'> Course - Bachelor of Science in Information Technology B.sc (I.T)</dd>
                            <dd className='ms-4'> Year of Passing - 2021</dd>
                        </dl>
                        <dl>
                            <dt className='mb-2'>
                                <span className="bi bi-book-half me-2" style={{ fontSize: '1em' }}></span>
                                Anand Niketan College Warora
                            </dt>
                            <dd className='ms-4'> HSC | Maharashtra State Board</dd>
                            <dd className='ms-4'> Year of Passing - 2018</dd>
                        </dl>
                        <dl>
                            <dt className='mb-2'>
                                <span className="bi bi-book-half me-2" style={{ fontSize: '1em' }}></span>
                                Hiralal Loya Vidyalaya Warora
                            </dt>
                            <dd className='ms-4'> HSC | Maharashtra State Board</dd>
                            <dd className='ms-4'> Year of Passing - 2016</dd>
                        </dl>
                    </div>
                    <div className="ms-4 me-4">
                        <h5 style={{ backgroundColor: 'lightblue' }}>SOFTWARE SKILLS</h5>
                        <ul>
                            <li>Full Stack UI Web Development Course Completed <br /> Form Naresh I.T Hyderabad</li>
                            <li> Editors : Sublime Text & Visual Studio Code (Microsoft's)</li>
                            <li>Repository : GitHub</li>
                        </ul>
                    </div>
                    <div className="ms-4 me-4">
                        <h5 style={{ backgroundColor: 'lightblue' }}>PROJECT DETAILS</h5>
                        <dl>
                            <dt>Project Name - Bigdeal Online Shopping</dt>
                            <dd>The online shopping is a website that allows the users to shop online without going to the shops to buy them. This is help in saving the Energy, Time, Fuel needed to do the shopping by going to the shop.</dd>
                            <dt>Resume</dt>
                            <dd>I have created my resume by using HTML CSS and Bootstrap.</dd>
                        </dl>
                    </div>
                    <div className='ms-4 me-4' style={{ lineHeight: '1em' }}>
                        <h5 style={{ backgroundColor: 'lightblue' }}>KEY SKILLS</h5>
                        <ol className='list-unstyled d-flex justify-content-between ms-5 me-5'>
                            <li>React.js</li>
                            <li>HTML4 & 5</li>
                            <li>CSS2 & 3</li>
                        </ol>
                        <ol className='list-unstyled d-flex justify-content-between ms-5 me-5'>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                        </ol>
                        <ol className='list-unstyled d-flex justify-content-between ms-5 me-5'>
                            <li>Node JS</li>
                            <li>Express js</li>
                            <li>MongoDB</li>
                        </ol>
                        <div className='ms-5'>MS-Office (Word, Excel, PowerPoint)</div>
                    </div>
                    <div className='ms-4 me-4 mt-3'>
                        <h5 style={{ backgroundColor: 'lightblue' }}>REFERENCE</h5>
                        <p className='ms-5'>Referred by Naresh I Technology Hyderabad</p>
                    </div>
                    <ol className="list-unstyled ms-4 mt-3" style={{ marginTop: '-5%' }}>
                        <li>Place: Hyderabad <span style={{ marginLeft: '43%' }}>Akshay Arvind Rakhunde</span></li>
                        <li>Date: <span style={{ marginLeft: '65%' }}>Signature</span></li>
                    </ol>
                </div>
                <div className="w-25 bg-black text-white">
                    <div>
                        <div className="d-flex justify-content-center mt-5">
                            <img src="backgroundImg/myPic.jpeg" width='70%' style={{ borderRadius: '50%' }} alt="This is Profile Photo" />
                        </div>
                        <ol className="list-unstyled ms-4 mt-4">
                            <li>
                                <span className="bi bi-whatsapp"></span>
                                <a href="tel:+8329093880" className="ms-3 text-white text-decoration-none">8329093880</a>
                            </li>
                            <li className="mt-1">
                                <span className="bi bi-telephone-fill"></span>
                                <a href="tel:+9096813971" className="ms-3 text-white text-decoration-none">9096813971</a>
                            </li>
                            <li className="mt-1">
                                <span className="bi bi-envelope-fill"></span>
                                <a className="ms-3 text-white text-decoration-none" href="mailto:rakhundeakshay29@gmail.com" target="_blank">rakhundeakshay29@gmail.com</a>
                            </li>
                            <li className="mt-1">
                                <span className="bi bi-geo-alt-fill"></span>
                                <a href="#" className="ms-3 text-white text-decoration-none">Hi-Tech City Hyderabad 500038, Telangana.</a>
                            </li>
                        </ol>
                        <ol className="list-unstyled ms-4">
                            <li className="mt-2">Father Name :<span className="ms-3"> Arvind Rakhunde</span></li>
                            <li className="mt-2">Date of Birth :<span className="ms-3"> 29/01/2000</span></li>
                            <li className="mt-2">Gender :<span className="ms-5 ps-1"> Male</span></li>
                            <li className="mt-2">Nationality :<span className="ms-4"> Indian</span></li>
                            <li className="mt-2">Permanent Address: At-Mangli Tah-Zari (Jamni) Dist-Yavatmal 445305 Maharashtra, India</li>
                            <li className="mt-2">Religion: <span className="ms-5 ps-1">Hindu</span></li>
                            <li className="mt-2">Marrital Status: <span className="ms-1">Unmarried</span></li>
                            <li className="mt-2">Language Known: <span >Marathi Hindi English</span></li>
                            <li className="mt-2">Hobbirs: <span>Play Cricket Watch Movies</span></li>
                            <li className="mt-2">Reference: Naresh I.T Hyderabad</li>
                        </ol>
                        <ol style={{ fontSize: '20px' }} className="pt-4 ps-2 list-unstyled align-items-center gap-3 fs-4 d-flex justify-content-center text-center">
                            <li><Link to={Instagram_Link} target="_blank"><span className='bi bi-instagram d-block'></span></Link></li>
                            <li><Link to={Facebook_Link} target="_blank"><span className='bi bi-facebook d-block'></span></Link></li>
                            <li><Link to={Twitter_Link} target="_blank"><span className='bi bi-twitter d-block'></span></Link></li>
                            <li><Link to={Telegram_Link} target="_blank"><span className='bi bi-telegram d-block'></span></Link></li>
                            <li><Link to={whatsapp_Link} target="_blank"><span className='bi bi-whatsapp d-block'></span></Link></li>
                            <li><Link to={Instagram_Link} target="_blank"><span className='bi bi-linkedin d-block'></span></Link></li>
                            <li><Link to={Github_Link} target="_blank"><span className='bi bi-github d-block'></span></Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}