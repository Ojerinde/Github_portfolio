import { useReducer, useCallback } from "react";

// This is the state initial data
const initialState = {
  isLoading: false,
  error: { hasError: false, message: "" },
};


const fetchReducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: action.value };
  }
  if (action.type === "ERROR") {
    return { ...state, error: action.value };
  }
  return initialState;
};

const useFetch = () => {
  // Managing state
  const [fetchState, dispatchFn] = useReducer(fetchReducer, initialState);

  // A function to hide error modal
  const closeError = () => {
    dispatchFn({ type: "ERROR", value: { hasError: false, message: "" } });
  };

  // A function to fetch data
  const fetchRequest = useCallback(
    async (requestConfig, getQuestionsFromRequest = () => {}) => {
      dispatchFn({ type: "LOADING", value: true });
      dispatchFn({ type: "ERROR", value: { hasError: false, message: "" } });
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        });

        if (!response.ok) {
          throw new Error(`${requestConfig.errorMessage}`);
        }

        const responseBody = await response.json();

        getQuestionsFromRequest(responseBody);
        
      } catch (err) {
        dispatchFn({
          type: "ERROR",
          value: { hasError: true, message: err.message || "An error ocurred" },
        });
      }
      // After the request has been made
      dispatchFn({ type: "LOADING", value: false });
    },
    []
  );

  const { isLoading, error } = fetchState;
  return { isLoading, error, closeError, fetchRequest };
};
export default useFetch;
//
