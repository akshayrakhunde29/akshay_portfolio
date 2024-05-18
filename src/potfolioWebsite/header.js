import React from "react"
export default function HeaderComponent() {
    return (
        <>
            <div style={{ zIndex: 3 }} className='d-flex w-100 position-sticky top-0 justify-content-between align-items-center text-white px-4 pt-3 m-0 bg-dark'>
                <h3 className="d-flex align-items-center gap-2">
                    <img src="../logo.svg" width={"40px"} height={"40px"} />
                    <span>Akshay</span>
                </h3>
                <ol className='list-unstyled me-0 d-flex justify-content-center gap-4'>
                    {/* <li className="pointer"><a href="#home">HOME</a></li> */}
                    <li className="pointer"><a href="#about">ABOUT</a></li>
                    <li className="pointer"><a href="#project">PROJECTS</a></li>
                    {/* <li className="pointer"><a href="#skill">SKILL</a></li> */}
                    <li className="pointer"><a href="#contact">CONTACT</a></li>
                    {/* <li className="pointer"><a href="#join">JOIN US</a></li> */}
                    <li className="pointer"><a href="#resume">RESUME</a></li>
                </ol>
            </div>
        </>
    )
}