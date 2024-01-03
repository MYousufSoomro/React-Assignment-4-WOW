import Cards from "../components/Cards";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Profiles from "../components/Profiles";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Cards />
      <Profiles />
    </>
  );
}
