import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { ImPrevious, ImNext } from "react-icons/im";

const Pagination = (props) => {
  const repoPerPage = props.repoPerPage;
  const totalRepo = props.totalRepo;

  // Calculating the no of pages
  const total_pages = Math.ceil(totalRepo / repoPerPage);

  const [page, setPage] = useState(1);

  // A function handling moving to the previous stage
  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    props.onChange(page - 1);
  };

  // A function handling moving to the previous stage
  const nextHandler = () => {
    if (page === total_pages) return;

    setPage((page) => page + 1);
    props.onChange(page + 1);
  };

  // A function handling page setting by the icons
  const iconHandler = (num) => {
    props.onChange(num);
    setPage((page) => num);
  };

  return (
    <div className="pagination__card">
      <ImPrevious
        onClick={prevHandler}
        className={`pagination__icons--prev ${
          page === 1 ? " not__allowed" : ""
        }`}
      />
      <div className="pagination__buttons">
        {Array.from({ length: total_pages }, (_, index) => index + 1).map(
          (each) => (
            <BsCircleFill
              className={`${page === each ? "icon icon__active" : "icon"}`}
              key={each}
              onClick={iconHandler.bind(null, each)}
            />
          )
        )}
      </div>
      <ImNext
        onClick={nextHandler}
        className={`pagination__icons--next ${
          page === total_pages || total_pages < 1 ? " not__allowed" : ""
        }`}
      />
    </div>
  );
};
export default Pagination;
