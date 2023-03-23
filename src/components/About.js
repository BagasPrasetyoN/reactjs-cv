import React from 'react';
//countup
import CountUp from 'react-countup';
//intersectiom observe hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img*/}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>

        {/* text*/}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>Hi! I'm a Freelance Front-end Developer and Ui/Ux Designer with +1 years of experience.</h3>
            <p className='mb-6' >
            I am a fresh graduated of ITN Malang, I am a UI/UX Designer with +2 years of experience. I am 
            Familiar with research, prototyping, etc. And Familiar with reactjs, nodejs, javascript, php, c++. Proven to increase application effectiveness and design of the developed 
            application and website
            </p>

          {/* stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={1} duration={5} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/> 
                Experience
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={10} duration={5} /> :null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Project<br/> 
                Completed
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={8} duration={5} /> :null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br/> 
                Client
              </div>
            </div>

          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
               My Portofolio   
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
