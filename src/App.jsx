import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { ErrorBoundary } from "react-error-boundary";

import { ImSpinner4 } from "react-icons/im";

import AppHome from "./pages/Home/AppHome";

// Dynamic Imports
const Home = lazy(() => import("./pages/Home/Home"));
const RepoDetails = lazy(() => import("./components/Repository/RepoDetails"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

// Error Boundary FallbackComponent
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="boundary__error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <Suspense
        fallback={
          <div className="fallback__box">
            <ImSpinner4 className="fallback__spinner" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<AppHome />}>
            <Route path="" element={<Home />} />
            <Route path=":id" element={<RepoDetails />} />
          </Route>

          <Route path="/errorboundary" element={<div>An error</div>} />
          <Route path="/nopage" element={<ErrorPage />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
