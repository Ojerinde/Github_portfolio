import { useContext } from "react";
import useDate from "../../hooks/useDate";
import { DataContext } from "../../store/DataContext";

const UserDetails = () => {
  const { userDetails: user } = useContext(DataContext);

  const created = useDate(user?.created_at);

  return (
    <div className="user__details">
      <div>
        <h3>Created</h3>
        <h4>{created ? created : null}</h4>
      </div>
      <div>
        <h3>Followers</h3>
        <h2>{user?.followers ?? null}</h2>
      </div>
      <div>
        <h3>Following</h3>
        <h2>{user?.following ?? null}</h2>
      </div>
      <div>
        <h3>Location</h3>
        <h2>{user?.location ?? null}</h2>
      </div>
    </div>
  );
};
export default UserDetails;
