import { useNavigate } from "react-router-dom";
import "./CreateUser.style.css";
import { useEffect, useState } from "react";
import { post } from "../../utils/axios/axios.config";

const CreateUser = () => {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    name: "",
  });

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

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
      await post("/users", initialValues);
      setIsFormSubmitting(true);
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return (
    <div className="container">
      <div className="app-container">
        <div className="app-card">
          <div className="form-container">
            <h2>Create User</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
