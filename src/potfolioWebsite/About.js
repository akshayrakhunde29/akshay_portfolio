import ContactMe from './Contact';
import MySkillComponent from './Skills';
const About = () => {
    return (
        <main className='border border-dark m-4 text-white' id='about' >
            <div className='mb-5'>
                <h1 className='text-center p-5'>ABOUT ME</h1>
                <div className='d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col text-center'>
                            <img className='rounded-circle' src='backgroundImg/myPic.jpeg' width='350px' height='350px' alt='OwnerImage' />
                        </div>
                        <div className='col pt-5 ps-5 pe-5'>
                            <h3>Akshay Rakhunde</h3>
                            <h4>I'm a Full Stack Web Developer</h4>
                            <p>A Passionate aspiring Android Developer and am skilled in developing Android applications, shaped by Masai school’s intensive and immersive learning. Look forward to joining a company where I will be able to contribute towards individual and company growth.</p>
                            <a href='#resume'><button className='btn btn-danger p-2 mt-2'>Ckeck CV <span className='bi bi-chevron-double-right'></span></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About;