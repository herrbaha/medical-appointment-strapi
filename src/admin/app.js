// import logo from "../extensions/healthclinicturkey-logo.png";
import logo from "../extensions/fav-icon.png";

const config = {
  auth: {
    logo,
  },

  head: {
    favicon: logo,
  },

  menu: {
    logo,
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Health Clinic Dashboard",
      "Auth.form.welcome.title": "Welcome to Health Clinic Dashboard!",
      "Auth.form.welcome.subtitle": "Log in to your dashboard",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
