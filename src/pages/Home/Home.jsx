import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigations from "../../components/Navigation/Navigation";
import Repositories from "../../components/Repository/Repositories";
import UserDetails from "../../components/UserDetails/UserDetails";

const Home = () => {
  return (
    <>
      <Header />
      <Navigations />
      <Repositories />
      <UserDetails />
      <Footer />
    </>
  );
};
export default Home;
