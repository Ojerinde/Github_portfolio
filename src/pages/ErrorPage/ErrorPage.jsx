import { Helmet } from "react-helmet-async";

import { useNavigate } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>Invalid URL or Page</title>
        <meta
          name="description"
          content="The url to this page doesn't exist in the application"
        />
        <link rel="canonical" href="/404page" />
      </Helmet>

      {/* Application */}
      <Card className="nopage__card">
        <h1>Error 404 page!</h1>
        <h2>
          You are seeing this because you are NOT in a valid url. i.e., This
          page does not exist.
        </h2>
        <h3>Kindly go back to a valid url by clicking on the button below</h3>
        <Button onClick={goHomeHandler}>Go home</Button>
      </Card>
    </>
  );
};
export default ErrorPage;
