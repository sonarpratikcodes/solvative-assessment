const { firestoreDB } = require("../utils/firebase-admin/firebase.config");

exports.createUser = async (data) => {
  try {
    data.p5_points = 100;
    data.reward_points = 0;

    const repsonse = await firestoreDB.collection("users").add(data);
    return repsonse;
  } catch (error) {
    throw error;
  }
};

exports.getUsers = async () => {
  const users = [];
  try {
    const repsonse = await firestoreDB.collection("users").get();
    repsonse.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  } catch (error) {
    throw error;
  }
};

exports.getUserById = async (id) => {
  try {
    const repsonse = await firestoreDB.collection("users").doc(id).get();
    const user = { ...repsonse.data(), id: repsonse.id };

    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateUserById = async (id, data) => {
  try {
    await firestoreDB.collection("users").doc(id).update(data);

    return { id, message: "User updated successfully." };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.addUserRewardPoints = async (points, userId) => {
  try {
    const user = await this.getUserById(userId);

    await firestoreDB
      .collection("users")
      .doc(userId)
      .update({
        reward_points: user?.reward_points + points,
      });
    return "success";
  } catch (error) {
    throw error;
  }
};

exports.removeUserP5Points = async (points, userId) => {
  try {
    const user = await this.getUserById(userId);

    await firestoreDB
      .collection("users")
      .doc(userId)
      .update({
        p5_points: user?.p5_points - points,
      });
    return "success";
  } catch (error) {
    throw error;
  }
};

exports.removeUserRewardPoints = async (points, userId) => {
  try {
    const user = await this.getUserById(userId);

    await firestoreDB
      .collection("users")
      .doc(userId)
      .update({
        reward_points: user?.reward_points - points,
      });
    return "success";
  } catch (error) {
    throw error;
  }
};

exports.addUserP5Points = async (points, userId) => {
  try {
    const user = await this.getUserById(userId);

    await firestoreDB
      .collection("users")
      .doc(userId)
      .update({
        p5_points: user?.p5_points + points,
      });
    return "success";
  } catch (error) {
    throw error;
  }
};