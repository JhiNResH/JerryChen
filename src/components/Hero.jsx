import { motion } from 'framer-motion';

import { styles } from "../styles";
import { smartreviewhub } from "../assets";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto overflow-hidden bg-primary'>
      <div className='absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-45' />
      <div className='absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/80 to-primary' />

      <div className='pointer-events-none absolute inset-y-20 right-0 hidden w-[58%] lg:block'>
        <ComputersCanvas />
      </div>

      <div className='absolute right-6 top-[220px] hidden w-[45%] max-w-[620px] md:block lg:right-16'>
        <div className='overflow-hidden rounded-[28px] border border-white/10 bg-black-100/80 shadow-2xl backdrop-blur'>
          <div className='flex items-center gap-2 border-b border-white/10 px-5 py-3'>
            <span className='h-3 w-3 rounded-full bg-[#ff5f56]' />
            <span className='h-3 w-3 rounded-full bg-[#ffbd2e]' />
            <span className='h-3 w-3 rounded-full bg-[#27c93f]' />
            <span className='ml-3 text-sm text-secondary'>featured-project.jsx</span>
          </div>
          <img
            src={smartreviewhub}
            alt='Smart Review Hub project preview'
            className='h-[300px] w-full object-cover object-top opacity-90'
          />
          <div className='grid grid-cols-3 border-t border-white/10 text-center text-sm text-white-100'>
            <span className='border-r border-white/10 px-4 py-3'>React</span>
            <span className='border-r border-white/10 px-4 py-3'>Node</span>
            <span className='px-4 py-3'>Web3</span>
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} relative z-10 mx-auto flex min-h-screen max-w-7xl flex-row items-start gap-5 pt-[120px]`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='w-full min-w-0 max-w-3xl'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Jerry</span></h1>
          <p className={`${styles.heroSubText} mt-2 max-w-[310px] text-white-100 sm:max-w-none`}>
            I develop Frontend, Backend, <br className='sm:block hidden' /> and Smart Contracts applications!
          </p>
          <div className='mt-8 flex flex-wrap gap-3 text-sm text-white-100'>
            <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2'>Full-stack apps</span>
            <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2'>Blockchain research</span>
            <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2'>Product builds</span>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
