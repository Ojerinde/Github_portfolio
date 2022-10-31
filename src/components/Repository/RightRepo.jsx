import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

const RightAlignedRepo = (props) => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/home/" + props.id);
  };
  return (
    <li className="repo right__repo">
      <div>
        <h3>{props.name}</h3>
        <p>
          {props.description.slice(0, 100)}
          <span>...</span>
        </p>
        <Button onClick={buttonHandler}>See more details</Button>
      </div>
      <h1>{props.index}</h1>
    </li>
  );
};
export default RightAlignedRepo;
