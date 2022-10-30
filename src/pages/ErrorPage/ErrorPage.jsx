import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <Card className="error__card">
      <h2>Ooops! There is nothing here</h2>
      <Button onClick={goHomeHandler}>Go home</Button>
    </Card>
  );
};
export default ErrorPage;
