import { ChangeEvent, useEffect, useState } from "react";
import Button from "./components/atoms/Button";
import SearchBox from "./components/atoms/SearchBox";
import AllJobsPage from "./components/organisms/AllJobsPage";
import { allJobs, setAllJobs } from "./Entity/AllJobs";
import {
  filteredJobs,
  searchField,
  setFilteredJobs,
  setSearchField,
} from "./Entity/filteredJobs";
import jobListService from "./services/jobListService";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles, TailSpin } from "react-loader-spinner";

function App() {
  const foundJobs = allJobs.use();
  const filteredJob = filteredJobs.use();
  const [activeBtn, setActiveBtn] = useState("All Jobs");
  const [pageIsLoading, setPageIsLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const searchInput = searchField.use();

  const fetchJobList = async () => {
    const jobList = await jobListService
      .getJobList()
      .catch((err) => console.log("Error:", err));

    if (jobList?.error) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
    }

    if (jobList?.loading) {
      setPageIsLoading(true);
    } else {
      setPageIsLoading(false);
    }

    setAllJobs(jobList?.data.jobs);
    setFilteredJobs(jobList?.data.jobs);
  };

  useEffect(() => {
    fetchJobList();
  }, []);
  console.log("jobList:", foundJobs);

  const handleFilter = (type: string) => {
    setActiveBtn(type);
    if (type === "Featured Jobs") {
      const featured = foundJobs.filter(
        (job) => job.isFeatured || job.isFeatured === null
      );
      setFilteredJobs(featured);
    } else if (type === "Remote") {
      const remote = foundJobs.filter((job) => job.remotes.length > 0);

      setFilteredJobs(remote);
    } else if (type === "On Site") {
      const onSite = foundJobs.filter((job) => job.remotes.length === 0);

      setFilteredJobs(onSite);
    } else {
      console.log("default", foundJobs);
      setFilteredJobs(foundJobs);
    }

    return;
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const filterBtns = ["All Jobs", "Featured Jobs", "On Site", "Remote"];
  return (
    <div className="App">
      <nav>
        <SearchBox
          border="1px solid #cecece"
          value={searchInput}
          onChange={handleSearch}
        />
        <div className="filter-btns">
          {filterBtns.map((btn, _index) => (
            <Button
              key={btn}
              btnText={btn}
              isFilterBtn
              isActive={activeBtn === btn}
              onClick={() => handleFilter(btn)}
            />
          ))}
        </div>
      </nav>

      {pageIsLoading ||
        (filteredJob.length === 0 && (
          <div className="loader">
            <div className="loader-content">
              <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
          </div>
        ))}
      {!pageIsLoading && <AllJobsPage />}
    </div>
  );
}

export default App;
