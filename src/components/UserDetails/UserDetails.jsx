import { useContext } from "react";
import { DataContext } from "../../store/DataContext";
import useDate from "../../hooks/useDate";

const UserDetails = () => {
  // Consuming the created context as well as Destructuring and given it an alias
  const { userDetails: user } = useContext(DataContext);

  // Formatting the date using the custom function
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
