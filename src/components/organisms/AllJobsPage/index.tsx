import React from "react";
import { allJobs } from "../../../Entity/AllJobs";
import { filteredJobs } from "../../../Entity/filteredJobs";
import { formatDate } from "../../../utils/helpers";
import GroupedJobs from "../../molecules/GroupedJobs";
import { AllJobsWrapper } from "./allJobsStyles";

const AllJobsPage = () => {
  const jobs = filteredJobs.use();

  const dates = jobs
    .map((job) => formatDate(job.postedAt))
    .filter((jb, index, items) => items.indexOf(jb) === index);

  return (
    <AllJobsWrapper>
      {dates.map((date, _index) => (
        <GroupedJobs key={date} date={date} />
      ))}
    </AllJobsWrapper>
  );
};

export default AllJobsPage;
