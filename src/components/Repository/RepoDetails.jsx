import { useNavigate, useParams } from "react-router-dom";

import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

import { BsBackspaceFill } from "react-icons/bs";

import { Helmet } from "react-helmet-async";

import useDate from "../../hooks/useDate";
import Card from "../UI/Card/Card";

const RepoDetails = () => {
  const navigate = useNavigate();

  // Getting the repo id from the url
  const { id } = useParams();
  // Consuming the created datacontext
  const { repos } = useContext(DataContext);
  // Getting the full object of the id gotten
  const repo = repos.find((repo) => repo.id === +id);

  // Formatting the data using the useDate function
  const created = useDate(repo.created_at);
  const pushed = useDate(repo.pushed_at);
  const updated = useDate(repo.updated_at);

  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>More details of Ojerinde Joel Repository</title>
        <meta
          name="description"
          content="This page contains more details of a a particular repository of Ojerinde Joel"
        />
        <link rel="canonical" href={`/home/${id}`} />
      </Helmet>

      {/* Application */}
      <Card className="go__home">
        <BsBackspaceFill onClick={() => navigate("/home")} />
        <p>Back</p>
      </Card>
      <section className="repo__full--details">
        <h4>More Details</h4>
        <div>
          <label>Name</label>
          <h1>{repo.name}</h1>
        </div>
        <div>
          <label>ID</label>
          <h5>{repo.id}</h5>
        </div>
        <div>
          <label>Owner</label>
          <h5>{repo.owner.login}</h5>
        </div>
        <div>
          <label>Branch</label>
          <h5>{repo.default_branch}</h5>
        </div>
        <div>
          <label>Visibility</label>
          <h5>{repo.visibility}</h5>
        </div>
        <div>
          <label>Description</label>
          <h5>{repo.description}</h5>
        </div>
        <div>
          <label>Url</label>
          <a href={`${repo.html_url}`} target="_blank" rel="noreferrer">
            {repo.url}
          </a>
        </div>
        <ul>
          <li>
            <label>Created At</label>
            <p>{created ? created : null}</p>
          </li>
          <li>
            <label>Pushed At</label>
            <p>{pushed ? pushed : null}</p>
          </li>
          <li>
            <label>Updated At</label>
            <p>{updated ? updated : null}</p>
          </li>
        </ul>
      </section>
    </>
  );
};
export default RepoDetails;
