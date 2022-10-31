import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

const UserDetails = () => {
  const { userDetails: user } = useContext(DataContext);

  const created = new Date(user?.created_at);
  const year = created.getFullYear();
  const month = `${created.getMonth()}`.padStart(2, 0);
  const day = `${created.getDate()}`.padStart(2, 0);
  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="user__details">
      <div>
        <h3>Created</h3>
        <h2>{formattedDate}</h2>
      </div>
      <div>
        <h3>Followers</h3>
        <h2>{user?.followers}</h2>
      </div>
      <div>
        <h3>Following</h3>
        <h2>{user?.following}</h2>
      </div>
      <div>
        <h3>Location</h3>
        <h2>{user?.location}</h2>
      </div>
    </div>
  );
};
export default UserDetails;
