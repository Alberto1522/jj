const skills = [
  {
    title: 'Windows Server',
    competency: 5,
    category: ['Sysadmin', 'Infrastructure', 'Microsoft'],
  },
  {
    title: 'Active Directory & GPOs',
    competency: 5,
    category: ['Sysadmin', 'Microsoft'],
  },
  {
    title: 'Linux (Debian/Ubuntu)',
    competency: 4,
    category: ['Sysadmin', 'Linux'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['DevOps', 'Containers'],
  },
  {
    title: 'Proxmox VE',
    competency: 4,
    category: ['Virtualization', 'Infrastructure'],
  },
  {
    title: 'PowerShell',
    competency: 4,
    category: ['Scripting', 'Automation'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Scripting', 'Automation'],
  },
  {
    title: 'Ansible',
    competency: 3,
    category: ['Automation', 'DevOps'],
  },
  {
    title: 'Oracle Cloud',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'VPN (WireGuard)',
    competency: 4,
    category: ['Networking', 'Security'],
  },
  {
    title: 'NGINX (Reverse Proxy)',
    competency: 4,
    category: ['Web Servers', 'Security'],
  },
  {
    title: 'Firewalls (pfSense, Sophos)',
    competency: 4,
    category: ['Security', 'Networking'],
  },
  {
    title: 'SQL (MySQL, SQL Server, Oracle)',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Virtualización (VMware, OpenVZ)',
    competency: 4,
    category: ['Virtualization', 'Infrastructure'],
  },
  {
    title: 'Microsoft 365',
    competency: 4,
    category: ['Productivity', 'Tools'],
  },
  {
    title: 'Jira / EasyVista',
    competency: 3,
    category: ['Tools', 'IT Management'],
  },
  {
    title: 'VLANs',
    competency: 4,
    category: ['Networking'],
  },
  {
    title: 'Intune (básico)',
    competency: 2,
    category: ['Sysadmin', 'Microsoft'],
  },
  {
    title: 'Hardware y Electrónica',
    competency: 5,
    category: ['Hardware', 'Repair'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
