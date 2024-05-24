import logo from "../extensions/healthclinicturkey-logo.png";
import favicon from "../extensions/fav-icon.png";

const config = {
  auth: {
    logo: logo,
  },

  head: {
    favicon: favicon,
  },

  menu: {
    logo: favicon,
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Health Clinic Dashboard",
      "Auth.form.welcome.title": "Welcome to Dashboard!",
      "Auth.form.welcome.subtitle": "Log in to your dashboard...",
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
