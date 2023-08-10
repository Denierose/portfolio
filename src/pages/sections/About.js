import {  Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";


const About = ()=> {
    return(
        <Container className='d-flex justify-content-center align-items-center text-center'>
        <Container className='pt-5 mt-5'>
        <div className='w-100 d-flex flex-column justify-content-center '>
          <h1 className='display-1 fw-bold'>About Me</h1>
          <p className='about'>Hello I'm Denierose Monsanto, I am a go-getter who is committed and tolerant. I communicate well
            with others and am adaptable to change. An individual should, in my opinion, constantly try
            to advance their professional abilities.
          </p>
          <div className='d-flex align-items-center justify-content-center'>
            <h3 className='fw-bold m-2'>Tech Stack:</h3>
            <div className='display-6'>
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
              <FaReact />
            </div>
          </div>
          </div>
      </Container>
      </Container>
   )
}
export default About;