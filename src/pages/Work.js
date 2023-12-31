import React from 'react';
import { Container } from 'react-bootstrap';
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity:0, y:15}}
          animate={{ opacity:1, y:0}}
          transition={{ ease: "easeOut", duration: 2}}
          className="fullheight d-flex flex-column justify-content-center">
          <Container>
            <h2 className='display-1 fw-bold'>
              My Work
            </h2>
            <p>Here are some of the projects I've worked on:</p>
            <hr />
            <Container className=' my-5  rounded'>
              <Projects />
            </Container>
          </Container>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Work;
