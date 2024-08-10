import { useEffect, useState } from "react";
import { get } from "../utils/axios/axios.config";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsUsersLoading(true);
      try {
        const response = await get("/users");
        setUsers(response?.data);
        setIsUsersLoading(false);
      } catch (error) {
        console.log("Error: ", error?.response?.data);
      }
    })();
  }, []);

  return { users, isUsersLoading };
};
export default useGetUsers;
