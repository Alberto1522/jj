import dayjs from 'dayjs';

/* Las keys coinciden con las devueltas por la API de github. 
Para ver todo lo que devuelve la API de github, ejecuta:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
/* Las keys coinciden con las devueltas por la API de github */

const data = [
  {
    label: 'Estrellas del repositorio',
    key: 'stargazers_count',
    link: 'https://github.com/mldangelo/personal-site/stargazers',
  },
  {
    label: 'Seguidores del repositorio',
    key: 'subscribers_count',
    link: 'https://github.com/mldangelo/personal-site/stargazers',
  },
  {
    label: 'Número de forks',
    key: 'forks',
    link: 'https://github.com/mldangelo/personal-site/network',
  },
  {
    label: 'Issues abiertos',
    key: 'open_issues_count',
    link: 'https://github.com/mldangelo/personal-site/issues',
  },
  {
    label: 'Última actualización',
    key: 'pushed_at',
    link: 'https://github.com/mldangelo/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    label: 'Líneas de código JavaScript',
    value: '2150',
    link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
  },
];

export default data;