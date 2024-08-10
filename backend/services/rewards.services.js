const { firestoreDB } = require("../utils/firebase-admin/firebase.config");

exports.createReward = async (data) => {
  try {
    const repsonse = await firestoreDB.collection("rewards").add(data);
    return repsonse;
  } catch (error) {
    throw error;
  }
};

exports.getRewards = async () => {
  const rewards = [];
  try {
    const repsonse = await firestoreDB.collection("rewards").get();
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
