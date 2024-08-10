import PageLoader from "../../components/PageLoader/PageLoader.component";
import useGetUsers from "../../hooks/useGetUsers.hook";
import "./Home.style.css";
const Home = () => {
  const { users, isUsersLoading } = useGetUsers();

  const handleLogin = (value) => {
    console.log(value);
  };

  if (isUsersLoading) {
    return <PageLoader />;
  } else
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>P5 Points</th>
              <th>Reward Points</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?.id}>
                <td data-label="Name">{user?.name}</td>
                <td data-label="P5 Points">{user?.p5_points}</td>
                <td data-label="Reward Points">{user?.reward_points}</td>
                <td data-label="Action">
                  <button onClick={handleLogin}>Edit/Login</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Home;
