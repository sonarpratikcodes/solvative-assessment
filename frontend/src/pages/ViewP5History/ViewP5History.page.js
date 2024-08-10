import { useNavigate, useParams } from "react-router-dom";
import useGetRewards from "../../hooks/useGetRewards.hook";
import "./ViewP5History.style.css";
import moment from "moment";
import { remove } from "../../utils/axios/axios.config";
const ViewP5History = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { rewards } = useGetRewards({ given_by: params?.id });

  const handleDelete = async (id) => {
    try {
      await remove(`/rewards/${id}`);
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="container">
        <button onClick={() => navigate(`/${params?.id}/rewards/new`)}>
          + Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>P5 Given</th>
            <th>User Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="rewards-table-body">
          {rewards.map((reward, i) => (
            <tr key={reward?.id}>
              <td>{++i}</td>
              <td>{moment(reward?.created_at).format("DD/MM/YYYY")}</td>
              <td>{reward?.points}</td>
              <td>{reward?.given_to?.name}</td>
              <td>
                <button
                  class="delete-btn"
                  onClick={() => handleDelete(reward?.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewP5History;
