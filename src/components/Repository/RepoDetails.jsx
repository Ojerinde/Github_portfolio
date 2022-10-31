import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../store/DataContext";
import { ImPrevious } from "react-icons/im";
import useDate from "../../hooks/useDate";

const RepoDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { repos } = useContext(DataContext);
  const repo = repos.find((repo) => repo.id === +id);

  const created = useDate(repo.created_at);
  const pushed = useDate(repo.pushed_at);
  const updated = useDate(repo.updated_at);

  return (
    <>
      <div className="go__home">
        <ImPrevious onClick={() => navigate("/home")} />
        <p>Back</p>
      </div>
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
          <a href={`${repo.html_url}`} target='_blank' rel="noreferrer">{repo.url}</a>
        </div>
        <ul>
          <div>
            <label>Created At</label>
            <li>{created ? created : null}</li>
          </div>
          <div>
            <label>Pushed At</label>
            <li>{pushed ? pushed : null}</li>
          </div>
          <div>
            <label>Updated At</label>
            <li>{updated ? updated : null}</li>
          </div>
        </ul>
      </section>
    </>
  );
};
export default RepoDetails;
