import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

// SEO
import { Helmet } from "react-helmet-async";

// Custom hook
import useFetch from "../../hooks/useFetch";
import { DataContext } from "../../store/DataContext";

import Error from "../../components/UI/Error/Error";

const AppHome = () => {
  // Consuming the application wide state data
  const { addReposHandler, addUserHandler } = useContext(DataContext);

  // Consuming the custom hook created
  const { isLoading, error, hideModal, fetchRequest } = useFetch();

  useEffect(() => {
    // This is the function that will get list of repositories from the custom hook and avoid infinite loop.
    const getFetchedData = (data) => {
      addReposHandler(data);
    };

    // This is the function that will get user details from the custom hook and avoid infinite loop.
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
      {/* SEO optimazation */}
      <Helmet>
        <title>Ojerinde Joel's Github Repositories</title>
        <meta name="description" content="This page contains some details and all the repositories of Ojerinde Joel" />
        <link rel="canonical" href="/home" />
      </Helmet>

      {/* If an error occured while fetching the reposotories */}
      {!isLoading && error.hasError && (
        <Error message={error.message} onClick={() => hideModal()} />
      )}

      {/* This enables the nested route(s) to show */}
      <Outlet />
    </>
  );
};
export default AppHome;
