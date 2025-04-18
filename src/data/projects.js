// TODO Add a couple lines about each project
const data = [
  {
    title:
      'Implementación de Servidor personal Multiservicio con Windows Server, Docker y Aplicaciones de Autoalojamiento',
    subtitle: 'Proyecto personal',
    image: '/images/projects/servidor_multiservicio.jpg', // Cambia este path si tienes una imagen diferente
    date: '2024-11-10',
    desc:
      'En este proyecto diseñé e implementé un servidor multiservicio basado en la última versión de Windows Server. Utilicé Docker Compose para desplegar y gestionar contenedores de aplicaciones clave de autoalojamiento:' +
      'Nextcloud para la gestión de archivos en la nube, Jellyfin como servidor multimedia y Vaultwarden para la gestión segura de contraseñas. ' +
      'Para garantizar un acceso seguro y eficiente al servidor desde mi hogar, instalé una VPN con WireGuard y configuré un proxy inverso NGINX, optimizando tanto la conectividad remota como el enrutamiento de solicitudes. ' +
      'El objetivo principal fue construir una solución personalizada que integrara almacenamiento, entretenimiento y seguridad, todo en un entorno escalable y eficiente. ' +
      'Este proyecto no solo reforzó mis conocimientos en administración de sistemas, contenedores y redes, sino que también me permitió aplicar tecnologías avanzadas para cubrir necesidades específicas de conectividad y autoalojamiento.',
  },
  {
    title: 'Implementación de un Entorno Virtualizado con OpenVZ Integrado en Proxmox',
    subtitle: 'Proyecto técnico',
    image: '/images/projects/virtualizacion_openvz_proxmox.jpg',
    link: 'https://drive.google.com/file/d/1GvJF12hDLx6excKRkvskGGHYdb_6kxnY/view?usp=drive_link',
    date: '2024-06-01',
    desc:
      'Implementación de un entorno virtualizado utilizando OpenVZ y Proxmox VE para demostrar la viabilidad de soluciones de virtualización de código abierto. ' +
      'El entorno incluyó la configuración de un clúster de alta disponibilidad compuesto por tres servidores físicos, ejecución de contenedores basados en Debian y Ubuntu, y la implementación de servicios como DNS, FTP y Apache. ' +
      'Se realizaron pruebas de migración en caliente y copias de seguridad automatizadas para evaluar la resiliencia y eficiencia del sistema. ' +
      'Este proyecto permitió optimizar recursos de hardware y software, evidenciando que las tecnologías open source pueden ofrecer una alternativa económica, flexible y potente frente a soluciones propietarias.',
  },
  {
    title: 'Despliegues de microservicios en k8s con Helm',
    subtitle: 'Proyecto técnico',
    link: 'https://github.com/robermgs/Despliegues-de-microservicios-en-k8s-con-Helm.git',
    image: '/images/projects/Despliegues de microservicios en k8s con Helm.jpg',
    date: '2020-06-8',
    desc:
      'En este proyecto me he centrado en el funcionamiento de Helm, una herramienta clave para la gestión de aplicaciones dentro de un entorno Kubernetes. Helm permite desplegar recursos de forma rápida y ordenada mediante el uso de charts, que son plantillas preconfiguradas listas para ser reutilizadas. Gracias a esta herramienta, es posible trabajar con Kubernetes sin necesidad de conocimientos avanzados, lo que agiliza enormemente el proceso de despliegue.' +
      'Ejecución de actualizaciones de versiones y procesos de rollback. ' +
      'Creación de un chart personalizado desde cero. ' +
      'Instalación y configuración de un repositorio público para alojar y compartir charts. ' +
      'Este proyecto refleja mi capacidad para trabajar con tecnologías de orquestación y automatización, así como mi interés en implementar soluciones eficientes y reutilizables dentro de entornos cloud-native.',
  },
  {
    title: 'Organizador de la carpeta Descargas en Python',
    subtitle: 'Proyecto de automatización',
    link: 'https://github.com/robermgs/Script_sort',
    image: '/images/projects/script2.jpg',
    date: '2024-05-15',
    desc:
      'Este script automatiza la organización de la carpeta Descargas del usuario, moviendo archivos a subcarpetas específicas según su tipo (documentos, imágenes, vídeos, etc.). ' +
      'Utiliza solo librerías estándar de Python, lo que lo hace ligero y multiplataforma.' +
      'Demuestra habilidades en scripting, gestión de archivos y automatización de tareas cotidianas.' +
      'Ideal para mantener el sistema limpio y ordenado sin esfuerzo manual.',
  },
];

export default data;
