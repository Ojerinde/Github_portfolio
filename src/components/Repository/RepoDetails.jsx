import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../store/DataContext";

const RepoDetails = () => {
  const { id } = useParams();
  const { repos } = useContext(DataContext);
  const repo = repos.find((repo) => repo.id === +id);

  const formatDate = (date) => {
    const now = new Date(date);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "short",
    };
    const locale = navigator.language;
    const formattedDate = new Intl.DateTimeFormat(locale, options).format(now);
    return formattedDate;
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <h1>{repo.name}</h1>
      </div>
      <div>
        <label>ID</label>
        <div>{repo.id}</div>
      </div>
      <div>
        <label>Owner</label>
        <div>{repo.owner.login}</div>
      </div>
      <div>
        <label>Branch</label>
        <div>{repo.default_branch}</div>
      </div>
      <div>
        <label>Description</label>
        <div>{repo.description}</div>
      </div>
      <div>
        <label>Visibility</label>
        <div>{repo.visibility}</div>
      </div>
      <div>
        <label>Url</label>
        <a href={`${repo.url}`}>{repo.url}</a>
      </div>
      <div>
        <label>Watchers</label>
        <div>{repo.watchers}</div>
      </div>
      <ul>
        <div>
          <label>Created At</label>
          <li>{formatDate(repo.created_at)}</li>
        </div>
        <div>
          <label>Pushed At</label>
          <li>{formatDate(repo.pushed_at)}</li>
        </div>
        <div>
          <label>Updated At</label>
          <li>{formatDate(repo.updated_at)}</li>
        </div>
      </ul>
    </div>
  );
};
export default RepoDetails;
