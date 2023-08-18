import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <>
      <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}
        className="fullheight">
          <div className='text-center'>
            <h2 className='display-1 fw-bold '>My Education</h2>
            <p>These are my academic qualifications:</p>
          </div>
          <hr />
          <section>
            <div class="container py-5">
              <div class="main-timeline">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity:0, y:15}}
                  animate={{ opacity:1, y:0}}
                  transition={{ delay: 1}}>
                  <div class="timeline left">
                    <div class="card">
                      <div class="card-body p-4">
                        <h3>Tobuan Elementary School</h3>
                        <h5>2012-2015</h5>
                        <p class="mb-0">Tobuan Labrador Pangasinan</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity:0, y:15}}
                    animate={{ opacity:1, y:0}}
                    transition={{ delay: 2}}>
                      <div class="timeline right">
                        <div class="card">
                          <div class="card-body p-4">
                            <h3>Tobuan Labrador Pangasinan Sual National Highschool</h3>
                            <h5>2016-2021</h5>
                            <p class="mb-0">Poblacion East Sual Pangasinan</p>
                          </div>
                        </div>
                      </div>
                </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity:0, y:15}}
                    animate={{ opacity:1, y:0}}
                    transition={{ delay: 3}}>
                    <div class="timeline left">
                      <div class="card">
                        <div class="card-body p-4">
                          <h3>PHINMA University of Pangasinan</h3>
                          <h5>2021 - current</h5>
                          <p class="mb-0">Arellano St Downtown district Dagupan Pangasinan</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default Education;
