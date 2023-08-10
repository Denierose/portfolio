import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Particle from '../../components/Particle';
import SocialLinks from '../../components/SocialLinks';

const Hero = ()=>{
    return(
        <Container className='hero d-flex flex-column justify-content-center align-items-center text-center rounded'>
            <Particle/>
            <div className='position-absolute'>
            <h1 className='display-4 fw-bold'>
                Denierose Monsanto
                </h1>
                <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
                <p>A 20 year's old BSIT Student studying in PHINMA University of Pangasinan</p>  
                <div className='d-flex align-items-center justify-content-center gap-3 text-dark'>
                    <Link to='/work'>
                        <button className='primary-btn'>View Work</button>
                        </Link>
                    <SocialLinks />
                </div>
            </div>
       </Container>
    )
}

export default Hero;