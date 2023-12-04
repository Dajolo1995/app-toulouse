import Welcome from "../pages/welcome";
import CatalogoApp from "../pages/catalogo";
import AuthLogin from "../pages/auth/login";

const Router = () => {
  const routes = [
    {
      path: "/",
      component: <Welcome />,
      icon: <></>,
      name: "",
      auth: null,
      menu: false,
      footer: false,
    },
    {
      path: "/catalogo",
      component: <CatalogoApp />,
      icon: <></>,
      name: "",
      auth: null,
      menu: false,
      footer: false,
    },
    {
      path: "/auth/login",
      component: <AuthLogin />,
      icon: <></>,
      name: "",
      auth: null,
      menu: false,
      footer: false,
    },
  ];

  return routes;
};

export default Router;
