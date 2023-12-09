import Welcome from "../pages/welcome";
import CatalogoApp from "../pages/catalogo";
import AuthLogin from "../pages/auth/login";
import Shops from "../pages/shops";

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
      static: false,
    },
    {
      path: "/catalogo",
      component: <CatalogoApp />,
      icon: <></>,
      name: "Catalogo",
      auth: null,
      menu: true,
      footer: false,
      static: false,
    },
    {
      path: "/auth/login",
      component: <AuthLogin />,
      icon: <></>,
      name: "Ingresar",
      auth: false,
      menu: true,
      footer: false,
      static: false,
    },
    {
      path: "/shops",
      component: <Shops />,
      icon: <></>,
      name: "TIENDAS - HORARIOS",
      auth: null,
      menu: true,
      footer: false,
      static: true,
    },
  ];

  return routes;
};

export default Router;
