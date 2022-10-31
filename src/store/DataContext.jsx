import React, { useState } from "react";
import { useCallback } from "react";

export const DataContext = React.createContext({
  repos: [],
  userDetails: {},
  addReposHandler: () => {},
  addUserHandler: () => {},
});

const DataContextProvider = (props) => {
  const [fetchedRepo, setFetchedRepo] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const addReposHandler = useCallback((data) => {
    const formattedData = data.reverse().map((repo, index) => {
      return { ...repo, number: index };
    });
    setFetchedRepo(formattedData);
  }, []);
  const addUserHandler = useCallback((data) => {
    setUserDetails(data);
  }, []);

  const data = {
    repos: fetchedRepo,
    userDetails: userDetails,
    addReposHandler,
    addUserHandler,
  };

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
export default DataContextProvider;
