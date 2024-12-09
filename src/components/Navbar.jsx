import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/habiba-soliman-00a59923a/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/habiba2811"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
