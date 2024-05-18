import React from "react"
import { Instagram_Link } from "./config/appConfig";
import { Facebook_Link } from "./config/appConfig";
import { Twitter_Link } from "./config/appConfig";
import { Telegram_Link } from "./config/appConfig";
import { whatsapp_Link } from "./config/appConfig";
import { Github_Link } from "./config/appConfig";
import { Link } from "react-router-dom"

export default function FooterComponent() {
    return (
        <footer id="join">
            <div className='p-4 text-white'>
                <h1 className='text-center mt-3 mb-3'>JOIN-WITH-ME</h1>
                <ol style={{ fontSize: '20px' }} className="pt-4 list-unstyled align-items-center gap-4 fs-4 d-flex justify-content-center text-center">
                    <li><Link to={Instagram_Link} target="_blank"><span className='bi bi-instagram d-block'></span></Link></li>
                    <li><Link to={Facebook_Link} target="_blank"><span className='bi bi-facebook d-block'></span></Link></li>
                    <li><Link to={Twitter_Link} target="_blank"><span className='bi bi-twitter d-block'></span></Link></li>
                    <li><Link to={Telegram_Link} target="_blank"><span className='bi bi-telegram d-block'></span></Link></li>
                    <li><Link to={whatsapp_Link} target="_blank"><span className='bi bi-whatsapp d-block'></span></Link></li>
                    <li><Link to={Instagram_Link} target="_blank"><span className='bi bi-linkedin d-block'></span></Link></li>
                    <li><Link to={Github_Link} target="_blank"><span className='bi bi-github d-block'></span></Link></li>
                </ol>
                <p className='text-center mt-4'>inspirition taken from @Youtube and @Google</p>
            </div>
        </footer>
    )
}