import Welcome from "../pages/welcome";

const Router = () => {
  const routes = [
    { path: "/", component: <Welcome />, icon: <></>, name: "", auth: null },
  ];

  return routes;
};

export default Router;
