import './layoutStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useRoutes } from "react-router-dom";
import LayoutSite from './layouts/LayoutSite';
import LayoutAdmin from './layouts/LayoutAdmin';
import NoPage from "./pages/NoPage";
import RouterApp from "./routers"
function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouterApp.RouterSite,
    },
    {
      path:"admin",
      elament:<LayoutAdmin/>,
      children: RouterApp.RouterSite,
    },
    {
      path:"*",
      element:<NoPage/>
    }
  ]);

  return element;
}

export default App;
