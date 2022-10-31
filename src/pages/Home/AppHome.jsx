import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import useFetch from "../../hooks/useFetch";
import { DataContext } from "../../store/DataContext";

const AppHome = () => {
  const { addReposHandler, addUserHandler } = useContext(DataContext);
  const { fetchRequest } = useFetch();

  useEffect(() => {
    const getFetchedData = (data) => {
      addReposHandler(data);
    };

    const getUserData = (data) => {
      addUserHandler(data);
    };

    fetchRequest(
      {
        url: "https://api.github.com/users/Ojerinde/repos",
        errorMessage: "Could not fetch repositories",
      },
      getFetchedData
    );
    fetchRequest(
      {
        url: "https://api.github.com/users/Ojerinde",
        errorMessage: "Could not fetch user details",
      },
      getUserData
    );
  }, [fetchRequest, addReposHandler, addUserHandler]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default AppHome;
