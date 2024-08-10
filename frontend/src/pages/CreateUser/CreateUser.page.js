import { useNavigate, useParams } from "react-router-dom";
import "./CreateUser.style.css";
import { useEffect, useState } from "react";
import { post, put } from "../../utils/axios/axios.config";
import useGetUserById from "../../hooks/useGetUserById.hook";

const CreateUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params?.id !== "new" ? params?.id : null;

  const [initialValues, setInitialValues] = useState({
    name: "",
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const { user } = useGetUserById(userId);

  useEffect(() => {
    if (userId && user) {
      setInitialValues({ name: user?.name });
    }
  }, [user]);

  const handleCancel = () => {
    navigate("/");
  };

  const handleOnChange = (e) => {
    const { name, value } = e?.target;
    setInitialValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    try {
      userId
        ? await put(`/users/${userId}`, initialValues)
        : await post("/users", initialValues);
      setIsFormSubmitting(true);
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const handleRoutign = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="app-container">
        <div className="app-card">
          <div className="form-container">
            <h2>{userId ? "Edit User" : "Create User"}</h2>
            <form id="create-user-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={initialValues?.name}
                  onChange={handleOnChange}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  disabled={isFormSubmitting}
                  required
                />
              </div>
              <div className="form-actions">
                <button
                  disabled={isFormSubmitting}
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button disabled={isFormSubmitting} type="submit">
                  Submit
                </button>
              </div>
            </form>
            {userId ? (
              <div className="points-actions">
                <div>
                  <label>P5 Points</label>

                  <button
                    onClick={() => navigate(`/${userId}/p5`)}
                    type="button"
                  >
                    {user?.p5_points}
                  </button>
                </div>
                <div>
                  <label>Reward Points</label>
                  <button onClick={() => navigate(`/${userId}/rewards`)}>
                    {user?.reward_points}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
