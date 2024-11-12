import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiRedis } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';

import {
  SiTypescript,
  SiGit,
  SiPowerbi,
  SiTerraform,
  SiMongodb,
} from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="text-7xl text-green-500"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="text-7xl text-red-700"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="text-7xl text-green-500"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="text-7xl text-blue-600"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="text-7xl text-sky-700"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(9.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPowerbi className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(10.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTerraform className="text-7xl text-purple-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
