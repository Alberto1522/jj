/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Dirección General de Tráfico',
    position: 'Técnico de sistemas',
    url: 'https://www.dgt.es',
    startDate: '2024-07-01',
    endDate: '2024-12-31',
    summary:
      'Soporte técnico y mantenimiento de sistemas críticos en un entorno de alta exigencia para asegurar la continuidad operativa de la Dirección General de Tráfico.',
    highlights: [
      'Resolución eficiente de incidencias técnicas mediante Jira y EasyVista.',
      'Mantenimiento preventivo y correctivo de sistemas y estaciones de trabajo.',
      'Soporte directo a usuarios y personal técnico en sede.',
      'Colaboración en la gestión de redes, impresoras, y otros dispositivos de la infraestructura IT.',
      'Trabajo bajo presión en un entorno con alta responsabilidad institucional.',
    ],
  },
  {
    name: 'Universidad Católica de Ávila',
    position: 'Administrador de Sistemas y Redes (Contrato de prácticas)',
    url: 'https://www.ucavila.es',
    startDate: '2024-03-01',
    endDate: '2024-06-01',
    summary:
      'Experiencia práctica en administración y mantenimiento de sistemas y redes. Participé activamente en la gestión de infraestructuras IT, soporte técnico y documentación para usuarios y sistemas.',
    highlights: [
      'Instalación, configuración y mantenimiento de equipos informáticos para garantizar su óptimo rendimiento.',
      'Soporte técnico en entornos móviles (Android/iOS) y en estaciones de trabajo Windows.',
      'Instalación, actualización y configuración de software según las necesidades del usuario.',
      'Redacción de documentación técnica, guías prácticas y wikis para usuarios y técnicos.',
      'Configuración y administración de dispositivos de red como switches, routers (Ubiquiti, D-Link) y firewalls Sophos.',
      'Participación en la gestión de servidores (Wintel), entornos virtualizados (VMware ESX) y servicios de red como DNS.',
    ],
  },
  {
    name: 'C&D Sistemas Ávila',
    position: 'Técnico de TI',
    url: '', // Puedes añadir la URL de la empresa si tiene sitio web
    startDate: '2017-10-01',
    endDate: '2022-01-31',
    summary:
      'Encargado del correcto funcionamiento de sistemas y equipos tecnológicos. Resolución de incidencias, soporte a usuarios, implementación de soluciones técnicas y reparaciones electrónicas en entornos empresariales.',
    highlights: [
      'Diagnóstico, reparación y optimización de equipos informáticos, impresoras (locales y en red) y periféricos.',
      'Reparaciones electrónicas en componentes clave.',
      'Configuración y mantenimiento de servidores, redes, dominios y servicios como correo electrónico.',
      'Instalación y soporte técnico de sistemas de punto de venta (TPVs).',
      'Resolución de incidencias de nivel 1, 2 y 3 en hardware, software y redes.',
      'Colaboración con el equipo de infraestructura para garantizar la continuidad del negocio.',
      'Gestión de cuentas de usuario y recursos IT.',
      'Instalación y actualización de software: MS Office, Office 365, LibreOffice, MS Teams, SAP.',
      'Creación de documentación técnica: guías, manuales e instrucciones para usuarios.',
      'Resolución de problemas en entornos Windows (XP, 7, 10 y 11).',
      'Configuración y mantenimiento de dispositivos en red para optimizar el rendimiento de la infraestructura.',
    ],
  },
];

export default work;
