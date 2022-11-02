import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { DataContext } from "../../store/DataContext";
import Pagination from "../Pagination/Pagination";
import Error from "../UI/Error/Error";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import LeftAlignedRepo from "./LeftRepo";
import RightAlignedRepo from "./RightRepo";

const repoPerPage = 5;

const Repositories = () => {
  // Consuming created context
  const { repos } = useContext(DataContext);

  // Managing the page rendered
  const [start, setStart] = useState(0);
  const end = start + repoPerPage;

  // A function to update page number
  const pageHandler = (page) => {
    setStart((prev) => page * repoPerPage - repoPerPage);
  };

  // Consuming useFetch custom hook
  const { isLoading, error } = useFetch();

  // API loading state
  if (isLoading) return <LoadingSpinner />;
  return (
    <ul className="repo__box">
      <h2>My repositories</h2>
      {!isLoading && error.hasError && <Error message={error.message} />}
      {repos.length > 0 ? (
        repos.slice(start, end).map((repo, index) => {
          if (index % 2 === 0) {
            return (
              <LeftAlignedRepo
                key={index}
                id={repo.id}
                index={`${repo.number + 1}`.padStart(2, 0)}
                name={repo.name}
                description={repo.description}
              />
            );
          } else {
            return (
              <RightAlignedRepo
                key={index}
                id={repo.id}
                index={`${repo.number + 1}`.padStart(2, 0)}
                name={repo.name}
                description={repo.description}
              />
            );
          }
        })
      ) : (
        <p className="no__repo">No Repository found</p>
      )}
      {repos.length > 0 && (
        <Pagination
          totalRepo={repos.length}
          repoPerPage={repoPerPage}
          onChange={pageHandler}
        />
      )}
    </ul>
  );
};
export default Repositories;
