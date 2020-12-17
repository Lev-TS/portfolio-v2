import frontendIcon from '../assets/skills/frontend.svg';
import testingIcon from '../assets/skills/testing.svg';
import designIcon from '../assets/skills/design.svg';
import backendIcon from '../assets/skills/backend.svg';
import miscIcon from '../assets/skills/misc.svg';

export default [
  {
    type: 'FRONTEND',
    icon: frontendIcon,
    skillset: [
      'JavaScript ES6',
      'HTML5 & CSS3',
      'SASS',
      'Styled-Components',
      'React',
      'Context API',
      'Redux',
      'Gatsby & GraphQL',
      'Progressive Web Apps',
    ],
  },
  {
    type: 'TESTING',
    icon: testingIcon,
    skillset: ['Jest', 'Mocha', 'Chai'],
  },
  {
    type: 'DESIGN',
    icon: designIcon,
    skillset: ['Responsive design', 'Figma'],
  },
  {
    type: 'BACKEND',
    icon: backendIcon,
    skillset: [
      'Node.js',
      'Express',
      'RESTful API',
      'SQL (PostgreSQL, MySQL, SQLite)',
      'Postman',
      'Authentication & Authorization',
    ],
  },
  {
    type: 'MISC',
    icon: miscIcon,
    skillset: [
      'Heroku',
      'Docker',
      'Netlify',
      'DigitalOceans',
      'Git & GitHub',
      'Shell (bash, zsh)',
      'npm & yarn',
      'eslint',
      'Payment Processing (Stripe)',
      'Firebase (Firestore, Auth)',
      'Transpilation (webpack, babel)',
    ],
  },
];
