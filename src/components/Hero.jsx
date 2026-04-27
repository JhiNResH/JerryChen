import { motion } from 'framer-motion';

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className='relative mx-auto flex min-h-screen w-full items-center overflow-hidden bg-primary'>
      <div className='absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-35' />
      <div className='absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/90 to-primary' />
      <div className='absolute left-[-160px] top-24 h-[360px] w-[360px] rounded-full border border-[#915eff]/20' />
      <div className='absolute bottom-20 right-[-120px] h-[280px] w-[280px] rounded-full border border-[#00cea8]/20' />

      <div className={`${styles.paddingX} relative z-10 mx-auto flex w-full max-w-7xl flex-row items-start gap-5 pt-16`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-72 h-44 violet-gradient' />
        </div>
        <div className='w-full min-w-0 max-w-3xl'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Jerry</span></h1>
          <p className={`${styles.heroSubText} mt-2 max-w-[310px] text-white-100 sm:max-w-none`}>
            I develop Frontend, Backend, <br className='sm:block hidden' /> and Smart Contracts applications!
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='#work'
              className='rounded-full bg-[#915eff] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#915eff]/20'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur'
            >
              Contact Me
            </a>
          </div>

          <div className='mt-10 hidden max-w-2xl grid-cols-3 gap-4 sm:grid'>
            {[
              ['Full-stack', 'React, Node, MongoDB'],
              ['Blockchain', 'Solidity, Rust, DeFi'],
              ['Product', 'Research to launch'],
            ].map(([title, detail]) => (
              <div key={title} className='rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur'>
                <p className='text-base font-bold text-white'>{title}</p>
                <p className='mt-1 text-sm leading-5 text-secondary'>{detail}</p>
              </div>
            ))}
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
