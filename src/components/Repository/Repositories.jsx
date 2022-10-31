import { useContext, useState } from "react";
import { DataContext } from "../../store/DataContext";
import Pagination from "../Pagination/Pagination";
import LeftAlignedRepo from "./LeftRepo";
import RightAlignedRepo from "./RightRepo";

const repoPerPage = 5;

const Repositories = () => {
  const { repos } = useContext(DataContext);
  const [start, setStart] = useState(0);
  const end = start + repoPerPage;

  const pageHandler = (page) => {
    setStart((prev) => page * repoPerPage - repoPerPage);
  };

  return (
    <ul className="repo__box">
      <h4>My repositories</h4>
      {repos.slice(start, end).map((repo, index) => {
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
      })}
      <Pagination
        totalRepo={repos.length}
        repoPerPage={repoPerPage}
        onChange={pageHandler}
      />
    </ul>
  );
};
export default Repositories;
