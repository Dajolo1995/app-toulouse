import Welcome from "../pages/welcome";
import CatalogoApp from "../pages/catalogo";

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
  ];

  return routes;
};

export default Router;
