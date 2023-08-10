import { Container } from 'react-bootstrap';
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {

  return (
    <section>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
              <Hero/>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <About />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <Container className='projects text-dark p-4 my-5  rounded'>
              <h3 className='display-1 fw-bold'>Recent Works</h3>
              <hr/>
              <Projects />
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <Contact />
            <Container className='display-5 d-flex justify-content-center my-5'>
              <FaArrowUp onClick={()=> {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                });
              }}/>
            </Container> 
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Home;
