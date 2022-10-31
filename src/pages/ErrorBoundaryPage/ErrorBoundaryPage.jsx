import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";

const ErrorBoundaryPage = (props) => {
  const [content, setContent] = useState("Joel");
  return (
    <>
      <div className="error__boundary--title">Test Error Boundary Page</div>
      <Card className="error__boundary--page">
        <h1>
          Welcome {content.toUpperCase()}, This is the page where you test the
          error boundary.
        </h1>
        <h2>
          When you click the button below, an error will occur which will be
          propagated to the top-most component which is the error
          boundary component and which will then catches the error.
        </h2>
        <Button onClick={() => setContent((prev) => [])}>Start test</Button>
      </Card>
    </>
  );
};
export default ErrorBoundaryPage;
