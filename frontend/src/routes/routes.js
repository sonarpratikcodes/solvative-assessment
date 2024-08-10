import CreateReward from "../pages/CreateReward/CreateReward.page";
import CreateUser from "../pages/CreateUser/CreateUser.page";
import Home from "../pages/Home/Home.page";
import ViewP5History from "../pages/ViewP5History/ViewP5History.page";
import ViewRewardHistory from "../pages/ViewRewardHistory/ViewRewardHistory.page";

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
    id: "view_rewards",
    path: "/:id/rewards/",
    element: <ViewRewardHistory />,
  },

  {
    id: "create_reward",
    path: "/:id/rewards/new",
    element: <CreateReward />,
  },
  {
    id: "view_p5_history",
    path: "/:id/p5",
    element: <ViewP5History />,
  },
];

export default routes;
