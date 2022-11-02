import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { ErrorBoundary } from "react-error-boundary";

import { ImSpinner6 } from "react-icons/im";

import AppHome from "./pages/Home/AppHome";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage/ErrorBoundaryPage";
import Button from "./components/UI/Button/Button";

// Dynamic Imports (Lazy -loading)
const Home = lazy(() => import("./pages/Home/Home"));
const RepoDetails = lazy(() => import("./components/Repository/RepoDetails"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="boundary__error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <Button onClick={props.resetErrorBoundary}>Restart app</Button>
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
            <ImSpinner6 className="fallback__spinner" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Nexted routes */}
          <Route path="/home" element={<AppHome />}>
            <Route path="" element={<Home />} />
            <Route path=":id" element={<RepoDetails />} /> 
          </Route>

          {/* Routes to test the error boundary coponents */}
          <Route path="/errorboundary" element={<ErrorBoundaryPage />} />

          {/* Route to test 404 page */}
          <Route path="/404page" element={<ErrorPage />} />

          {/* Routes that will be matched if none of tthe route(s) is matched */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
