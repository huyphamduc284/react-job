import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import HomeCards from "@components/HomeCards";
import JobListing from "@components/JobListing";
import ViewAllJob from "@components/ViewAllJob";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <HomeCards />
        <JobListing />
        <ViewAllJob />
      </div>
    </>
  );
};

export default App;
