import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <ul className="navigation__list">
      <li>
        <Link to='/errorboundary'>Go to error boundary test page</Link>
      </li>
      <li>
        <Link to='/404page'>Go to a page that doesn't exist</Link>
      </li>
    </ul>
  );
};
export default Navigations;
