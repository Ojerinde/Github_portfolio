import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import { Helmet } from "react-helmet-async";


import useFetch from "../../hooks/useFetch";
import { DataContext } from "../../store/DataContext";

const AppHome = () => {
  // Consuming the context created
  const { addReposHandler, addUserHandler } = useContext(DataContext);

  // Consuming the custom hook created
  const { fetchRequest } = useFetch();

  useEffect(() => {
    // This is the function that will get list of repositories from the custom hook to avoid infinite loop.
    const getFetchedData = (data) => {
      addReposHandler(data);
    };
    // This is the function that will get user details from the custom hook to avoid infinite loop.
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
        <title>Home</title>
        <meta name="description" content="Portfolio homepage" />
        <link rel="canonical" href="/home" />
      </Helmet>

      {/* This enables the nested route(s) to show */}
      <Outlet />
    </>
  );
};
export default AppHome;
