import CreateReward from "../pages/CreateReward/CreateReward.page";
import CreateUser from "../pages/CreateUser/CreateUser.page";
import Home from "../pages/Home/Home.page";

const routes = [
  {
    id: "home_page",
    path: "/",
    element: <Home />,
  },
  {
    id: "create_user",
    path: "/new",
    element: <CreateUser />,
  },
  {
    id: "update_user",
    path: "/:id",
    element: <CreateUser />,
  },
  {
    id: "create_reward",
    path: "/:id/rewards/new",
    element: <CreateReward />,
  },
];

export default routes;
