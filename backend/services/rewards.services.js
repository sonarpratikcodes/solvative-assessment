const { firestoreDB } = require("../utils/firebase-admin/firebase.config");

exports.createReward = async (data) => {
  try {
    data.created_at = new Date().toISOString();
    data.updated_at = new Date().toISOString();

    const repsonse = await firestoreDB.collection("rewards").add(data);
    return data;
  } catch (error) {
    throw error;
  }
};

exports.getRewards = async (query) => {
  const rewards = [];
  const qKeys = Object.keys(query);
  try {
    const repsonse = await firestoreDB
      .collection("rewards")
      .where(`${qKeys[0]}.id`, "==", query[qKeys])
      .get();
    repsonse.docs.forEach((doc) => {
      rewards.push({ ...doc.data(), id: doc.id });
    });

    return rewards;
  } catch (error) {
    throw error;
  }
};

exports.getRewardById = async (id) => {
  try {
    const repsonse = await firestoreDB.collection("rewards").doc(id).get();
    const user = { ...repsonse.data(), id: repsonse.id };

    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateRewardById = async (id, data) => {
  try {
    await firestoreDB.collection("rewards").doc(id).update(data);

    return { id, message: "Reward updated successfully." };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteRewardById = async (id) => {
  try {
    await firestoreDB.collection("rewards").doc(id).delete();

    return { id, message: "Reward deleted successfully." };
  } catch (error) {
    throw new Error(error.message);
  }
};
