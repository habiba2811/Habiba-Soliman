import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

export const HERO_CONTENT = `I'm a full-stack developer focused on creating scalable, high-quality web applications. With 4 years of hands-on experience, I combine front-end, back-end, and DevOps skills to build solutions that are both reliable and innovative. I'm passionate about using technology to drive growth and enhance user experiences.`;

export const ABOUT_TEXT = `As a full-stack developer, I'm dedicated to building efficient, user-friendly web applications. My expertise spans front-end technologies like React and Next.js, back-end with Node.js, and databases such as MySQL, PostgreSQL, and MongoDB. I also have hands-on experience with DevOps tools like Docker, CI/CD pipelines, and Terraform. My development journey began with a curiosity for how things work and evolved into a career driven by continuous learning and tackling new challenges. I thrive in collaborative environments and enjoy solving complex problems to create impactful solutions. Outside of work, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: 'Inventory Management Dashboard',
    image: project2,
    description:
      'A full-stack inventory management system with cloud integration, supporting features like product tracking, reporting, and user management.',
    technologies: ['React', 'Next.js', 'Node.js', 'MySQL', 'AWS', 'Terraform'],
  },
  {
    title: 'Chit Chat App',
    image: project4,
    description:
      'A real-time chat application that enables instant messaging, with features like user authentication and message notifications.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Docker',
      'CI/CD',
    ],
  },
  {
    title: 'Expense Tracker',
    image: project1,
    description:
      'An app for managing personal expenses, featuring financial tracking, charts, and budget management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Docker', 'CI/CD'],
  },
  {
    title: 'Local Linker Web App',
    image: project3,
    description:
      'A social networking platform for local reviews and recommendations, allowing users to share their experiences and connect with others.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
];

export const CONTACT = {
  address: 'Berlin, Germany',
  phoneNo: '+49 157 54834481',
  email: 'habiba.hisham2811@gmail.com',
};
