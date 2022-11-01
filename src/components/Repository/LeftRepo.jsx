import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

const LeftAlignedRepo = (props) => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/home/" + props.id);
  };
  return (
    <li className="repo left__repo">
      <h2>{props.index}</h2>
      <div>
        <h3>{props.name}</h3>
        <p>
          {props.description?.slice(0, 100)}
          <span>...</span>
        </p>
        <Button onClick={buttonHandler}>See more details</Button>
      </div>
    </li>
  );
};
export default LeftAlignedRepo;
