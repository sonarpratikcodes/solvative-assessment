import { useNavigate, useParams } from "react-router-dom";
import useGetRewards from "../../hooks/useGetRewards.hook";
import moment from "moment";
const ViewRewardHistory = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { rewards } = useGetRewards({ given_to: params?.id });

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
            <th>Rewards received</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody id="rewards-table-body">
          {rewards.map((reward, i) => (
            <tr key={reward?.id}>
              <td>{++i}</td>
              <td>{moment(reward?.created_at).format("DD/MM/YYYY")}</td>
              <td>{reward?.points}</td>
              <td>{reward?.given_by?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRewardHistory;
