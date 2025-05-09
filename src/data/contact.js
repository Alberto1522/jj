import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/robermgs',
    label: 'Github',
    icon: faGithub,
  },

  {
    link: 'https://www.linkedin.com/in/708059151/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://drive.google.com/file/d/1ws3hA_HsWvMftulqGNpnHSr-8U_FFxpj/view?usp=sharing',
    label: 'Angel List',
    icon: faAngellist,
  },

  {
    link: 'mailto:robermgs@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
