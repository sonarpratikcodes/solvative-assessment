const {
  getRewards,
  createReward,
  getRewardById,
  updateRewardById,
  deleteRewardById,
} = require("../services/rewards.services");
const {
  addUserRewardPoints,
  removeUserP5Points,
  addUserP5Points,
  removeUserRewardPoints,
} = require("../services/users.services");

exports.GET_REWARDS = async (req, res) => {
  try {
    const data = await getRewards(req?.query);
    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

exports.ADD_REWARD = async (req, res) => {
  try {
    const givenBy = req?.body?.given_by;
    const givenTo = req?.body?.given_to;

    await removeUserP5Points(req?.body?.points, givenBy?.id);
    await addUserRewardPoints(req?.body?.points, givenTo?.id);

    const data = await createReward(req.body);

    res.status(201).send({
      status: 201,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

//
exports.GET_REWARD_BY_ID = async (req, res) => {
  try {
    const data = await getRewardById(req.params.id);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

//
exports.UPDATE_REWARD_BY_ID = async (req, res) => {
  try {
    const data = await updateRewardById(req.params.id, req.body);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

exports.DELETE_REWARD_BY_ID = async (req, res) => {
  try {
    const rewardToBeDelete = await getRewardById(req?.params?.id);

    const givenBy = rewardToBeDelete?.given_by;
    const givenTo = rewardToBeDelete?.given_to;

    await addUserP5Points(rewardToBeDelete?.points, givenBy?.id);
    await removeUserRewardPoints(rewardToBeDelete?.points, givenTo?.id);

    const data = await deleteRewardById(req.params.id, req.body);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};
