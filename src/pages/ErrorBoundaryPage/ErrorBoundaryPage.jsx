import { Helmet } from "react-helmet-async";

import { useState } from "react";

import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";

const ErrorBoundaryPage = (props) => {
  // Managing state
  const [content, setContent] = useState("Joel");

  // An error will occur if content data type is anything apart from String
  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>A page to test Error Boundary component functionality</title>
        <meta
          name="description"
          content="This is the page to test the functionality of the ErrorBoundary component"
        />
        <link rel="canonical" href="/errorboundary" />
      </Helmet>

      {/* Application */}
      <div className="error__boundary--title">Test Error Boundary Page</div>
      <Card className="error__boundary--page">
        <h1>
          Welcome {content.toUpperCase()}, This is the page where you test the
          error boundary.
        </h1>
        <h2>
          When you click the button below, an error will occur which will be
          propagated to the top-most component which is the error boundary
          component and which will then catches the error.
        </h2>
        <Button onClick={() => setContent((prev) => [])}>Start test</Button>
      </Card>
    </>
  );
};
export default ErrorBoundaryPage;
