import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/User/Dashboard"

var routes = [
    { path: "/login", icon: "fa fa-home", name: "Login", component: Login, layout: "/auth" },
    { path: "/register", icon: "fa fa-home", name: "Register", component: Register, layout: "/auth" },
    { path: "/dashboard", icon: "fa fa-home", name: "Dashboard", component: Dashboard, layout: "/user" },
    
];
export default routes;
