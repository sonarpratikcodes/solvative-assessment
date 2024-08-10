import "./CreateReward.style.css";
import { useNavigate, useParams } from "react-router-dom";
import useGetUsers from "../../hooks/useGetUsers.hook";
import { useState } from "react";
import { post } from "../../utils/axios/axios.config";

const CreateReward = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { users } = useGetUsers();
  const activeUser = users.filter((user) => user.id === params?.id)[0];
  const usersExcepts = users.filter((user) => user.id !== params?.id);

  const [initialValues, setInitialValues] = useState({
    points: 0,
    given_to: "",
    given_by: activeUser,
  });
  //   const [selecteUser, setSelectedUser] = useState(null);

  const handleCancel = () => {
    navigate(`/${params?.id}/rewards`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeUser?.p5_points < initialValues.points)
        throw new Error("Insufficient points");

      initialValues.given_to =
        usersExcepts.filter((user) => user.id === initialValues.given_to)[0] ||
        null;

      initialValues.given_by = activeUser;
      await post(`/rewards`, initialValues);
      navigate(`/${params?.id}/rewards`);
    } catch (error) {
      alert(error?.message);
    }

    // setIsFormSubmitting(true);
    // try {
    //   userId
    //     ? await put(`/users/${userId}`, initialValues)
    //     : await post("/users", initialValues);
    //   setIsFormSubmitting(true);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error?.response?.data);
    // }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Create New Reward</h2>
        <form id="reward-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user">Select User</label>
            <select
              id="user"
              name="user"
              value={initialValues?.given_to || ""}
              onChange={(e) =>
                setInitialValues((pre) => ({
                  ...pre,
                  given_to: e.target.value,
                }))
              }
              required
            >
              <option value={""}></option>
              {usersExcepts.map((user) => (
                <option key={user?.id} value={user?.id}>
                  {user?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Reward Points (P5)</label>
            <input
              type="number"
              id="reward"
              name="points"
              max="100"
              placeholder="Enter points"
              onChange={(e) =>
                setInitialValues((pre) => ({
                  ...pre,
                  points: parseInt(e.target.value),
                }))
              }
              required
            />
          </div>
          <div className="balance-info" id="balance-info">
            Current P5 Balance: {activeUser?.p5_points}
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" id="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReward;
