import React, { useState } from "react";
import { useCallback } from "react";

// Creating an app wide state store using the context API
export const DataContext = React.createContext({
  repos: [],
  userDetails: {},
  addReposHandler: () => {},
  addUserHandler: () => {},
});

// Creating a component that will provide the context.
const DataContextProvider = (props) => {
  // Managing states
  const [fetchedRepo, setFetchedRepo] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  // Functions to updates states. useCallback ensures that the functions are memoized.
  const addReposHandler = useCallback((data) => {
    const formattedData = data.reverse().map((repo, index) => {
      return { ...repo, number: index };
    });
    setFetchedRepo(formattedData);
  }, []);
  
  const addUserHandler = useCallback((data) => {
    setUserDetails(data);
  }, []);

  // Data that is available in app wide state
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
