import { useEffect, useState } from "react";
import { get } from "../utils/axios/axios.config";

const useGetRewards = (query) => {
  const [rewards, setRewards] = useState([]);
  const [isRewardsLoading, setIsRewardsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsRewardsLoading(true);
      try {
        const response = await get("/rewards", { params: query });
        setRewards(response?.data);
        setIsRewardsLoading(false);
      } catch (error) {
        console.log("Error: ", error?.response?.data);
        setIsRewardsLoading(false);
      }
    })();
  }, []);

  return { rewards, isRewardsLoading };
};
export default useGetRewards;
