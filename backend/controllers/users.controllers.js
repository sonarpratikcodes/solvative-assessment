const {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
} = require("../services/users.services");

exports.GET_USERS = async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

exports.ADD_USER = async (req, res) => {
  try {
    const data = await createUser(req.body);

    res.status(201).send({
      status: 201,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

//
exports.GET_USER_BY_ID = async (req, res) => {
  try {
    const data = await getUserById(req.params.id);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};

//
exports.UPDATE_USER_BY_ID = async (req, res) => {
  try {
    const data = await updateUserById(req.params.id, req.body);

    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).send({ status: 400, message: error.message });
  }
};
