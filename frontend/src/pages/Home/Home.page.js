import "./Home.style.css";
const Home = () => {
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
          <tr>
            <td data-label="Name">Pratik</td>
            <td data-label="P5 Points">100</td>
            <td data-label="Reward Points">0</td>
            <td data-label="Action">
              <button>Edit/Login</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
