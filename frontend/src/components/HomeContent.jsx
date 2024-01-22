import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';


// import '../App.css';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Data Visualization Software</h1>
        </motion.div>

        <motion.div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Level up your data analysis
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              with a powerful data{' '}
            </span>
            visualization software.
          </span>
        </motion.div>

        <motion.p className="text-lg text-gray-400 my-5 max-w-[600px]">
          Data visualization software helps you visualize your data to discover underlying trends, gain meaningful insights, and make data-driven decisions. Transform your data and make the right business decisions with Paras Analytics, the best data visualization tool in the market.
        </motion.p>
        <motion.a className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Learn More!
        </motion.a>
      </div>

    </motion.div>
  );
};

export default HeroContent;
