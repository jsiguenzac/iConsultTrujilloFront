const routes = {
  error: "/error",
  logout: "/logout",
  welcome: "/bienvenido",
  admin: {
    home: "/administrador",
    logout: "/logout",
  },
  user: {
    login: "/iniciar-sesion",
    register: "/registrarse",
    main: {
      home: "/inicio",
    },
  },
  doctor: {
    schedules: "/doctor/horarios",
  },
  help: {
    home: "/contactanos",
  },
  profile: {
    home: "/perfil",
    information: "/perfil/datos",
  },
};

export default routes;
