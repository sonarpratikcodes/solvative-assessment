import { useEffect, useState } from "react";
import { get } from "../utils/axios/axios.config";

const useGetUserById = (id) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);

  useEffect(() => {
    if (id) {
      (async () => {
        setIsUserLoading(true);
        try {
          const response = await get(`/users/${id}`);
          setUser(response?.data);
          setIsUserLoading(false);
        } catch (error) {
          console.log("Error: ", error?.response?.data);
          setIsUserLoading(false);
        }
      })();
    }
  }, [id]);

  return { user, isUserLoading };
};

export default useGetUserById;
