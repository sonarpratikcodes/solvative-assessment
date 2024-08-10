const express = require("express");
const {
  GET_REWARDS,
  GET_REWARD_BY_ID,
  ADD_REWARD,
  UPDATE_REWARD_BY_ID,
  DELETE_REWARD_BY_ID,
} = require("../controllers/rewards.controllers");

const rewardsRouter = express.Router();

rewardsRouter.get("/", GET_REWARDS);
rewardsRouter.get("/:id", GET_REWARD_BY_ID);
rewardsRouter.post("/", ADD_REWARD);
rewardsRouter.put("/:id", UPDATE_REWARD_BY_ID);
rewardsRouter.delete("/:id", DELETE_REWARD_BY_ID);

module.exports = rewardsRouter;
